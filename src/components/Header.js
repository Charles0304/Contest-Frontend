import React from 'react'
import myImage from '../assets/img/main.png'

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2.5 bg-white border-b border-gray-300">
            <div className="flex items-center w-full">
                <a href='/'>
                <img src={myImage} alt="Figma Logo" className="w-10 mr-5" />
                </a>
                <nav className="flex-grow">
                    <a href="/search" className="mr-5 text-black no-underline">Search</a>
                    <a href="#my-page" className="mr-5 text-black no-underline">My page</a>
                    <a href="#hs-code-description" className="mr-5 text-black no-underline">HS코드 설명</a>
                </nav>
                <a href="/login" className="text-black no-underline mr-5">Login</a>
            </div>
        </header>
    )
}
