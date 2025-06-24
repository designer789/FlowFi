'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="absolute top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/favicon.png"
                  alt="FlowFi Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                  priority
                />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                FlowFi
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('tokenomics')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tokenomics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Roadmap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-body relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-body font-medium transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Launch App
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                Features
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('tokenomics')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                Tokenomics
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('roadmap')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                Roadmap
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-body hover:bg-gray-700 rounded"
                whileTap={{ scale: 0.95 }}
              >
                FAQ
              </motion.button>
              <div className="pt-2">
                <motion.button 
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-body font-medium transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  Launch App
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
} 