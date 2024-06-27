import React from 'react'
import myImage from '../assets/img/main.png'
import { Link,useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '../recoil/atoms';




export default function Header() {
    const isLoggedIn = useRecoilValue(isLoggedInState);
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const user = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('user');
        navigate('/')
    }
    console.log("nickname",user)
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
                    <>
                    <button onClick={handleLogout} className="text-black no-underline mr-5">Logout</button>
                    {user?.username}
                    </>
                ):(
                    <Link to="/login" className="text-black no-underline mr-5">Login</Link>

                )} 
                </div>
        </header>
    )
}
