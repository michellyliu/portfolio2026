import { motion } from 'motion/react'
import { Instagram } from 'lucide-react'
import { useEffect } from 'react'

const MyArt = () => {
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
            className="flex flex-col gap-[40px]"
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              Creative works and sketchbook pages.
            </h1>
            <div className="flex flex-col gap-[40px]">
              <p className="text-[16px] md:text-[19px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal md:leading-[1.45] lg:leading-normal">
                Fueled by SAKURA Pigma Micron Fineliner Pens, Procreate, and good ol' paper.
              </p>
              <a
                href="https://www.instagram.com/artbymichellle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-2 border border-[#3B2B15] rounded-lg hover:scale-95 active:scale-90 transition-transform w-fit"
              >
                <Instagram size={20} className="text-[#3B2B15] dark:text-[#FFFBF5]/70" />
                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-[1.45] tracking-[-0.08px] md:tracking-[-0.09px] lg:tracking-[-0.1px]">
                  @artbymichellle
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-[56px] pb-[56px] md:pt-[96px] md:pb-[96px] lg:pt-[104px] lg:pb-[104px] border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[32px]"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-[32px]">
              <img
                src="/images/myart/image 60.png"
                alt="Restaurant recap"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '1220/1522' }}
              />
              <img
                src="/images/myart/Image.png"
                alt="Coca-cola logo redesign"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '1220/1522' }}
              />
              <img
                src="/images/myart/image 61.png"
                alt="Stairs sketch"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '3187/3500' }}
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[32px]">
              <img
                src="/images/myart/IMG_1531.JPG" 
                alt="Building sketch"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '2412/3500' }}
              />
              <img
                src="/images/myart/IMG_1527.JPG"
                alt="Brookly Museum sketch"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '3378/3500' }}
              />
              <img
                src="/images/myart/IMG_1528.JPG"
                alt="Bridge sketch"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '1210/1514' }}
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[32px] md:h-[696px] md:justify-between">
              <img
                src="/images/myart/IMG_1529.JPG"
                alt="Courtyard sketch"
                className="w-full h-[300px] rounded-2xl object-cover object-[50%_50%]"
              />
              <img
                src="/images/myart/IMG_1530.JPG"
                alt="Landscape sketch"
                className="w-full h-[364px] rounded-lg object-contain"
              />
              <img
                src="/images/myart/IMG_1526.JPG"
                alt="Cafe sketch"
                className="w-full rounded-2xl object-cover object-[50%_50%]"
                style={{ aspectRatio: '1220/1722' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Embed Section */}
      <section className="pt-[56px] pb-[56px] md:pt-[96px] md:pb-[96px] lg:pt-[104px] lg:pb-[104px] border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center"
          >
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/artbymichellle/" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            ></blockquote>
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
              for giving my art your attention. It means a lot!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MyArt
