import React, { useState } from 'react'
import { Menu, X, Landmark } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Products', to: '/product' },
    { name: 'Calculator', to: '/calculator' },
    { name: 'Partners', to: '/partner' },
    { name: 'Team', to: '/team' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-900 p-2 rounded-lg text-white">
              <Landmark size={24} />
            </div>
            <span className="font-bold text-xl text-brand-900">
              Ank.finance
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex space-x-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className="text-slate-600 hover:text-brand-600 px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-brand-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-slate-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
