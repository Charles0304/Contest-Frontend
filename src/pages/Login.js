import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}
