'use client';

import { useState, useEffect, useRef } from 'react';

// Types
interface LayerData {
  id: string;
  title: string;
  subtitle: string;
  description: {
    content: string[];
    theme: string;
  };
  feature: {
    title: string;
    content: string | string[];
    icon: string;
    theme: string;
  };
  numberIcon: string;
}

// Layer Configuration
const layersData: LayerData[] = [
  {
    id: '001',
    title: 'Transaction Layer',
    subtitle: 'Ultra-fast, Low-cost Settlement for Payments',
    description: {
      content: [
        'Powered by high-performance chains like <span class="text-blue-700 font-medium">Solana</span> and <span class="text-indigo-700 font-medium">Stellar</span>, this layer enables sub-second payment finality and gas fees as low as <span class="text-emerald-700 font-semibold">$0.00025</span>.',
        'Ensures fast and efficient processing of thousands of microtransactions.'
      ],
      theme: 'blue'
    },
    feature: {
      title: 'Use Cases',
      content: ['Solana Pay', 'Stellar Disbursement Platform'],
      icon: 'credit-card',
      theme: 'indigo'
    },
    numberIcon: 'lightning'
  },
  {
    id: '002',
    title: 'Currency Layer',
    subtitle: 'Stable, Programmable Payment Instruments',
    description: {
      content: [
        'Supports leading stablecoins <span class="text-emerald-700 font-medium">(USDC, PYUSD)</span> for price-stable transactions.',
        'Introduces programmable payment flows like scheduled disbursement, milestone-based payouts, and embedded logic in transfers.'
      ],
      theme: 'emerald'
    },
    feature: {
      title: 'Innovation',
      content: 'On-chain conditional payment logic',
      icon: 'lightning',
      theme: 'amber'
    },
    numberIcon: 'currency-dollar'
  },
  {
    id: '003',
    title: 'Custody Layer',
    subtitle: 'Secure, Collaborative Asset Control',
    description: {
      content: [
        'Combines <span class="text-purple-700 font-medium">MPC custody (e.g., Fireblocks)</span> with smart contract vaults.',
        'Enables shared custody, allowing multiple parties to control funds collaboratively without sacrificing settlement speed.'
      ],
      theme: 'purple'
    },
    feature: {
      title: 'Highlight',
      content: 'Instant but jointly controlled fund access',
      icon: 'lock',
      theme: 'cyan'
    },
    numberIcon: 'lock-closed'
  },
  {
    id: '004',
    title: 'Compliance Layer',
    subtitle: 'Embedded Regulation Readiness',
    description: {
      content: [
        'Integrates <span class="text-red-700 font-medium">KYC/AML modules</span> from Chainalysis, PolyFlow, and others.',
        'Ensures that users and counterparties are verifiable, while meeting global compliance standards.'
      ],
      theme: 'red'
    },
    feature: {
      title: 'Use Cases',
      content: ['Cross-border B2B', 'Remittance services'],
      icon: 'shield-check',
      theme: 'rose'
    },
    numberIcon: 'shield-check'
  },
  {
    id: '005',
    title: 'Financing Layer',
    subtitle: 'Tokenized Revenue Streams for Instant Capital',
    description: {
      content: [
        'Allows businesses and individuals to <span class="text-green-700 font-medium">tokenize future receivables</span> (invoices, payrolls, remittances).',
        'Connects borrowers with DeFi liquidity pools for real-time access to credit.',
        'Features automated underwriting models using income stream metadata.'
      ],
      theme: 'green'
    },
    feature: {
      title: 'Example Pools',
      content: ['Arf Credit Pool', 'Rain Receivables Pool'],
      icon: 'banknotes',
      theme: 'teal'
    },
    numberIcon: 'banknotes'
  },
  {
    id: '006',
    title: 'Application Layer',
    subtitle: 'Ready-to-Deploy Financial Solutions',
    description: {
      content: [
        'Provides <span class="text-violet-700 font-medium">interfaces and SDKs</span> for DePIN funding, SME financing, and crypto payroll solutions.',
        'Enables builders to launch vertical DeFi apps quickly with pre-integrated PayFi components.'
      ],
      theme: 'violet'
    },
    feature: {
      title: 'Partners',
      content: ['Arf (Cross-border)', 'Rain (Payroll)', 'BSOS (ESG Financing)'],
      icon: 'users',
      theme: 'fuchsia'
    },
    numberIcon: 'credit-card'
  }
];

// Icon Components
const IconComponents = {
  'lightning': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  'currency-dollar': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  ),
  'lock-closed': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  ),
  'shield-check': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  'banknotes': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  'credit-card': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  ),
  'lock': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  ),
  'users': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  )
};

