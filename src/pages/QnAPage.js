
import QnABoard from '../components/QnABoard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
export default function QnAPage() {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className="flex flex-grow h-full">
            <Aside/>
            <QnABoard/>
        </div>
        <Footer/>
    </div>
  )
}
