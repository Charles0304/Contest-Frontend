
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import CodeDescription from './pages/CodeDescription';
import { AuthProvider, AuthContext } from './components/AuthContext';
import React from 'react';

const PrivateRoute = ({children})=>{
  const {isLoggedIn} = React.useContext(AuthContext);
  return isLoggedIn ? children : <Login/>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/mypage' element={<MyPage />}></Route>
          <Route path='/description' element={<CodeDescription />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
