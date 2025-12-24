import { Link, useNavigate, useLocation } from 'react-router-dom'

const DarkNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToProjects = () => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById('projects')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById('projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="bg-[#3B2B15] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-[24px] md:px-[64px] lg:px-[120px] py-[32px] md:py-[40px] lg:py-[48px]">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-[20px] font-serif italic font-normal text-white/90 hover:scale-95 active:scale-90 transition-transform"
          >
            michellyliu.com
          </Link>
          
          <div className="flex items-center gap-[24px] md:gap-[40px]">
            <button
              onClick={scrollToProjects}
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-white/90 leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
            >
              MY WORK
            </button>
            <Link
              to="/my-art"
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-white/90 leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
            >
              MY ART
            </Link>
            <Link
              to="/my-story"
              className="text-[14px] md:text-[16px] font-sans uppercase tracking-[-0.08px] font-normal text-white/90 leading-[1.45] hover:scale-95 active:scale-90 transition-transform"
            >
              MY STORY
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DarkNavbar

