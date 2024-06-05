
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import CodeDescription from './pages/CodeDescription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/description' element={<CodeDescription/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
