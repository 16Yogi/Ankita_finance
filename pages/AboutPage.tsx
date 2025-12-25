import About from '@/components/About'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function AboutPage() {
  return (
    <>
        <Hero/>
        <About/>
        <Team/>
        <Partners/>
        <Testimonials/>
    </>
  )
}
