import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: 'Ankit Sharma',
      role: 'Founder & Principal Consultant',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Ex-Banker with 12+ years of experience in corporate finance, debt restructuring, and wealth management.'
    },
    {
      name: 'Neha Gupta',
      role: 'Senior Loan Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Specialist in credit risk assessment and personalized loan structuring for salaried professionals.'
    },
    {
      name: 'Rahul Verma',
      role: 'Client Relationship Head',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Dedicated to ensuring smooth documentation processes and 24-hour disbursal timelines for our premium clients.'
    }
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet the Experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Experienced professionals committed to securing your financial flexibility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 group">
              <div className="aspect-w-3 aspect-h-2 relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-1 rounded-full hover:bg-brand-50">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-1 rounded-full hover:bg-brand-50">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;