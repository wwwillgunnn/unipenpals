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
  initial?: { opacity?: number; y?: number };
  target?: { opacity?: number; y?: number };
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = '',
  duration = 1.5,
  scrub = true,
  start = "top 80%",
  end = "top 30%",
  initial = { opacity: 0, y: 100 },
  target = { opacity: 1, y: 0 },
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        initial,
        {
          ...target,
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
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
