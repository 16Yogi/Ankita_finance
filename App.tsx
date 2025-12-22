import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Partners from './components/Partners';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Calculator />
        <Partners />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Ank.finance Consulting. All rights reserved.</p>
          <p className="text-sm mt-2">SEBI Registered Consultant Reference: Astrobulls</p>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;