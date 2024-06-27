
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import CodeDescription from './pages/CodeDescription';
import { RecoilRoot } from 'recoil';
import React from 'react';
import QnAPage from './pages/QnAPage';
import { isLoggedInState } from './recoil/atoms';
import { useRecoilValue } from 'recoil';
import LogPage from './pages/LogPage';


const PrivateRoute = ({ children }) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return isLoggedIn ? children : <Login />;
};



function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/mypage' element={<PrivateRoute><MyPage /></PrivateRoute>}></Route>
          <Route path='/description' element={<CodeDescription />}></Route>
          <Route path='/qna' element={<QnAPage />}></Route>
          <Route path='/log' element={<LogPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
