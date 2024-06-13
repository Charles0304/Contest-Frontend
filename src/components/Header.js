import React, { useContext } from 'react'
import myImage from '../assets/img/main.png'
import { AuthContext } from './AuthContext'
import { Link } from 'react-router-dom';

export default function Header() {
    const {isLoggedIn,logout} = useContext(AuthContext);
    return (
        <header className="flex justify-between items-center p-2.5 bg-white border-b border-gray-300">
            <div className="flex items-center w-full">
                <Link to='/'>
                <img src={myImage} alt="Figma Logo" className="w-10 mr-5" />
                </Link>
                <nav className="flex-grow">
                    <Link to="/search" className="mr-5 text-black no-underline">Search</Link>
                    <Link to="/mypage" className="mr-5 text-black no-underline">My page</Link>
                    <Link to="/description" className="mr-5 text-black no-underline">HS코드 설명</Link>
                </nav>
                {isLoggedIn ?(
                    <button onClick={logout} className="text-black no-underline mr-5">Logout</button>
                ):(
                    <Link to="/login" className="text-black no-underline mr-5">Login</Link>

                )} 
                </div>
        </header>
    )
}
