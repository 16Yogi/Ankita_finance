import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Get In Touch</h2>
            <p className="text-brand-100 text-lg mb-8">
              Interested in our Overdraft Facilities or Personal Loan offerings? 
              Our team is here to guide you through the process and answer any questions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Contact Us</p>
                  <p className="text-brand-100">+91 826 915 2293</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Email</p>
                  <p className="text-brand-100">ankitamarkam994@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Office</p>
                  <p className="text-brand-100">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-brand-700 bg-brand-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.6628620857!2d75.72051680212048!3d22.7242031754876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da433678078!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710330000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          <div className="relative h-full min-h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-700/50 group">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80" 
               alt="Customer Support" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/60 to-transparent flex flex-col justify-end p-8 sm:p-12">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">We're Here to Help</h3>
                  <p className="text-brand-100 text-lg leading-relaxed max-w-md">Our dedicated team is ready to assist you with all your financial needs. Reach out to us today for personalized support using the contact details.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;