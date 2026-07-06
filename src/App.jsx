import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <PageLoader />
      <div className='bg-[#F8F0D8]'>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
