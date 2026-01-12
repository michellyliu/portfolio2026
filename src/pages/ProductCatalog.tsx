import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const ProductCatalog = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1a1611] transition-colors duration-300">
      {/* Hero Section with Dark Background */}
      <section className="bg-[#3B2B15] dark:bg-[#1a1611] relative overflow-hidden transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px] py-[56px] md:py-[64px] lg:py-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-[36px] md:gap-[32px] lg:gap-[36px]"
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-medium text-[#FFFBF5] leading-normal lg:leading-[88px]">
            Eligibility Rules Learning Hub

            </h1>
            
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">ROLE</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">Product Designer</p>
              </div>
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">DURATION</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">December 2025-Present</p>
              </div>
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">COMPANY</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">JPMorganChase</p>
              </div>
            </div>

            {/* Wide Flowchart Image */}
            <div className="mt-[16px] md:mt-[20px] lg:mt-[20px]">
              <img
                src="/images/home/homepage_learning.png"
                alt="Learning Hub"
                className="w-full rounded-lg shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]"
              />
            </div>
            <p className="text-[10px] md:text-[12px] lg:text-[14px] font-sans font-regular italic text-[#FFFBF5]/70 leading-normal mb-1">*Some images are intentionally blurred to protect sensitive information.</p>
          </motion.div>
        </div>
        
      </section>

      {/* Main Content Area */}
      <main className="bg-[#FFFBF5] dark:bg-[#1a1611]">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px] py-[48px] md:py-[64px] lg:py-[104px]">
          
          {/* Product detail / Context Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px]"
          >
            <div className="mb-[48px] md:mb-[64px] lg:mb-[80px] border-[0.5px] border-[#3B2B15] rounded-lg p-[24px] md:p-[32px] lg:p-[48px]">
              <div className="flex items-center gap-[16px] md:gap-[24px] lg:gap-[32px]">
                <div className="flex-shrink-0">
                  <span className="text-[32px] md:text-[40px] lg:text-[48px]">💡</span>
                </div>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-normal flex-1">
                Eligibility rules power personalized onboarding by determining which products clients can access. When those rules are complex, dense, and fragmented, how do internal teams effectively learn and apply them?
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE BIG PICTURE
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              I led the design of a centralized learning hub that enables internal teams to understand and apply complex eligibility rules, ensuring they can accurately and confidently deliver personalized product experiences to clients.
              </h3>

              <div className="mt-[16px] md:mt-[20px] lg:mt-[20px]">
              <img
                src="/images/learninghub/learninghub_questions.png"
                alt="Learning Hub"
                className="w-full rounded-lg "
              />
            </div>

            </div>
          </motion.section>
        </div>

        {/* THE TEAM 
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div className="lg:col-span-2">
                <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                  THE TEAM
                </h2>
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-6">
                  I work in Client Onboarding at J.P. Morgan.
                </h3>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal">
                  Within Onboarding, I am a part of a small design team that enhances the Setup and Maintenance (SUAM) processes for client accounts, entities, and products.
                </p>
              </div>
              <div className="lg:col-span-1">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src="/images/uxstrat/uxstrat_team.png"
                    alt="Team"
                    className="w-full rounded-lg transform scale-105 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#3B2B15]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-[16px] md:text-[18px] font-sans font-medium text-[#FFFBF5] px-4 text-center">
                      Can you guess which one I drew?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>*/}

        {/* THE PROBLEM */}
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div>
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE PROBLEM
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-[48px] md:mb-[64px] lg:mb-[80px]">
              Internal teams struggle to understand and apply J.P. Morgan’s complex product eligibility rules, making it difficult to deliver personalized product experiences for clients.
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
                <div>
                  <img
                    src="/images/learninghub/spreadsheet.png"
                    alt="Value Stream"
                    className="w-full rounded-lg"
              
                  />
                  <p className="text-[10px] md:text-[12px] font-sans font-normal italic text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                    * Data shown is illustrative due to confidentiality.
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                    THE IMPORTANCE
                  </p>
                  <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                    Historically, J.P.Morgan Payments product data has been manually maintained via spreadsheets. 
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                    Key Issues include:
                  </p>
                  <ul className="space-y-3 ms-[27px]">
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Product/service codes sometimes duplicated across systems
                    </li>
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Building product packages without a common structure
                    </li>
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Labor intensive, fragmented and inconsistent data maintenance
                    </li>
                    {/* <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      x
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* THE RESEARCH */}
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div className="mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE RESEARCH
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              I conducted deep discovery across multiple internal teams involved in the product experience. My goal was to uncover where knowledge breakdowns occurred, how eligibility rules were being interpreted, and why existing resources were failing to scale.
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-[8px] md:gap-[10px] lg:gap-[10px] mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <img
                src="/images/uxstrat/uxstrat_research1.png"
                alt="Research Image 1"
                className="w-full rounded-lg"
              />
              <img
                src="/images/uxstrat/uxstrat_research2.png"
                alt="Research Image 2"
                className="w-full rounded-lg"
              />
              <img
                src="/images/uxstrat/uxstrat_research3.png"
                alt="Research Image 3"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  🎯 THE METHODS
                </h4>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                I synthesized insights from:
                  </p>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Stakeholder interviews with product managers, designers, and business partners
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Contextual walkthroughs of existing eligibility documentation and tooling
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Artifact analysis of legacy spreadsheet and training materials
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  💡 THE INSIGHTS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Eligibility rules were often understood through knowledge and verbal handoffs rather than documented, discoverable sources
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Documentation and information were scattered across spreadsheets, slide decks, and internal pages 

                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Teams spent significant time deciphering rules before they could apply them, slowing onboarding and increasing the risk of errors.
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div className="mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE COMPARATIVE ANALYSIS
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              To inform the designs, I conducted a focused analysis of existing learning and knowledge systems to identify design patterns that support comprehension, discoverability, and long-term retention.
              </h3>
            </div>

            <div>
                <img
                  src="/images/learninghub/competitve.png"
                  alt="Comparative Analysis"
                  className="w-full rounded-lg "
                />
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  🎯 THE METHODS
                </h4>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                Some examples I looked at include:
                  </p>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Duolingo
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  LinkedIn Learning
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Airtable
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  💡 THE INSIGHTS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                 Progressive modules break concepts into digestible units with real examples.
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Full-text search and contextual filters allow users to find what they need, not just what exists.

                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Infographics, flow diagrams, and visual aids are used instead of long text walls.

                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* THE OUTCOME */}
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div className="mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE OUTCOME
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
              A centralized learning hub that turns complex eligibility rules into actionable knowledge—empowering teams to deliver accurate, personalized onboarding experiences at scale.
      
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px] mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <div>
                <img
                  src="/images/learninghub/flow1.png"
                  alt="Blueprint Full"
                  className="w-full rounded-lg "
                />
                <br></br>
                 <img
                  src="/images/learninghub/flow2.png"
                  alt="Blueprint Full"
                  className="w-full rounded-lg "
                />
                <br></br>
                 <img
                  src="/images/learninghub/flow3.png"
                  alt="Blueprint Full"
                  className="w-full rounded-lg "
                />
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                 THE FLOW
                </h4>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                The hub supports multiple roles and learning styles by offering two entry paths:
                  </p>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Guided personalization through quick questions to tailor content based on team, role, and use case

                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Direct access for experienced users who want to jump straight into documentation
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div className="space-y-[15px]">
               
              <img
                  src="/images/learninghub/flow4.png"
                  alt="Learning hub context and overview"
                  className="w-full rounded-lg bg-white"
                />
                <img
                  src="/images/home/homepage_learning.png"
                  alt="Learning hub business benefits"
                  className="w-full rounded-lg bg-white"
                />
                <img
                  src="/images/learninghub/flow5.png"
                  alt="Learning hub context and overview"
                  className="w-full rounded-lg bg-white"
                />
                
                
              </div>
              <div>
                {/* <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  TASK-FLOW KEY AREAS
                </h4> */}
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                To reduce cognitive load and support efficient learning, the experience incorporates:
                  </p>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Progressive disclosure to surface only relevant information at the right time
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  A robust search bar for fast retrieval of specific rules and concepts
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  An intuitive left-hand navigation for easy exploration and orientation
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Progress indicators to help users track learning and build confidence over time
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* THE IMPACT */}
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
              THE IMPACT
            </h2>
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
            Internal teams can now onboard 30–50% faster when learning eligibility rules, reducing dependency on verbal knowledge, heavy documentation, and ad-hoc guidance.
            </h3>
          </motion.section>
        </div>

        {/* THE FUTURE */}
        <div className="border-t-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80"></div>
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-[48px] md:mb-[64px] lg:mb-[80px] pt-[48px] md:pt-[64px] lg:pt-[104px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div>
                <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                  THE FUTURE
                </h2>
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-6">
                This learning hub lays the foundation for a scalable eligibility ecosystem. 
                </h3>
                <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                Future enhancements could include:
                  </p>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Deeper personalization, using saved roles and behaviors to continuously refine content recommendations
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Interactive scenarios and simulations, allowing teams to practice applying eligibility rules to real client use cases
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                  Analytics and feedback loops to identify knowledge gaps and evolve content based on real usage
                  </li>
                  
                </ul>
              </div>
              <div>
                <img
                  src="/images/home/homepage_learning.png"
                  alt="Future Vision"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.section>

          {/* End-of-case-study CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-[48px] md:pt-[64px] lg:pt-[104px] pb-[96px] md:pb-[128px] lg:pb-[160px]"
          >
            {/* Thank You Note */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
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
                  for giving my work your attention. It means a lot!
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/ux-strategy"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block border-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80 rounded-lg px-8 py-6 hover:scale-95 active:scale-90 transition-transform"
              >
                <span className="text-[32px] md:text-[40px] lg:text-[48px] block">
                  🔍
                </span>
                
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-2">
                See how I think beyond screens: E2E service blueprints & persona task-flows.
                </p>
                <img
                  src="/images/home/homepage_blueprints.png"
                  alt="Learning hub business benefits"
                  className="w-full rounded-lg bg-white"
                />
                
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

export default ProductCatalog
