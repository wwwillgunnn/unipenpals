import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  stagger?: number;
  start?: string;
  end?: string;
  initial?: { opacity?: number; y?: number };
  target?: { opacity?: number; y?: number };
}

const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  className = '',
  duration = 1,
  stagger = 0.2,
  start = "top 80%",
  end = "top 50%",
  initial = { opacity: 0, y: 100 },
  target = { opacity: 1, y: 0 },
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element.children, // Targeting child elements
        initial,
        {
          ...target,
          duration,
          ease: "power2.out",
          stagger, // Adding stagger effect
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: true,
          },
        }
      );
    }

    // Cleanup the ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [duration, stagger, start, end, initial, target]);

  return (
    <div ref={ref} className={`staggered-animation ${className}`}>
      {children}
    </div>
  );
};

export default ScrollStagger;
