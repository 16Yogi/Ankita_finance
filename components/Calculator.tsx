import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CalculationRow } from '../types';

const Calculator: React.FC = () => {
  // Defaults based on the prompt's example
  const [loanAmount, setLoanAmount] = useState(100000);
  const [monthlyReduction, setMonthlyReduction] = useState(10000);
  
  // Implicit interest rate derived from prompt: 1250 for 1 month on 1L = 1.25% monthly = 15% yearly
  const interestRate = 15; 

  const data = useMemo(() => {
    let currentBalance = loanAmount;
    const rows: CalculationRow[] = [];
    const monthlyRate = interestRate / 100 / 12;
    // alert(monthlyRate);
    let totalInt = 0;

    // Simulate for 12 months or until paid off
    for (let i = 1; i <= 12; i++) {
      if (currentBalance <= 0) break;

      const interest = currentBalance * monthlyRate;
      // alert(interest);
      totalInt += interest;

      rows.push({
        month: i,
        balance: currentBalance,
        interest: Math.round(interest),
        principalPaid: monthlyReduction,
      });

      currentBalance -= monthlyReduction;
      if (currentBalance < 0) currentBalance = 0;
    }
    return { rows, totalInterest: Math.round(totalInt) };
  }, [loanAmount, monthlyReduction]);

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              How the Flexi Limit Works
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              See how you save money. Unlike a traditional loan where interest is charged on the full amount, 
              Flexi Limit only charges interest on the utilized amount. As you pay back, your interest drops drastically.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-100 space-y-6">
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Utilized Amount (₹)</label>
                <input 
                  type="number" 
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                />
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Principal Repayment (₹)</label>
                <input 
                  type="number" 
                  value={monthlyReduction}
                  onChange={(e) => setMonthlyReduction(Number(e.target.value))}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                />
                <input 
                  type="range" 
                  min="1000" 
                  max={loanAmount} 
                  step="1000"
                  value={monthlyReduction}
                  onChange={(e) => setMonthlyReduction(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>

              <div className="p-4 bg-white rounded-lg border border-brand-100 shadow-sm">
                <p className="text-sm text-brand-800 font-medium">Total Interest for Period</p>
                <p className="text-3xl font-bold text-brand-600">₹{data.totalInterest.toLocaleString()}</p>
                <p className="text-xs text-brand-400 mt-1">*Based on {interestRate}% reducing interest calculation</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
             <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Interest & Balance Projection</h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data.rows}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottomRight', offset: 0 }} />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip 
                        formatter={(value, name) => [
                           `₹${value}`, 
                           name === 'interest' ? 'Interest Paid' : 'Balance'
                        ]}
                      />
                      <Legend />
                      <Bar yAxisId="left" dataKey="balance" name="Remaining Balance" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="interest" name="Interest Paid" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Table for detailed view similar to prompt text */}
                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                      <tr>
                        <th className="px-4 py-2">Month</th>
                        <th className="px-4 py-2">Balance</th>
                        <th className="px-4 py-2">Interest Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.rows.slice(0, 5).map((row) => (
                        <tr key={row.month} className="border-b">
                           <td className="px-4 py-2">{row.month}</td>
                           <td className="px-4 py-2">₹{row.balance.toLocaleString()}</td>
                           <td className="px-4 py-2 text-brand-600 font-medium">₹{row.interest}</td>
                        </tr>
                      ))}
                      {data.rows.length > 5 && (
                        <tr>
                          <td colSpan={3} className="px-4 py-2 text-center text-xs italic">...remaining months hidden</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;