// Theme Configuration
const themeConfig = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:border-blue-300' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', hover: 'hover:border-emerald-300' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', hover: 'hover:border-purple-300' },
  red: { bg: 'bg-red-50', border: 'border-red-200', hover: 'hover:border-red-300' },
  green: { bg: 'bg-green-50', border: 'border-green-200', hover: 'hover:border-green-300' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', hover: 'hover:border-violet-300' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', hover: 'hover:border-indigo-300' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', hover: 'hover:border-amber-300' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', hover: 'hover:border-cyan-300' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', hover: 'hover:border-rose-300' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', hover: 'hover:border-teal-300' },
  fuchsia: { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', hover: 'hover:border-fuchsia-300' }
};

const iconGradients = {
  blue: 'from-blue-500 to-indigo-500',
  emerald: 'from-emerald-500 to-green-500',
  purple: 'from-purple-500 to-purple-600',
  red: 'from-red-500 to-rose-500',
  green: 'from-green-500 to-teal-500',
  violet: 'from-violet-500 to-purple-500',
  indigo: 'from-indigo-500 to-purple-500',
  amber: 'from-amber-500 to-orange-500',
  cyan: 'from-cyan-500 to-blue-500',
  rose: 'from-rose-500 to-red-500',
  teal: 'from-teal-500 to-green-500',
  fuchsia: 'from-fuchsia-500 to-violet-500'
};

const bulletColors = {
  blue: 'bg-blue-600',
  emerald: 'bg-emerald-600',
  purple: 'bg-purple-600',
  red: 'bg-red-600',
  green: 'bg-green-600',
  violet: 'bg-violet-600',
  indigo: 'bg-indigo-600',
  amber: 'bg-amber-600',
  cyan: 'bg-cyan-600',
  rose: 'bg-rose-600',
  teal: 'bg-teal-600',
  fuchsia: 'bg-fuchsia-600'
};

// Component Props
interface TitleCardProps {
  title: string;
  subtitle: string;
}

interface DescriptionCardProps {
  content: string[];
  theme: string;
}

interface FeatureCardProps {
  title: string;
  content: string | string[];
  icon: string;
  theme: string;
}

interface NumberCardProps {
  number: string;
  icon: string;
}

