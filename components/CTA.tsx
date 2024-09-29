"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

export default function CTA() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for left-side elements
    gsap.fromTo(
      ".left-fly",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".left-fly",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // GSAP animation for right-side elements
    gsap.fromTo(
      ".right-fly",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".right-fly",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center my-[112px] gap-5 lg:gap-20">
      <h2 className="text-4xl lg:text-5xl font-bold md:text-center lg:text-left lg:w-1/2 left-fly">
        Connect with fellow <br /> students today!
      </h2>
      <div className="flex flex-col gap-6 lg:w-1/2 right-fly">
        <p className="text-base lg:text-lg md:text-center lg:text-left">
          Join our pen pal service and start building meaningful connections with other university students. Discover new perspectives, share experiences, and make lifelong friends.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <Button type="button" title="Sign Up" variant="btn-primary" href="/log-in" />
          <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
        </div>
      </div>
    </section>
  );
}
