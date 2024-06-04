import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignUpForm from '../components/SignupForm'

export default function Signup() {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className='h-screen flex justify-center items-center bg-gray-100'>
        <SignUpForm/>
        </div>
        <Footer/>
    </div>
  )
}
