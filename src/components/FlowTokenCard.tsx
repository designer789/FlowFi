'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Droplets, 
  Shield, 
  Users, 
  Gift, 
  Tag 
} from 'lucide-react';

// Reusable animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

interface UtilityItem {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}

const utilities: UtilityItem[] = [
  {
    title: "Liquidity Access",
    description: "Gain access to FlowFi's real-world liquidity pools by staking or supplying $FLOW tokens.",
    icon: <Droplets size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Collateral Asset",
    description: "Use $FLOW as collateral to borrow against tokenized income streams like invoices or payroll.",
    icon: <Shield size={24} />,
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Governance Rights",
    description: "Vote on protocol upgrades, parameter changes, and DAO proposals with $FLOW.",
    icon: <Users size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Protocol Rewards",
    description: "Earn $FLOW through staking, node participation, and ecosystem contribution.",
    icon: <Gift size={24} />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Fee Discounts",
    description: "Enjoy lower fees across FlowFi products by holding or staking $FLOW.",
    icon: <Tag size={24} />,
    color: "from-indigo-500 to-blue-500"
  }
];

export default function FlowTokenCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative z-0 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Introducing{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                $FLOW
              </span>
            </motion.h2>
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-white/90 font-body text-lg md:text-xl">
                Total Supply:{' '}
                <span className="font-bold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  1,000,000,000 $FLOW
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* Utility Section */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h3 
              className="font-heading font-bold text-2xl md:text-3xl text-white text-center mb-8 md:mb-12"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Utility
            </motion.h3>
            
            {/* Utility Cards with Hover Effect */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
            >
              {utilities.map((utility, index) => (
                <motion.div
                  key={index}
                  className="group relative h-auto lg:h-48 xl:h-52 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer shadow-lg hover:shadow-2xl"
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                 
                  
                  {/* Content Container - Slides up as a group */}
                  <div className="relative p-6 md:p-8 transform lg:group-hover:-translate-y-[2] transition-transform duration-500 ease-out">
                    {/* Icon */}
                    <div className={`w-12 h-12 lg:group-hover:h-0 bg-gradient-to-r ${utility.color} rounded-xl flex items-center justify-center mb-4 lg:group-hover:mb-0 opacity-100 lg:group-hover:opacity-0 transition-all duration-300 overflow-hidden shadow-lg`}>
                      <div className="text-white">
                        {utility.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {utility.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="font-body text-base md:text-lg text-white/90 leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 lg:delay-200">
                      {utility.description}
                    </p>
                  </div>
                  
                  
                 
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          
          {/* Enhanced Decorative Elements */}
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-purple-700/20 rounded-full blur-3xl pointer-events-none"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />

          
        </div>
      </div>
    </section>
  );
} 