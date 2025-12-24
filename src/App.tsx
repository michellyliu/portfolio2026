import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyArt from './pages/MyArt'
import MyStory from './pages/MyStory'
import MyExperiments from './pages/MyExperiments'
import UXStrategy from './pages/UXStrategy'
import ProductCatalog from './pages/ProductCatalog'
import './index.css'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1a1611] transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-art" element={<MyArt />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="/my-experiments" element={<MyExperiments />} />
            <Route path="/ux-strategy" element={<UXStrategy />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
