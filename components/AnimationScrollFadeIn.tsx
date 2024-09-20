import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  scrub?: boolean;
  start?: string;
  end?: string;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = '',
  duration = 1.5,
  scrub = true,
  start = "top 80%",
  end = "top 30%",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
          },
        }
      );
    }

    // Cleanup the ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [duration, scrub, start, end]);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
