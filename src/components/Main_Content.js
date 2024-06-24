import React from 'react'
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/img/main.png'

export default function Main_Content() {

    const navigate = useNavigate();
    return (
        <main className="flex flex-1">
            <section className="flex flex-1 flex-col pl-32 pr-14 justify-center items-left">
                <h1 className='mb-4 text-4xl font-extrabold text-gray-900'>Zoom, In HS로 HS코드를 찾아보세요. </h1>
                <p className='mb-4'>해당 웹 페이지는 KOTRA와 함께합니다. 국내기업이 취급하고 있는 품목과 유사한 품목을 취급하는 해외기업을 찾는데 도움을 주는 웹페이지 입니다.
                단어, 문장, 기업에 대한 영문 Description을 입력해서, 관련 HScode를 받아보세요. HScode가 어떤 것인지 잊어버려셨나요? 검색으로 쉽게 찾아보세요! </p>
                <button className="text-white w-24 bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                    onClick={() => navigate('/search')}>사용하기</button>
            </section>
            <section className="flex-1 flex justify-center items-center pr-32 pl-14">
                <img src={myImage} alt="Illustration" className="max-w-full h-auto" />
            </section>
        </main>
    )
}
