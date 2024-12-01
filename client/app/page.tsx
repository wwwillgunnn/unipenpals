import Benefits from '@/components/home/Benefits';
import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Partnerships from '@/components/home/Partnerships';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-16 mt-20 overflow-hidden">
      {/* TODO: Load whole page only when hero is fully loaded */}
      <Hero />
      <Feature />
      <Benefits />
      {/* <Partnerships /> ADD LATER ON*/}
      <Testimonials />
      <CTA />
    </main>
  );
}
