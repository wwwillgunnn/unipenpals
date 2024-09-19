"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Spline from '@splinetool/react-spline/next';
import Button from "./Button";

export default function Hero() {
  useEffect(() => {
    const sections = document.querySelectorAll(".hero-section");

    gsap.fromTo(
      sections,
      { opacity: 0, y: 50 }, // Start state
      {
        opacity: 1,
        y: 0, // End state
        duration: 1,
        stagger: 0.5, // Stagger the animations
        ease: "power2.out", // Easing function
      }
    );
  }, []);

  return (
    <section className="hero flex flex-col gap-6 items-center justify-center text-center w-full mb-[112px]">
      <div className="hero-section flex flex-col gap-6 items-center max-w-3xl w-full">
        <h1 className="lg:text-6xl text-4xl font-bold">
          Connect with university students through our pen pal service
        </h1>
        <p className="text-lg">
          Join University Pen Pals and start making meaningful connections with other university students today!
        </p>
      </div>
      <div className="hero-section flex gap-4">
        <Button type="button" title="Sign Up" variant="btn-primary" href="/log-in" />
        <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
      </div>
      <div className="hero-section w-full max-w-7xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Spline scene="https://prod.spline.design/oogYi91XkSVVYKTf/scene.splinecode" />
      </div>
    </section>
  );
}

