import ChatAssistant from '@/components/ChatAssistant'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  )
}
