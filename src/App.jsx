import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

const AppLayout = () => {
  return (
    <>
      <PageLoader />
      <div className='bg-[#F8F0D8]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
