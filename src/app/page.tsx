import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyMe from '@/components/WhyMe';
import Skills from '@/components/Skills';
import SkyboxAdvantage from '@/components/SkyboxAdvantage';
import ValueProposition from '@/components/ValueProposition';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyMe />
      <Skills />
      <SkyboxAdvantage />
      <ValueProposition />
      <Contact />
      <Footer />
    </main>
  );
}
