import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';
import WhyFlowFiCard from '@/components/WhyFlowFiCard';
import TokenomicsCard from '@/components/FlowTokenCard';
import RoadmapCard from '@/components/Roadmap';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <BentoSection />
        </section>
        <section id="features">
          <WhyFlowFiCard />
        </section>
        <section id="tokenomics">
          <TokenomicsCard />
        </section>
        <section id="roadmap">
          <RoadmapCard />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
    </div>
  );
}
