import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number; // Optional stagger duration in seconds
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  duration = 1,
  delay = 0,
  stagger = 0, // Default no stagger
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current?.children ? Array.from(ref.current.children) : [ref.current];

    // If there is a stagger, target all child elements, otherwise just target the main element
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 }, // Starting state
      {
        opacity: 1,
        y: 0, // Ending state
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined, // Apply stagger only if provided
        ease: "power2.out",
      }
    );
  }, [duration, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
