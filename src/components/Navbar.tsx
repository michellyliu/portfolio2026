import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import Logo from './Logo'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const scrollToProjects = () => {
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation and scroll to top first
      setTimeout(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          const element = document.getElementById('projects')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }, 100)
    } else {
      window.scrollTo(0, 0)
      setTimeout(() => {
        const element = document.getElementById('projects')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFBF5] dark:bg-[#1a1611] border-b-[0.5px] border-[#3B2B15]/50 dark:border-[#FFFBF5]/80 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-[24px] md:px-[64px] lg:px-[120px] py-[24px] md:py-[32px] lg:py-[40px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[16px]">
            <Logo size={32} />
            <Link 
              to="/" 
              className="text-[20px] font-serif italic font-normal text-[#3B2B15] dark:text-[#FFFBF5] hover:scale-95 active:scale-90 transition-transform"
              onClick={() => window.scrollTo(0, 0)}
            >
              michellyliu.com
            </Link>
          </div>
          
          <div className="flex items-center gap-[24px] md:gap-[40px]">
            <button
              onClick={scrollToProjects}
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
            >
              MY WORK
            </button>
            <Link
              to="/my-art"
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
              onClick={() => window.scrollTo(0, 0)}
            >
              MY ART
            </Link>
            <Link
              to="/my-story"
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
              onClick={() => window.scrollTo(0, 0)}
            >
              MY STORY
            </Link>
            <button
              onClick={toggleTheme}
              className="w-[24px] h-[24px] flex items-center justify-center text-[#3B2B15] dark:text-[#FFFBF5] hover:scale-95 active:scale-90 transition-transform cursor-pointer"
              aria-label="Toggle dark mode"
              type="button"
            >
              {isDark ? (
                <Sun size={24} className="transition-transform duration-300" />
              ) : (
                <Moon size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
