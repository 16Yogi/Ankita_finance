import React from 'react';

import bajaj from '../assets/banks/bajaj.png';
import kotak from '../assets/banks/kotak.png';
import aditya from '../assets/banks/aditya-birla.png';
import tata from '../assets/banks/tata-capital.png';
import axisBank from '../assets/banks/axis-bank.png';
import icici from '../assets/banks/icici.png';
import finnable from '../assets/banks/finnable.png';
import hdfc from '../assets/banks/hdfc.png';
import idfc from '../assets/banks/idfc.png';
import indusind from '../assets/banks/indusind.png';
import yes from '../assets/banks/yes-bank.png';
import chola from '../assets/banks/cholamandalam.png';
import piramal from '../assets/banks/piramal.png';
import lt from '../assets/banks/lt.png';

const Partners: React.FC = () => {
  const banks = [
    { name: "Bajaj Finserv", logo: bajaj },
    { name: "Kotak Mahindra Bank", logo: kotak },
    { name: "Aditya Birla", logo: aditya },
    { name: "Tata Capital", logo: tata },
    { name: "Axis Bank", logo: axisBank },
    { name: "ICICI Bank", logo: icici },
    { name: "Finnable", logo: finnable },
    { name: "HDFC Bank", logo: hdfc },
    { name: "IDFC Bank", logo: idfc },
    { name: "IndusInd Bank", logo: indusind },
    { name: "Yes Bank", logo: yes },
    { name: "Cholamandalam", logo: chola },
    { name: "Piramal", logo: piramal },
    { name: "L&T", logo: lt },
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
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-10 object-contain mb-3"
              />
              <span className="text-sm font-semibold text-slate-500 text-center">
                {bank.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
