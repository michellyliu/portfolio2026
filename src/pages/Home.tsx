import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1a1611] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-[56px] pb-[56px] md:pt-[64px] md:pb-[64px] lg:pt-[72px] lg:pb-[72px]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-[40px]"
          >
            <div className="flex flex-col gap-[40px]">
              <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-semimedium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
                Hi, I'm Michelle — a product designer fascinated by tiny, delightful details.
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
              {/* 🟢 Currently at JPMorganChase and nuturing my creative garden. */}
              <span
              style={{
                display: 'inline-block',
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '50%',
                backgroundColor: '#00c400',
                animation: 'pulseSlow 3s ease-in-out infinite',
              }} 
              ></span> Currently at JPMorganChase and tending to my creative garden.
              
              <style>{`
                @keyframes pulseSlow {
                  0%, 100% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.2); opacity: 0.45; }
                }
              `}</style> 
              </p>
        
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-[24px] md:gap-[32px]">
              <a
                href="https://drive.google.com/file/d/1ifTaHrecrkOwmlRerB1XPdLEgySBJOED/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[169px] md:w-auto px-3 py-4 border-2 border-[#3B2B15] dark:border-[#FFFBF5]/80 dark:border-[#FFFBF5]/80 text-[#3B2B15] dark:text-[#FFFBF5] font-sans text-[16px] md:text-[18px] font-medium leading-[1.45] tracking-[-0.08px] hover:scale-95 active:scale-90 transition-transform inline-block rounded-xl text-center"
              >
                Resume
              </a>
              
              <div className="flex items-center gap-[24px] md:gap-[32px] lg:gap-[24px]">
                <a
                  href="mailto:liumichelle3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[28px] h-[28px] flex items-center justify-center text-[#3B2B15] dark:text-[#FFFBF5]/80 hover:scale-95 active:scale-90 transition-transform"
                >
                  <Mail size={28} />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/liu-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[28px] h-[28px] flex items-center justify-center text-[#3B2B15] dark:text-[#FFFBF5]/80 hover:scale-95 active:scale-90 transition-transform"
                >
                  <Linkedin size={28} />
                </a>
                
                <a
                  href="https://www.instagram.com/artbymichellle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[28px] h-[28px] flex items-center justify-center text-[#3B2B15] dark:text-[#FFFBF5]/80 hover:scale-95 active:scale-90 transition-transform"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* My Work Section - Product Catalog */}
     <section id="projects" className="pt-[64px] pb-[64px] md:pt-[50px] md:pb-[50px] lg:pt-[60px] lg:pb-[60px] border-t-[0.5px] border-[#3B2B15] dark:border-[#FFFBF5]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[32px] mb-[16px] md:mb-[32px]"
          >
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              J.P. Morgan
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal flex-1 text-left md:text-right">
            A learning hub to help teams customize product experiences for clients.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hover:scale-[0.98] transition-transform cursor-pointer"
          >
             <Link 
              to="/product-catalog"
              onClick={() => window.scrollTo(0, 0)}
            > 
              <img
                src="/images/home/homepage_learning.png"
                alt="J.P. Morgan Learning Hub"
                className="w-full rounded-lg"
              /> 
            </Link> 
          </motion.div>
        </div>
      </section>

      {/* My Work Section - UX Strategy */}
      <section id="projects2" className="pt-[88px] pb-[88px] md:pt-[100px] md:pb-[100px] lg:pt-[128px] lg:pb-[128px] border-t-[0.5px] border-[#3B2B15] dark:border-[#FFFBF5]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[32px] mb-[16px] md:mb-[32px]"
          >
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              J.P. Morgan
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal flex-1 text-left md:text-right">
              UX Strategy: End-to-End Service Blueprints and Task Flows
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hover:scale-[0.98] transition-transform cursor-pointer"
          >
            <Link 
              to="/ux-strategy"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src="/images/home/homepage_blueprints.png"
                alt="UX Strategy Blueprints"
                className="w-full rounded-lg"
              />
            </Link>
          </motion.div>
        </div>
      </section>

       

      {/* Feature Cards Section */}
      <section className="relative pt-[56px] pb-[56px] md:pt-[96px] md:pb-[96px] lg:pt-[104px] lg:pb-[104px] border-t-[0.5px] border-b-[0.5px] border-[#3B2B15] dark:border-[#FFFBF5]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
            {/* Vertical dividers that extend from top border to bottom border */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[#3B2B15]/80 -translate-x-1/2"></div>
            {/*
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="cursor-pointer py-8 lg:py-0 lg:pt-8 lg:pb-6 flex flex-col gap-8 text-center lg:text-left lg:pr-[24px]"
            >
              <Link 
                to="/my-experiments" 
                className="flex flex-col gap-8 hover:scale-[0.98] transition-transform"
                onClick={() => window.scrollTo(0, 0)}
              >
                <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
                ⚛︎ My Experiments
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                Various UX explorations and learning exercises.
                </p>
              </Link>
            </motion.div>
            */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="cursor-pointer py-8 lg:py-0 lg:pt-8 lg:pb-6 flex flex-col gap-8 text-center lg:text-left border-t-[0.5px] lg:border-t-0 lg:px-[24px]"
            >
              <Link 
                to="/my-art" 
                className="flex flex-col gap-8 hover:scale-[0.98] transition-transform"
                onClick={() => window.scrollTo(0, 0)}
              >
                <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
                ᝰ My Art
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                Fueled by fineliner pens, Procreate, and good ol' paper.
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="cursor-pointer py-8 lg:py-0 lg:pt-8 lg:pb-6 flex flex-col gap-8 text-center lg:text-left border-t-[0.5px] lg:border-t-0 lg:pl-[24px]"
            >
              <Link 
                to="/my-story" 
                className="flex flex-col gap-8 hover:scale-[0.98] transition-transform"
                onClick={() => window.scrollTo(0, 0)}
              >
                <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
                ⚲ My Story
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                  Raised by the Peach State, based in the Big Apple.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
