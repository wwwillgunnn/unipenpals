"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  useEffect(() => {
    gsap.fromTo(
      ".feature-image",
      { y: 100, opacity: 0 }, 
      {
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-section",
          start: "top 80%", // Adjust this to your liking
          end: "bottom top",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      ".feature-text",
      { y: 100, opacity: 0 }, 
      {
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-section",
          start: "top 80%", // Adjust this to your liking
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className="feature-section flex flex-col-reverse lg:flex-row items-center justify-center gap-20 my-[112px] w-full">
      <Image className="feature-image" src="/Family Values - Catching Up.png" alt="People talking" width={616} height={640}/>
      <div className="feature-text flex flex-col gap-8 items-center justify-center max-w-2xl">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl lg:text-4xl font-bold">Expand Your Horizons With Our Pen Pal Service</h3>
          <p className="text-base lg:text-lg">Our pen pal service is designed to help university students foster new friendships, enhance cultural exchange, and improve communication skills. Connect with students from around the world and expand your horizons.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4">
            <Image src="/high-five-svgrepo-com.svg" alt="world" width={48} height={48} />
            <h6 className="text-xl font-semibold">New Friends</h6>
            <p className="text-base">Expand your social circle and create meaningful connections with students from around the world</p>
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/world-svgrepo-com.svg" alt="world" width={48} height={48} />
            <h6 className="text-xl font-semibold">Cultural exchange</h6>
            <p className="text-base">Immerse yourself in different cultures and gain a global perspective through conversations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
