import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Main_Content from '../components/Main_Content';

function Main() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Main_Content/>
            <Footer/>
        </div>
    );
}

export default Main;
