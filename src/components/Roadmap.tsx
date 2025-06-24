'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Reusable animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};



const scaleInVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const slideFromSideVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Protocol Foundation",
    items: [
      "Launch FlowFi on Solana mainnet with core smart contracts",
      "Fair launch of $FLOW token on Solana",
      "Deploy receivables liquidity pool",
      "Onboard first partners: USDC, Solana Pay, custodians"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Product Expansion",
    items: [
      "Add new financing pools (payroll, remittance, SME flows)",
      "Launch the FlowFi Dashboard for LPs and borrowers",
      "Enable programmable payments (split/milestone-based)",
      "Integrate embedded compliance tools (e.g. Chainalysis)",
      "Form partnerships with Solana-native payroll and DePIN projects"
    ]
  },
  {
    phase: "Phase 3",
    title: "Ecosystem & Compliance", 
    items: [
      "Release FlowFi SDK and developer sandbox",
      "Attract institutional LPs and DAO-backed liquidity",
      "Pilot on-chain income scoring and underwriting engine",
      "Plan cross-chain compatibility (Solana-EVM bridge)",
      "Initiate NGO/Fintech partnerships for compliant DeFi pilots"
    ]
  },
  {
    phase: "Phase 4",
    title: "Governance & Global Expansion",
    items: [
      "Launch FlowFi DAO for decentralized governance",
      "Enable staking & reward delegation with $FLOW",
      "Expand to Ethereum L2 and other chains",
      "Launch mobile-first version with fiat on/off-ramp support"
    ]
  }
];






interface RoadmapCardProps {
  phase: RoadmapPhase;
  index: number;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ phase, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3 
  });

 

  return (
    <div 
      ref={ref}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      }`}
    >
            <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
        variants={scaleInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          ease: [0.68, -0.55, 0.265, 1.55],
          delay: index * 0.2 + 0.3
        }}
      >
        <div className="w-12 h-12 rounded-full border-4 border-gray-900 bg-gray-900 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>
      </motion.div>
       
      {/* Enhanced Content Card */}
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                 <motion.div 
           className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden"
           variants={slideFromSideVariants}
           initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
           animate={isInView ? "visible" : (index % 2 === 0 ? "hiddenLeft" : "hiddenRight")}
           transition={{
             duration: 0.8,
             ease: [0.25, 0.1, 0.25, 1],
             delay: index * 0.2
           }}
         >
          
          
          <div className="relative p-6 md:p-8">
            {/* Enhanced Phase Header */}
            <motion.div 
              className="mb-6"
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
                              <div className="flex items-center justify-between mb-4">
                  <div 
                    className={`inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold rounded-full`}
                  >
                    {phase.phase}
                  </div>
                </div>
              
              <motion.h3 
                className="font-heading font-bold text-xl md:text-2xl text-white mb-2"
                variants={fadeInLeftVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                {phase.title}
              </motion.h3>
              
             
            </motion.div>
            
                         <motion.ul 
               className="space-y-4"
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
             >
               {phase.items.map((item, itemIndex) => (
                 <motion.li 
                   key={itemIndex} 
                   className="flex items-start"
                   variants={fadeInVariants}
                   transition={{
                     duration: 0.6,
                     delay: index * 0.2 + 0.6 + itemIndex * 0.1
                   }}
                 >
                   <div 
                     className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-1.5 mr-4 flex-shrink-0"
                   />
                   <span className="font-body text-sm md:text-base text-white/90 leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
                     </div>
        </motion.div>
      </div>
    </div>
  );
};

interface MobileRoadmapCardProps {
  phase: RoadmapPhase;
  index: number;
}

const MobileRoadmapCard: React.FC<MobileRoadmapCardProps> = ({ phase, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.2 
  });

 

  return (
    <motion.div 
      ref={ref}
      className="relative pl-8"
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1
      }}
    >
      <motion.div 
        className="absolute left-0 top-8 flex items-center justify-center"
        variants={scaleInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          ease: [0.68, -0.55, 0.265, 1.55],
          delay: index * 0.1 + 0.2
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-900 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>
      </motion.div>
       
      <motion.div 
         className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
       >
        <motion.div 
          className="mb-6"
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        >
                     <div className="flex items-center justify-between mb-3">
             <span className={`inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold rounded-full`}>
               {phase.phase}
             </span>
           </div>
          <h3 className="font-heading font-bold text-xl text-white mb-1">
            {phase.title}
          </h3>
         
        </motion.div>
        
        <motion.ul 
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {phase.items.map((item, itemIndex) => (
            <motion.li 
              key={itemIndex} 
              className="flex items-start"
              variants={fadeInLeftVariants}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1 + 0.3 + itemIndex * 0.1
              }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="font-body text-sm text-white/90 leading-relaxed">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const isTimelineInView = useInView(timelineRef, { 
    once: true, 
    margin: "-200px" 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);


  return (
         <motion.section 
       ref={sectionRef} 
       className="relative z-0 py-16 md:py-24 overflow-hidden bg-gray-900"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.6 }}
     >
       {/* Background Image */}
       <div 
         className="absolute inset-0"
         style={{
           backgroundImage: 'url(/background_img.png)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           opacity: 0.5,
           mixBlendMode: 'lighten'
         }}
       />
       {/* Overlay */}
       
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 text-center mb-24"
          >
            Roadmap
          </h2>

        <div className="hidden lg:block relative" ref={timelineRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 origin-top"></div>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-600 origin-top"
            style={{ height: timelineHeight }}
            initial={{ scaleY: 0 }}
            animate={isTimelineInView ? { 
              scaleY: 1,
              transition: {
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5
              }
            } : { scaleY: 0 }}
          />
          
          <div >
            {roadmapData.map((phase, index) => (
              <RoadmapCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
        <div className="lg:hidden relative">
          <div className="absolute left-2 top-0 w-0.5 h-full bg-white/10"></div>
          <motion.div 
            className="absolute left-2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-600 origin-top"
            style={{ height: timelineHeight }}
            initial={{ scaleY: 0 }}
            animate={isTimelineInView ? { 
              scaleY: 1,
              transition: {
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5
              }
            } : { scaleY: 0 }}
          />
          
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <MobileRoadmapCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
             </div>
     </motion.section>
   );
} 