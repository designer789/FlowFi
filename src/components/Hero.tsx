export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/background_img.png"
      >
        <source src="/video1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-cyan-900/40 z-10" />
      
      {/* Additional dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-20" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
      </div>
      
      <div className="relative z-40 max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-8xl mx-auto">
          {/* Main heading */}
         
          
          {/* Enhanced Main Heading */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-12 leading-[1.1] tracking-tight">
            <span className="block mb-2">Unlock Instant Liquidity</span>
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              from Real-World Payment Streams
            </span>
          </h1>
          
          {/* Enhanced Section title */}
          <div className="mb-12">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-purple-200 mb-6 tracking-wide">
              Bringing Cash Flow On-Chain
            </h2>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-16">
           
            <p className="font-body text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mt-6">
            FlowFi is a decentralized PayFi protocol that transforms how money moves around the world. By tokenizing real-world payment flows such as invoices, salaries, and remittances, FlowFi provides instant liquidity and decentralized credit access to users and businesses.

            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-20">
            <a href="https://t.me/FlowFi_Official" target="_blank" rel="noopener noreferrer">
            <button className="group relative bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-10 py-5 rounded-xl font-body font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25 min-w-[200px] cursor-pointer">
              <span className="relative z-10">Join Our Community</span>
              </button></a>
              
            <a href="https://docs.flowfi.vip/" target="_blank" rel="noopener noreferrer">
            <button className="group border-2 border-gray-500 hover:border-purple-400 text-gray-200 hover:text-white px-10 py-5 rounded-xl font-body font-bold text-xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:bg-purple-500/10 min-w-[200px] cursor-pointer">
              Read Docs
            </button></a>
            
          </div>
          
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-30" />
    </section>
  );
} 