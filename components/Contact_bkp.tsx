import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Overdraft Facility (Flexi)'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      // Replace these with your actual EmailJS credentials
      const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        product: formData.product,
        to_email: 'ankitamarkam994@gmail.com', // Your email address
        message: `New contact form submission from ${formData.name}:
        
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Interested Product: ${formData.product}

This is an automated message from the Ank.finance contact form.`
      };

      // Send email
      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: 'Overdraft Facility (Flexi)'
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later or contact us directly at ankitamarkam994@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
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

          <div className="bg-white rounded-lg p-8 text-slate-900 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                    <p className="text-sm text-green-700 mt-1">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Error sending message</p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage || 'Please try again later.'}</p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500" 
                  placeholder="Your Employer" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500" 
                      placeholder="john@example.com" 
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500" 
                      placeholder="+91..." 
                    />
                </div>
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700">Interested Product</label>
                <select 
                  id="product" 
                  value={formData.product}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500"
                >
                  <option>Overdraft Facility (Flexi)</option>
                  <option>Personal Loan</option>
                  <option>Business Loan</option>
                </select>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Request Call Back'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;