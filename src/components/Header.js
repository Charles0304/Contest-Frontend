import React, { useContext } from 'react'
import myImage from '../assets/img/main.png'
import { AuthContext } from './AuthContext'

export default function Header() {
    const {isLoggedIn,logout} = useContext(AuthContext);
    return (
        <header className="flex justify-between items-center p-2.5 bg-white border-b border-gray-300">
            <div className="flex items-center w-full">
                <a href='/'>
                <img src={myImage} alt="Figma Logo" className="w-10 mr-5" />
                </a>
                <nav className="flex-grow">
                    <a href="/search" className="mr-5 text-black no-underline">Search</a>
                    <a href="/mypage" className="mr-5 text-black no-underline">My page</a>
                    <a href="/description" className="mr-5 text-black no-underline">HS코드 설명</a>
                </nav>
                {isLoggedIn ?(
                    <button onClick={logout} className="text-black no-underline mr-5">Logout</button>
                ):(
                    <a href="/login" className="text-black no-underline mr-5">Login</a>

                )}
                </div>
        </header>
    )
}
