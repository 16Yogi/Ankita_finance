import About from '@/components/About'
import Calculator from '@/components/Calculator'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <>
        <Hero/>
        <About/>
        <Features/>
        <Calculator/>
        <Partners/>
        <Team/>
        <Testimonials/>
        <Contact/>
    </>
  )
}
