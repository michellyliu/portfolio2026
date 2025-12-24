import { Link } from 'react-router-dom'

interface LogoProps {
  size?: number
  className?: string
  linkToHome?: boolean
}

const Logo = ({ size = 32, className = "", linkToHome = true }: LogoProps) => {
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle cx="32" cy="32" r="32" className="fill-[#3B2B15] dark:fill-[#FFFBF5] transition-colors duration-300"/>
        <text 
          x="32" 
          y="32" 
          textAnchor="middle" 
          dominantBaseline="central"
          className="fill-[#FFFBF5] dark:fill-[#3B2B15] transition-colors duration-300"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: '30px',
            letterSpacing: '-5px'
          }}
        >
          ML
        </text>
      </svg>
    </div>
  )

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        onClick={() => window.scrollTo(0, 0)}
        className="hover:scale-95 active:scale-90 transition-transform"
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

export default Logo

