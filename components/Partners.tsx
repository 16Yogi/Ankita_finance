import React from 'react';

const Partners: React.FC = () => {
  const banks = [
    "Bajaj Finserv",
    "Kotak Mahindra Bank",
    "Aditya Birla",
    "Tata Capital",
    "Axis Finance",
    "Axis Bank",
    "ICICI Bank",
    "Finnable",
    "HDFC Bank",
    "IDFC Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Cholamandalam",
    "Piramal"
  ];

  return (
    <section id="partners" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">
          Trusted Banking Partners
        </h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {banks.map((bank, index) => (
            <div 
              key={index} 
              className="col-span-1 flex justify-center items-center p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group"
            >
              <span className="text-sm md:text-base font-semibold text-slate-400 group-hover:text-brand-700 text-center">
                {bank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;