"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Button from './Button';

export default function Benefits() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the benefits section
    gsap.fromTo(
      ".benefit-item",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.4, // Staggering effect
        scrollTrigger: {
          trigger: ".benefits-container",
          start: "top 5%",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center w-full my-[112px] benefits-container">
      <div className="flex flex-col gap-6 items-center justify-center text-center max-w-3xl">
        <h2 className="text-5xl font-bold">Discover and connect with university students</h2>
        <p className="text-lg">University Pen Pals is a secure messaging service designed exclusively for university students. Connect with other students, verify your university affiliation, and find pen pals based on shared interests.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20 mb-12 max-w-full">
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/lock-alt-svgrepo-com.svg" alt="Secure Lock" width={48} height={48} />
          <h4 className="text-4xl font-semibold">Secure Messaging</h4>
          <p className="text-center text-base">Communicate safely and privately with other university students.</p>
        </div>
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/verified-svgrepo-com.svg" alt="Verified" width={48} height={48} />
          <h4 className="text-4xl font-semibold">University Verification</h4>
          <p className="text-center text-base">Verify your university affiliation for added trust and authenticity.</p>
        </div>
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/sun-svgrepo-com.svg" alt="Stress Reliever" width={48} height={48} />
          <h4 className="text-4xl font-semibold">Stress Reliever</h4>
          <p className="text-center text-base">Find pen pals who share your interests and hobbies.</p>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <Button type="button" title="Join" variant="btn-primary" href="/log-in" />
        <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
      </div>
    </section>
  );
}
