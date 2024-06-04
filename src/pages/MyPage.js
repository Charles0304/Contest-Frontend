import React from 'react';
import Aside from '../components/Aside';
import InterestMain from '../components/InterestMain';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyPage() {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className="flex h-full">
            <Aside/>
            <InterestMain/>
        </div>
        <Footer/>
    </div>
  );
}
