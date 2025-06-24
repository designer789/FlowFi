'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is FlowFi?",
    answer: "FlowFi is a decentralized PayFi protocol that tokenizes real-world payment streams—like invoices, payroll, and remittances—to provide instant liquidity and credit access."
  },
  {
    question: "How does FlowFi work?",
    answer: "FlowFi operates through a modular PayFi Stack, including transaction, currency, custody, compliance, financing, and application layers—together powering a secure, compliant and efficient DeFi payment system."
  },
  {
    question: "What can I use FlowFi for?",
    answer: "You can finance your receivables, tokenize your payroll, borrow against future income, or provide liquidity to earn real-world yield."
  },
  {
    question: "How do I earn yield with FlowFi?",
    answer: "Provide liquidity to financing pools like Arf or Rain, and earn 10-30% APY from real-world repayments and protocol rewards."
  },
  {
    question: "Is FlowFi compliant and safe?",
    answer: "Yes. FlowFi embeds compliance tools (e.g., KYC, AML) via Chainalysis, PolyFlow, etc., and uses non-custodial smart contracts to ensure user asset safety."
  },
  {
    question: "What blockchain is FlowFi deployed on?",
    answer: "FlowFi is initially deployed on Solana, leveraging its high speed and low fees. Cross-chain support (e.g., Ethereum L2, Polygon) is planned for the future."
  },
  {
    question: "What is $FLOW used for?",
    answer: "$FLOW is used for governance voting, liquidity provisioning, borrowing, staking, and fee discounts within the protocol."
  },
  {
    question: "Is there a minimum amount to participate?",
    answer: "No. FlowFi is permissionless and open to anyone with a crypto wallet. You can participate with any amount."
  },
  {
    question: "How are the financing pools secured?",
    answer: "All pools are managed via audited smart contracts. Risk models and oracles evaluate creditworthiness, while liquidity is programmatically managed to prevent default cascades."
  },
  {
    question: "How can I get involved in FlowFi governance?",
    answer: "Hold or stake $FLOW to vote on proposals, influence pool parameters, or join DAO working groups to help shape the protocol&apos;s evolution."
  }
];

interface FAQItemProps {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3 
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1
        }
      } : { opacity: 0, y: 30 }}
    >
      <motion.button
        className="w-full p-6 text-left flex items-center justify-between group cursor-pointer"
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-heading font-semibold text-lg md:text-xl text-white pr-4">
          {faq.question}
        </h3>
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="border-t border-white/10 pt-4">
                <p className="font-body text-base text-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef(null);
  const [openItem, setOpenItem] = useState<number | null>(null);

  const isHeaderInView = useInView(headerRef, { 
    once: true, 
    margin: "-100px" 
  });

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <motion.section 
      ref={sectionRef} 
      className="relative z-0 py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
         
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItemComponent
              key={index}
              faq={faq}
              index={index}
              isOpen={openItem === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
} 