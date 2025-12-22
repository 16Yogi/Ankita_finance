import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 relative">
             <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200">
               <img 
                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                 alt="Team working on financial planning" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-brand-900/10"></div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
          
          <div>
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Who We Are</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Empowering Your Financial Journey
            </h3>
            <p className="mt-4 text-lg text-slate-500">
              At <span className="font-semibold text-brand-900">Ank.finance Consulting</span>, we understand the importance of financial flexibility and accessibility. That's why we're excited to offer our specialized Overdraft Facilities and Personal Loan solutions to salaried individuals working with reputed companies.
            </p>
            
            <div className="mt-8 space-y-4">
               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <CheckCircle className="h-6 w-6 text-brand-500" />
                 </div>
                 <p className="ml-3 text-base text-slate-600">
                   <strong>Tailored Solutions:</strong> Customized credit limits based on your salary profile.
                 </p>
               </div>
               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <CheckCircle className="h-6 w-6 text-brand-500" />
                 </div>
                 <p className="ml-3 text-base text-slate-600">
                   <strong>Transparent Dealings:</strong> Pay interest only on what you use, with zero hidden fees.
                 </p>
               </div>
               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <CheckCircle className="h-6 w-6 text-brand-500" />
                 </div>
                 <p className="ml-3 text-base text-slate-600">
                   <strong>Rapid Access:</strong> Quick processing and disbursal within 24 hours.
                 </p>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
               <div className="flex items-center gap-2 text-sm text-slate-500">
                 <span>Reference: SEBI Registered Stock Market Advisor in Indore –</span>
                 <a 
                   href="https://share.google/KB1WPbgxcYx6Zdm1s" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center text-brand-600 font-medium hover:underline"
                 >
                   Astrobulls <ExternalLink size={14} className="ml-1" />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;