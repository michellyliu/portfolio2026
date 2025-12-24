import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="py-[24px] md:py-[32px] lg:py-[40px] border-t-[0.5px] border-[#3B2B15]/50 dark:border-[#FFFBF5]/80 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-[32px] md:px-[64px] lg:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <p className="text-[24px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal transition-colors duration-300">
              Let's chat!
            </p>
            <motion.div
              animate={{
                y: [0, -2, 0],
                scale: [2, 2, 2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            > 
              ☕︎
            </motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href="https://drive.google.com/file/d/1ifTaHrecrkOwmlRerB1XPdLEgySBJOED/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15]/80 dark:text-[#FFFBF5]/80 leading-[1.2] tracking-[-0.32px] md:tracking-[-0.36px] hover:scale-95 active:scale-90 transition-transform"
            >
              <span className="text-[#3B2B15] dark:text-[#FFFBF5] transition-colors duration-300">•</span>
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/liu-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15]/80 dark:text-[#FFFBF5]/80 leading-[1.2] tracking-[-0.32px] md:tracking-[-0.36px] hover:scale-95 active:scale-90 transition-transform"
            >
              <span className="text-[#3B2B15] dark:text-[#FFFBF5] transition-colors duration-300">•</span>
              LinkedIn
            </a>
            <a
              href="mailto:liumichelle3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15]/80 dark:text-[#FFFBF5]/80 leading-[1.2] tracking-[-0.32px] md:tracking-[-0.36px] hover:scale-95 active:scale-90 transition-transform"
            >
              <span className="text-[#3B2B15] dark:text-[#FFFBF5] transition-colors duration-300">•</span>
              liumichelle3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

