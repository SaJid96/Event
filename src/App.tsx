import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Venues from './components/Venues'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import ParallaxDivider from './components/ParallaxDivider'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingPage from './pages/BookingPage'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCursor } from './hooks/useCursor'

function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useScrollReveal()
  useCursor()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const openBooking = () => navigate('/book')

  return (
    <>
      <Cursor />
      <Loader loaded={loaded} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} scrollTo={scrollTo} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} openBooking={openBooking} />
      <Hero scrollTo={scrollTo} openBooking={openBooking} />
      <Stats />
      <About />
      <Venues />
      <Services />
      <Gallery />
      <WhyUs />
      <ParallaxDivider scrollTo={scrollTo} />
      <Testimonials />
      <Contact />
      <Footer scrollTo={scrollTo} openBooking={openBooking} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
