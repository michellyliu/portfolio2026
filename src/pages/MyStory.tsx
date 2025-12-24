import { motion } from 'motion/react'
import { useEffect } from 'react'

const MyStory = () => {
    useEffect(() => {
        // If Instagram is already available, just re-process embeds
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
          return;
        }
      
        // Otherwise load the script
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
      
        script.onload = () => {
          (window as any).instgrm?.Embeds.process();
        };
      
        document.body.appendChild(script);
  }, [])
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
            <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
              Raised by the Peach State, based in the Big Apple.
            </h1>
            <p className="text-[16px] md:text-[19px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-8">
              This is my story.
            </p>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.4
                }}
                className="text-[#3B2B15] dark:text-[#FFFBF5]/80"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRESENT Section */}
      <section className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px] lg:pt-[104px] lg:pb-[104px] border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8"
          >
            <div className="text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-[1.45] md:basis-0 md:grow">
              PRESENT
            </div>
            <div className="md:basis-0 md:grow">
              <div className="relative group overflow-hidden rounded-lg mb-6">
                <img
                  src="/images/mystory/mystory_me.png"
                  alt="Michelle"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#3B2B15]/90 dark:bg-[#3B2B15]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-[16px] md:text-[18px] font-sans font-medium text-[#FFFBF5] px-4 text-center">
                    Nice to meet you!
                  </p>
                </div>
              </div>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                Hi! I'm Michelle.
              </h2>
              <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                I'm a product designer currently working on the Client Onboarding & Services team at JPMorganChase in New York City. 
                <br />
                <br />
                 I have experience conducting user research, synthesizing and implementing findings, 
                crafting pixel-perfect UIs, and iterating until business goals are met. I’m especially good at breaking complex processes into simple flows 
                and charts, which helps teams design faster, smarter, and more collaboratively.
                <br />
                <br />
                 I take pride in creating solutions that are as functional as 
                they are delightful. Collaboration is central to this. Great products are created together!
                <br />
                <br />
                
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2020-2024 Section */}
      <section className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px] lg:pt-[104px] lg:pb-[104px]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8"
          >
            <div className="text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-[1.45] md:basis-0 md:grow">
              2020-2024
            </div>
            <div className="md:basis-0 md:grow">
              <div className="relative group overflow-hidden rounded-lg mb-6">
                <img
                  src="/images/mystory/mystory_grad.png"
                  alt="Graduation"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#3B2B15]/90 dark:bg-[#3B2B15]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-[16px] md:text-[18px] font-sans font-medium text-[#FFFBF5] px-4 text-center">
                    Graduation pics on the John W. Weeks Footbridge in Cambridge, MA.
                  </p>
                </div>
              </div>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                Where It Began.
              </h2>
              <div className="space-y-4">
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                  My design roots took shape at Harvard University, where I studied Computer Science and Studio Arts. 
                  UX design became the area where my technical skills and creative instincts could work together.
                  <br />
                  <br />
                  My visual curiosity has been shaped by the many art forms I've studied: animation, photography, ceramics, oil painting, even woodworking. 
                  Each discipline sharpened my understanding of composition, storytelling, and crafting meaningful experiences, and continues to shape how I approach design today.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2002-2020 Section */}
      <section className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px] lg:pt-[104px] lg:pb-[104px]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8"
          >
            <div className="text-[14px] md:text-[16px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-[1.45] md:basis-0 md:grow">
              2002-2020
            </div>
            <div className="md:basis-0 md:grow">
              <div className="relative group overflow-hidden rounded-lg mb-6">
                <img
                  src="/images/mystory/mystory_georgia.png"
                  alt="Georgia"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center
                bg-[#3B2B15]/90 dark:bg-[#3B2B15]/90
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                >                
                  <p className="text-[16px] md:text-[18px] font-sans font-medium text-[#FFFBF5] px-4 text-center">
                    As a child, this pier is where I often watched people go fishing.
                  </p>
                </div>
              </div>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                Let's Back It Wayyy Up.
              </h2>
              <div className="space-y-4">
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                  I grew up in southeast Georgia, spending my childhood in my family's Chinese-American takeout business. 
                  I was the 'restaurant kid'—the little girl behind the counter answering phones, bagging orders, and doing 
                  homework between dinner rushes. 
                  <br />
                  <br />
                  That experience shaped me more than I realized at the time. 
                  <br />
                  <br />
                  I learned to read people quickly, stay calm in chaos, solve problems on the fly, and understand the value of hard work. These lessons ground the way I work: with empathy, resilience, and a belief that every service experience (digital or physical) matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beyond the Pixels Section */}
      <section className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px] lg:pt-[104px] lg:pb-[104px] border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-6">
              Beyond the Pixels.
            </h2>
            <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-8">
              I have a goal of visiting at least 50 museums in New York City before 2026 (currently at 11 and there's over 150)!
             <br />
             <br />
             You might also find me:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col">
                <h3 className="text-[16px] md:text-[18px] font-sans font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                ✎ Contributing to Google Maps as a Level 6 Local Guide.
                </h3>
                <img
                  src="/images/mystory/mystory_guide.png"
                  alt="Google Maps Local Guide"
                  className="w-full h-[250px] md:h-[280px] lg:h-[320px] object-cover rounded-lg mb-4"
                />
                
              </div>
              <div className="flex flex-col">
              <h3 className="text-[16px] md:text-[18px] font-sans font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              𓂃✍︎ Posting various creative projects on my art Instagram account!
                </h3>
                <br />
                <div className="mb-4 flex justify-center">
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink="https://www.instagram.com/artbymichellle/" 
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: '0',
                      borderRadius: '12px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '100%',
                      minWidth: '326px',
                      padding: '0',
                      width: '100%'
                    }}
                  ></blockquote>
                </div>
                
              </div>
              <div className="flex flex-col">
              <h3 className="text-[16px] md:text-[18px] font-sans font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              ⛰︎ Climbing at my local bouldering gym (and constantly falling off).
                </h3>
                <img
                  src="/images/mystory/mystory_climb.png"
                  alt="Bouldering"
                  className="w-full h-[250px] md:h-[280px] lg:h-[320px] object-cover rounded-lg mb-4"
                />
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Note - appears at bottom */}
      <div className="pb-[96px] md:pb-[128px] lg:pb-[160px]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <div className="inline-block">
              <h2 className="text-[16px] md:text-[24px] lg:text-[32px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-2">
                Thank you
              </h2>
              <motion.svg
                width="100%"
                height="4"
                viewBox="0 0 200 4"
                className="block"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              >
                <motion.path
                  d="M0,2 Q20,0 40,2 T80,2 T120,2 T160,2 T200,2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#3B2B15]/80 dark:text-[#FFFBF5]/80"
                />
              </motion.svg>
            </div>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mt-4">
            for giving my story your attention. It means a lot!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MyStory

