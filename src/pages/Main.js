import React from 'react';
import myImage from '../assets/img/main.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex flex-1">
                <section className="flex flex-1 flex-col pl-32 pr-14 justify-center items-left">
                    <h1 className='mb-4 text-4xl font-extrabold text-gray-900'>웹 어플리케이션에 대한 디스크립트</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas porro necessitatibus illum obcaecati laborum ratione sed, voluptates nostrum? Quasi, explicabo fuga! Suscipit in voluptatem, ducimus ipsa error cumque saepe aspernatur?</p>
                    <button className="text-white w-24 bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                       onClick={()=>navigate('/search')}>사용하기</button>
                </section>
                <section className="flex-1 flex justify-center items-center pr-32 pl-14">
                    <img src={myImage} alt="Illustration" className="max-w-full h-auto" />
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Main;
