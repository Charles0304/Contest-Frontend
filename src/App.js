import logo from './logo.svg';
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
