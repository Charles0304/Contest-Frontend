import logo from './logo.svg';
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
