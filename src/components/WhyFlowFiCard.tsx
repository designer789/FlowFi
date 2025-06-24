'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  DollarSign, 
  Unlock, 
  Users, 
  Shield
} from 'lucide-react';

// Reusable animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInVariants = {
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



const iconHoverVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5
  }
};

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}

const features: FeatureItem[] = [
  {
    title: "Real-World Utility, Not Just Hype",
    description: "FlowFi solves real problems: delayed payments, limited access to credit, and cross-border financial friction. We bring DeFi where it&apos;s needed most.",
    color: "from-blue-500 to-cyan-500",
    icon: <Globe size={24} />
  },
  {
    title: "Earn While Making an Impact",
    description: "Provide liquidity to actual businesses and workers—not just farms or memecoins—and earn high yields backed by real-world revenue.",
    color: "from-emerald-500 to-green-500",
    icon: <DollarSign size={24} />
  },
  {
    title: "Fair, Permissionless Access",
    description: "No banks. No borders. FlowFi is open to anyone, anywhere. All you need is a wallet and some $FLOW.",
    color: "from-purple-500 to-pink-500",
    icon: <Unlock size={24} />
  },
  {
    title: "Built for the Underserved Majority",
    description: "FlowFi empowers SMEs, gig workers, and emerging market users who are locked out of traditional finance.",
    color: "from-orange-500 to-red-500",
    icon: <Users size={24} />
  },
  {
    title: "DeFi You Can Trust",
    description: "With embedded compliance, professional partners, and real-world integrations, FlowFi offers a credible alternative to broken legacy systems.",
    color: "from-indigo-500 to-blue-500",
    icon: <Shield size={24} />
  }
];

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: "-50px"
  });

  return (
    <motion.div
      ref={ref}
      className="group relative h-full"
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
     
      
      {/* Enhanced Main Card */}
      <motion.div 
        className="relative h-full bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl shadow-black/25"
        whileHover={{ 
          borderColor: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Enhanced Background Pattern with Icon */}
        <motion.div 
          className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          variants={iconHoverVariants}
          initial="rest"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center relative">
            {/* Icon Background Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
            
            <motion.div
              className="text-white relative z-10"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              {feature.icon}
            </motion.div>
            
            {/* Enhanced Icon Glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full opacity-0 group-hover:opacity-50 blur-lg"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.3, opacity: 0.4 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Animated Pulse Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 opacity-0 border-gray-400"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
        
       
        {/* Enhanced Content */}
        <div className="relative z-10">
          <h3 className="w-4/5 font-heading font-bold text-xl md:text-2xl text-white mb-6 leading-tight tracking-tight">
            {feature.title}
          </h3>
          
          <p className="font-body text-base md:text-lg text-white/80 leading-relaxed tracking-wide">
            {feature.description}
          </p>
        </div>

        {/* Interactive Corner Accent */}
        <motion.div 
          className={`absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-30`}
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ 
            scale: 1, 
            rotate: 180,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        />

     

        {/* Subtle Inner Shadow & Border Highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-3xl pointer-events-none"></div>
        
        {/* Inner Border Highlight */}
        <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

export default function WhyFlowFiCard() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { 
    once: true, 
    margin: "-100px" 
  });

  return (
    <motion.section 
      ref={sectionRef}
      className="relative z-0 py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            variants={fadeInVariants}
            transition={{ duration: 0.8 }}
          >
            Why Choose FlowFi?
          </motion.h2>
         
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>

       
      </div>
    </motion.section>
  );
} 