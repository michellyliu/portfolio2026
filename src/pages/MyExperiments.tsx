import { motion } from 'motion/react'

const MyExperiments = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1a1611] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-[56px] pb-[56px] md:pt-[64px] md:pb-[64px] lg:pt-[88px] lg:pb-[88px]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4 transition-colors duration-300">
              My Experiments
            </h1>
            <p className="text-[16px] md:text-[19px] lg:text-[20px] font-sans font-normal text-[#3B2B15]/80 dark:text-[#FFFBF5]/80 leading-normal transition-colors duration-300">
            Various UX explorations and learning exercises
            </p>
            <br />
            <p className="text-[16px] md:text-[19px] lg:text-[20px] font-sans font-normal text-[#3B2B15]/80 dark:text-[#FFFBF5]/80 leading-normal transition-colors duration-300">
            🚧 Currently WIP...stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MyExperiments

