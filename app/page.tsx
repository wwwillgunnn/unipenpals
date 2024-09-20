import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-16 mt-20 overflow-hidden">
      <Hero />
      <Feature />
      <Benefits />
      <Testimonials />
      <CTA />
    </main>
  );
}
