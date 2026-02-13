import React from 'react';
import { 
  Landmark, 
  TrendingUp, 
  Zap, 
  Calendar, 
  Briefcase, 
  Percent, 
  Home, 
  FileText, 
  ShieldCheck, 
  Users, 
  Building2, 
  Banknote,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ElementType;
}

interface LoanSection {
  id: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
  benefits: string[];
  requirements: string[];
}

const Features: React.FC = () => {
  const loanTypes: LoanSection[] = [
    {
      id: 'overdraft',
      title: 'Overdraft Facility',
      subtitle: 'Smart credit line for salaried professionals.',
      features: [
        { title: 'Pay Per Use', desc: '0% Interest on unused amount.', icon: Percent },
        { title: 'High Limit', desc: 'Up to 15x monthly salary.', icon: TrendingUp },
        { title: 'No EMIs', desc: 'Repay principal when you want.', icon: Landmark },
      ],
      benefits: [
        'No foreclosure or prepayment charges',
        'Lifetime free credit line validity',
        'Works like a secondary bank account',
        'Emergency fund available 24/7'
      ],
      requirements: [
        'Net Monthly Salary > ₹25,000',
        'Minimum 6 months work experience',
        'Salary credited via bank transfer',
        'CIBIL Score > 700'
      ]
    },
    {
      id: 'personal',
      title: 'Personal Loan',
      subtitle: 'Instant unsecured funds for any purpose.',
      features: [
        { title: 'Lightning Fast', desc: 'Disbursal in 24 hours.', icon: Zap },
        { title: 'Unsecured', desc: 'No collateral needed.', icon: ShieldCheck },
        { title: 'Paperless', desc: '100% Digital process.', icon: FileText },
      ],
      benefits: [
        'Flexible tenure up to 96 months',
        'Competitive interest rates starting @ 9.99%',
        'Consolidate debt into one payment',
        'Top-up loan facility available'
      ],
      requirements: [
        'Age: 21 to 58 years',
        'Employment in Pvt Ltd, LLP, or Govt',
        'KYC Documents (Aadhar/PAN)',
        'Last 3 months bank statement'
      ]
    },
    {
      id: 'business',
      title: 'Business Loan',
      subtitle: 'Capital to scale your operations.',
      features: [
        { title: 'Cash Flow', desc: 'Working capital solutions.', icon: Briefcase },
        { title: 'Big Ticket', desc: 'Loans up to ₹5 Crores.', icon: Building2 },
        { title: 'Flexible', desc: 'Custom repayment tenure.', icon: Calendar },
      ],
      benefits: [
        'Tax benefits on interest paid',
        'Improve business credit score',
        'Retain full ownership (no equity dilution)',
        'Quick approval based on turnover'
      ],
      requirements: [
        'Business vintage > 2 Years',
        'ITR filed for last 2 years',
        'GST Registration Certificate',
        'Annual Turnover > ₹20 Lakhs'
      ]
    },
    {
      id: 'home',
      title: 'Home Loan',
      subtitle: 'Affordable financing for your dream home.',
      features: [
        { title: 'Long Tenure', desc: 'Up to 30 years repayment.', icon: Home },
        { title: 'Transfer', desc: 'Low-cost Balance Transfer.', icon: Banknote },
        { title: 'Subsidy', desc: 'PMAY benefits applicable.', icon: Users },
      ],
      benefits: [
        'Tax deduction under Section 80C & 24b',
        'Doorstep service assistance',
        'Pre-approved offers before property selection',
        'No hidden administrative fees'
      ],
      requirements: [
        'Salaried or Self-Employed',
        'Property legal and technical clearance',
        'Down payment proof (10-20%)',
        'Co-applicant allowed for higher eligibility'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">
            Our Financial Products
          </h2>
          <p className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900">
            Choose the right plan for you.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
            Transparent terms, quick processing, and benefits designed for your growth.
          </p>
        </div>

        {/* Loan Sections Loop */}
        <div className="space-y-24">
          {loanTypes.map((loan, index) => {
            // FIX: Assign the first icon to a variable (MainIcon) here
            const MainIcon = loan.features[0].icon;

            return (
              <div 
                key={loan.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Column: Title & Key Features */}
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
                      {/* FIX: Use the variable MainIcon here instead of array access */}
                      <MainIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{loan.title}</h3>
                    <p className="text-lg text-slate-600 mt-2">{loan.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {loan.features.map((feature, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <feature.icon className="h-8 w-8 text-blue-500 mb-3" />
                        <h4 className="font-semibold text-slate-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Detailed Card (Benefits & Requirements) */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    {/* Card Header */}
                    <div className="bg-slate-900 p-6">
                      <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-400" />
                        Plan Details
                      </h4>
                    </div>
                    
                    <div className="p-8 grid md:grid-cols-2 gap-8">
                      {/* Benefits List */}
                      <div>
                        <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          Key Benefits
                        </h5>
                        <ul className="space-y-3">
                          {loan.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements List */}
                      <div>
                        <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500" />
                          Requirements
                        </h5>
                        <ul className="space-y-3">
                          {loan.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Call to Action Footer inside Card */}
                    <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                      <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                        View Full Terms & Conditions &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;