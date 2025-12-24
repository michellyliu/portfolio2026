import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const ProductCatalog = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1a1611] transition-colors duration-300">
      {/* Hero Section with Dark Background */}
      <section className="bg-[#3B2B15] dark:bg-[#0f0d0a] relative overflow-hidden transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-[28px] md:px-[64px] lg:px-[120px] py-[56px] md:py-[64px] lg:py-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-[36px] md:gap-[32px] lg:gap-[36px]"
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[76px] font-serif font-medium text-[#FFFBF5] leading-normal lg:leading-[88px]">
              Product Catalog
            </h1>
            
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">ROLE</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">Product Designer</p>
              </div>
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">DURATION</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">June 2024-Present</p>
              </div>
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sans font-medium text-[#FFFBF5]/70 leading-normal mb-1">COMPANY</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#FFFBF5] leading-[1.5]">JPMorganChase</p>
              </div>
            </div>

            {/* Wide Flowchart Image */}
            <div className="mt-[16px] md:mt-[20px] lg:mt-[20px]">
              <img
                src="/images/uxstrat/uxstrat_blueprints_hero.png"
                alt="Service Blueprints"
                className="w-full rounded-lg shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]"
              />
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Main Content Area */}
      <main className="bg-[#FFFBF5]">
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
                  Imagine a global corporation approaches a bank to open several new accounts and implement five treasury products. How does the bank manage and execute this process?
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4 uppercase tracking-wider">
                THE BIG PICTURE
              </h2>
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal">
                I led the creation of end-to-end service blueprints and task flows detailing the multi-channel hand-offs across 10+ teams and 5+ systems for J.P. Morgan's corporate client request process.
              </h3>
            </div>
          </motion.section>
        </div>

        {/* THE TEAM */}
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
        </div>

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
                Stakeholders lack a comprehensive view of the complex workflows involved in resolving corporate client requests, leading to gaps in understanding and missed opportunities.
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
                <div>
                  <img
                    src="/images/uxstrat/uxstrat_valuestream.png"
                    alt="Value Stream"
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                    KEY ISSUES
                  </p>
                  <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-serif font-medium text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                    The Setup and Maintenance space spans across 9 functional areas and involves 15+ individual workflows.
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-4">
                    Key Issues include:
                  </p>
                  <ul className="space-y-3 ms-[27px]">
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Fragmented view of workflows
                    </li>
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Unclear ownership of processes
                    </li>
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Limited visibility into where automation or AI/ML could reduce manual effort
                    </li>
                    <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                      Lack of a unified view connecting SUAM tasks to the broader service representative journey
                    </li>
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
                To understand the current landscape, I synthesized information from years of training sessions, user interviews, and multiple past artifacts.
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
                  🎯 THE GOALS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Identify areas of opportunity
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Hear pain points and mental models firsthand
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Centralize fragmented artifacts
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Identify the teams in play and the tools, data, and systems used
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  💡 THE INSIGHTS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Heavy manual routing of requests and information
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Client interactions and tasks are treated as "one-off, reactionary requests"
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Multiple, fragmented tools are needed to complete actions
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
                I created three end-to-end service blueprints capturing the full Setup and Maintenance experience, along with detailed task flows that map the multi-channel hand-offs between more than 10 teams and 5 systems.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px] mb-[48px] md:mb-[64px] lg:mb-[80px]">
              <div>
                <img
                  src="/images/uxstrat/uxstrat_blueprintsfull.png"
                  alt="Blueprint Full"
                  className="w-full rounded-lg "
                />
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  BLUEPRINT KEY AREAS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Objectives and goals at each stage
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Personas involved
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Enabling tool/technology used
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Data attributes generated, transferred, or required
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Notes and considerations for more insight
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Gaps, pain points, and friction
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Areas of opportunities for future state
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px] lg:gap-[64px]">
              <div className="space-y-[15px]">
               
                <img
                  src="/images/uxstrat/uxstrat_taskflow1.png"
                  alt="Task Flow 1"
                  className="w-full rounded-lg bg-white"
                />
                <img
                  src="/images/uxstrat/uxstrat_taskflow2.png"
                  alt="Task Flow 2"
                  className="w-full rounded-lg bg-white"
                />
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-semibold text-[#3B2B15] dark:text-[#FFFBF5] leading-normal mb-4">
                  TASK-FLOW KEY AREAS
                </h4>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Step-by-step actions each persona takes
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Images of screens encountered
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Decisions and options
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Role-specific needs and expectations
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
              These blueprints are now a shared reference for design, product, and development teams. They anchor discussions on how to streamline processes and reduce onboarding & implementation cycle times.
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
                  These artifacts anchor the vision for a future-state experience that:
                </h3>
                <ul className="space-y-3 ms-[27px]">
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Streamlines SUAM processes end-to-end
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Connects servicing, setup, and the broader client journey
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Reduces manual effort with strategic automation
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Improves usability through thoughtful workflow redesign
                  </li>
                  <li className="text-[16px] md:text-[18px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal list-disc">
                    Delivers a cohesive and measurable servicing experience
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/uxstrat/uxstrat_final.png"
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
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block border-[0.5px] border-[#3B2B15]/80 dark:border-[#FFFBF5]/80 rounded-lg px-8 py-6 hover:scale-95 active:scale-90 transition-transform"
              >
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-normal text-[#3B2B15] dark:text-[#FFFBF5]/80 leading-normal mb-2">
                  Want to see another problem I worked through?
                </p>
                <span className="text-[32px] md:text-[40px] lg:text-[48px] block">
                  🔍
                </span>
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

export default ProductCatalog
