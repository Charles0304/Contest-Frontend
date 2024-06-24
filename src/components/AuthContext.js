import React,{ createContext, useEffect, useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider=({children})=> {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    useEffect(()=>{
      if(localStorage.getItem("token"))
        setIsLoggedIn(true)
    },[])
    const login = ()=>{
        setIsLoggedIn(true);
    };
    const logout = ()=>{
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
  return (
    <AuthContext.Provider value={{isLoggedIn,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
