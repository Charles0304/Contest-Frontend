import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Log from '../components/Log';

export default function LogPage() {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className="flex flex-grow h-full">
            <Aside/>
            <Log/>
        </div>
        <Footer/>
    </div>
  );
}
