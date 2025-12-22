import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      content: "The Flexi Limit facility is a game changer. I used to pay EMI on my full personal loan amount, but now I only pay interest on what I use. The savings are real.",
      author: "Amit Patel",
      role: "Senior Project Manager",
      company: "TCS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      content: "I needed funds urgently for a medical emergency. The team at Ank.finance got the amount disbursed within 24 hours as promised. Zero hassle documentation.",
      author: "Priya Sharma",
      role: "Software Architect",
      company: "Infosys",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      content: "Highly professional consultants. They explained the difference between a regular loan and an overdraft clearly. The 'No Foreclosure Charges' feature is fantastic.",
      author: "Rajesh Kumar",
      role: "Operations Head",
      company: "HDFC Life",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Happy Clients
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Don't just take our word for it. Here is what professionals from top companies have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative border border-slate-100">
              <div className="absolute top-6 right-8 text-brand-100">
                <Quote size={48} className="transform rotate-180" />
              </div>
              
              <div className="flex space-x-1 text-accent-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 relative z-10 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-slate-100" 
                    src={review.image} 
                    alt={review.author} 
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-bold text-slate-900">{review.author}</div>
                  <div className="text-sm text-brand-600 font-medium">{review.role}, {review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;