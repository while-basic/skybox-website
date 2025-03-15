import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyMe from '@/components/WhyMe';
import Skills from '@/components/Skills';
import DataCenterDiagram from '@/components/DataCenterDiagram';
import SkyboxAdvantage from '@/components/SkyboxAdvantage';
import ValueProposition from '@/components/ValueProposition';
import CaseStudySolver from '@/components/CaseStudySolver';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyMe />
      <Skills />
      <DataCenterDiagram />
      <SkyboxAdvantage />
      <ValueProposition />
      <Timeline />
      <CaseStudySolver />
      <Footer />
    </main>
  );
}
