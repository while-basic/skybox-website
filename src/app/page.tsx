import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AudioCTA from '@/components/AudioCTA';
import WhyMe from '@/components/WhyMe';
import Skills from '@/components/Skills';
import ValueProposition from '@/components/ValueProposition';
import ThankYou from '@/components/ThankYou';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyMe />
      <AudioCTA />
      <Skills />
      <ValueProposition />
      <ThankYou />
      <Footer />
    </main>
  );
}
