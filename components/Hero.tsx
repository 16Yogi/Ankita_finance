import React from 'react';
import { ChevronRight, ShieldCheck, Banknote, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wide mb-4">
              SEBI Registered Consultants Available
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Unlock Financial</span>{' '}
              <span className="block text-brand-600 xl:inline">Flexibility Today</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Access Overdraft Facilities of 10-15x your salary. Pay interest only on what you use. No hidden EMI burdens.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition shadow-lg shadow-brand-500/30">
                  Check Eligibility
                  <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
                </a>
                <a href="#calculator" className="inline-flex items-center justify-center px-5 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition">
                  Calculate Savings
                </a>
              </div>
            </div>
            
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-600 mb-1">
                    <Banknote className="w-5 h-5" />
                    <span className="font-bold text-lg">15x</span>
                  </div>
                  <p className="text-sm text-slate-500">Salary Limit</p>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-600 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="font-bold text-lg">24h</span>
                  </div>
                  <p className="text-sm text-slate-500">Disbursal</p>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-600 mb-1">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-bold text-lg">0%</span>
                  </div>
                  <p className="text-sm text-slate-500">Impact on CIBIL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                    <img
                    className="w-full"
                    src="https://picsum.photos/600/500?grayscale"
                    alt="Financial Growth"
                    />
                    <div className="absolute inset-0 bg-brand-900 mix-blend-multiply opacity-20"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <p className="font-bold text-lg">Why choose Flexi Limit?</p>
                        <p className="text-sm opacity-90">Experience the freedom of withdrawing only what you need, when you need it.</p>
                     </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;