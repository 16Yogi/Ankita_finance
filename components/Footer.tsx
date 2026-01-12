import React from 'react'

export default function Footer() {
  return (
   <>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Ank.finance Consulting. All rights reserved.</p>
            {/* <p className="text-sm mt-2">SEBI Registered Consultant Reference: Astrobulls</p> */}
          </div>
      </footer>   
   </>
  )
}
