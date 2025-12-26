import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Base from './layout/Base'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import CalculatorPage from './pages/CalculatorPage'
import PartnerPage from './pages/PartnerPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="partner" element={<PartnerPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
