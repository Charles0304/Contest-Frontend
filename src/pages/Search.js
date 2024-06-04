
import Header from '../components/Header'
import Footer from '../components/Footer'
import './search.css';
import Search_main from '../components/Search_main';

export default function Search() {
    
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <Search_main/>
        <Footer/>
    </div>
  )
}
