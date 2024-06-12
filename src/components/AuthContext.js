import React,{ createContext, useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider=({children})=> {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    const login = ()=>{
        setIsLoggedIn(true);
    };
    const logout = ()=>{
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("nickname");
    }
  return (
    <AuthContext.Provider value={{isLoggedIn,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
