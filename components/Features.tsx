import React from 'react';
import { Landmark, TrendingUp, Zap, Calendar, Briefcase, Percent } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'High Cash Limit',
      description: 'Get approved for a cash limit of 10-15 times your current monthly take-home salary.',
      icon: TrendingUp,
    },
    {
      name: 'Interest on Utilized Only',
      description: 'Why pay for what you don’t use? Charged interest only on the amount you withdraw.',
      icon: Percent,
    },
    {
      name: 'Long Tenure',
      description: 'Enjoy the peace of mind with a facility validity of up to 8 years.',
      icon: Calendar,
    },
    {
      name: 'Zero EMI Burden',
      description: 'Flexible repayment structure. Make part payments or withdrawals freely without fixed EMIs.',
      icon: Landmark,
    },
    {
      name: 'Quick Disbursal',
      description: 'Get the amount credited to your account within 24 hours of document submission.',
      icon: Zap,
    },
    {
      name: 'CIBIL Friendly',
      description: 'Our tailored overdraft facility is designed to have no negative impact on your CIBIL score.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Our Offerings</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Overdraft, Personal & Business Loans
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Tailored financial solutions designed for salaried professionals in reputed companies.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;