// Reusable Components
const TitleCard: React.FC<TitleCardProps> = ({ title, subtitle }) => (
  <div className="lg:col-span-2 relative group">
    <div className="h-auto min-h-[160px] lg:h-[280px] bg-slate-50 border border-slate-200 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 flex items-center transition-all duration-300 hover:border-slate-300">
      <div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-4xl text-slate-900 mb-2 lg:mb-4">
          {title}
        </h3>
        <p className="font-heading font-semibold text-base sm:text-lg lg:text-xl text-slate-600">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

const DescriptionCard: React.FC<DescriptionCardProps> = ({ content, theme }) => {
  const themeStyles = themeConfig[theme as keyof typeof themeConfig];
  
  return (
    <div className="lg:col-start-1 lg:row-start-2 relative group">
      <div className={`h-auto min-h-[180px] lg:h-[280px] ${themeStyles.bg} border ${themeStyles.border} rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ${themeStyles.hover}`}>
        <div className="space-y-3 lg:space-y-4">
          {content.map((paragraph, index) => (
            <p 
              key={index}
              className="font-body text-sm sm:text-base text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content, icon, theme }) => {
  const themeStyles = themeConfig[theme as keyof typeof themeConfig];
  const iconGradient = iconGradients[theme as keyof typeof iconGradients];
  const bulletColor = bulletColors[theme as keyof typeof bulletColors];
  
  return (
    <div className="lg:col-start-2 lg:row-start-2 relative group">
      <div className={`h-auto min-h-[180px] lg:h-[280px] ${themeStyles.bg} border ${themeStyles.border} rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-6 transition-all duration-300 ${themeStyles.hover}`}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-center mb-3 lg:mb-4">
            <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r ${iconGradient} rounded-lg flex items-center justify-center mr-2 lg:mr-3`}>
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {IconComponents[icon as keyof typeof IconComponents]}
              </svg>
            </div>
            <h4 className="font-heading font-semibold text-base lg:text-lg text-slate-900">{title}</h4>
          </div>
          
          <div className={Array.isArray(content) ? "space-y-2 lg:space-y-3" : ""}>
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <div key={index} className="flex items-center px-2 lg:px-3 py-1.5 lg:py-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className={`w-2 h-2 ${bulletColor} rounded-full mr-2 lg:mr-3 flex-shrink-0`}></div>
                  <span className="text-slate-700 font-body text-xs lg:text-sm font-medium">{item}</span>
                </div>
              ))
            ) : (
              <div className="px-2 lg:px-3 py-1.5 lg:py-2 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-slate-700 font-body text-xs lg:text-sm font-medium">{content}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NumberCard: React.FC<NumberCardProps> = ({ number, icon }) => (
  <div className="col-span-1 row-start-4 md:row-span-2 md:col-start-3 md:row-start-1 relative group">
    <div className="h-[200px] md:h-[576px] bg-slate-100 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300">
      <div className="text-right">
        <span className="text-5xl md:text-8xl font-heading font-bold text-slate-300">
          {number}
        </span>
      </div>
      <div className="space-y-2 md:space-y-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {IconComponents[icon as keyof typeof IconComponents]}
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
export default function BentoSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrollMode, setIsScrollMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle desktop/mobile detection after hydration
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  
  // Auto-slide functionality (disabled in scroll mode)
  useEffect(() => {
    if (isPaused || isScrollMode) return;
    
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % layersData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [isPaused, isScrollMode]);

  // Scroll-based slide navigation (Desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      const isInView = rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;
      
      if (isInView && !isScrollMode) {
        setIsScrollMode(true);
        setIsPaused(true);
      } else if (!isInView && isScrollMode) {
        setIsScrollMode(false);
        setIsPaused(false);
      }
      
      // Calculate scroll progress within the section
      if (isInView) {
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - rect.top) / (sectionHeight * 0.8)));
        const slideIndex = Math.floor(scrollProgress * layersData.length);
        const clampedIndex = Math.max(0, Math.min(layersData.length - 1, slideIndex));
        
        if (clampedIndex !== activeSlide) {
          setActiveSlide(clampedIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSlide, isScrollMode, isDesktop]);

  // Reset scroll mode when switching to mobile
  useEffect(() => {
    if (!isDesktop) {
      setIsScrollMode(false);
      setIsPaused(false);
    }
  }, [isDesktop]);

    const currentLayer = layersData[activeSlide];

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  if (!currentLayer) return null;

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 lg:min-h-screen"
      style={{ 
        height: isDesktop ? `${layersData.length * 100}vh` : 'auto' 
      }}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center rounded-3xl py-16 lg:py-0" style={{background: 'radial-gradient(circle at center, white 0%,rgb(255, 255, 255) 50%,rgb(205, 207, 212) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-900 mb-2 md:mb-4 lg:mb-6">
              How FlowFi Works
            </h2>
          </div>

          {/* Mobile: Simple Layer Navigation */}
          <div className="lg:hidden mb-8">
            <div className="text-center mb-6">
              <span className="text-lg font-heading font-semibold text-slate-700">
                Layer {currentLayer.id}
              </span>
            </div>
            <div className="flex justify-center space-x-2">
              {layersData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Number Tab Navigation */}
          <div 
            className="hidden lg:flex justify-center mb-6 md:mb-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex bg-slate-100 rounded-full p-1.5 md:p-2">
              {layersData.map((layer, index) => (
                <button
                  key={layer.id}
                  onClick={() => goToSlide(index)}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-full font-body font-medium transition-all duration-300 text-sm md:text-base ${
                    activeSlide === index
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {layer.id}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Scroll Indicator */}
          {!isScrollMode && (
            <div className="hidden lg:flex justify-center mb-8">
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <span>Scroll to navigate layers</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          )}

          {/* Mobile: Stack Layout */}
          <div className="lg:hidden space-y-6 animate-fadeIn">
            <TitleCard 
              title={currentLayer.title} 
              subtitle={currentLayer.subtitle} 
            />
            <DescriptionCard 
              content={currentLayer.description.content} 
              theme={currentLayer.description.theme} 
            />
            <FeatureCard 
              title={currentLayer.feature.title}
              content={currentLayer.feature.content}
              icon={currentLayer.feature.icon}
              theme={currentLayer.feature.theme}
            />
          </div>

          {/* Desktop: Bento Grid */}
          <div 
            className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="contents animate-fadeIn">
              <TitleCard 
                title={currentLayer.title} 
                subtitle={currentLayer.subtitle} 
              />
              <DescriptionCard 
                content={currentLayer.description.content} 
                theme={currentLayer.description.theme} 
              />
              <FeatureCard 
                title={currentLayer.feature.title}
                content={currentLayer.feature.content}
                icon={currentLayer.feature.icon}
                theme={currentLayer.feature.theme}
              />
              <NumberCard 
                number={currentLayer.id} 
                icon={currentLayer.numberIcon} 
              />
            </div>
          </div>

          {/* Mobile: Navigation Controls */}
          <div className="lg:hidden mt-8 flex justify-between items-center">
            <button
              onClick={() => goToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Previous</span>
            </button>
            
            <div className="text-sm text-slate-600 font-medium">
              {activeSlide + 1} of {layersData.length}
            </div>
            
            <button
              onClick={() => goToSlide(Math.min(layersData.length - 1, activeSlide + 1))}
              disabled={activeSlide === layersData.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium">Next</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 