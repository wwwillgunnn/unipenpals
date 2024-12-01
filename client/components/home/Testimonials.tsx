"use client";
import Image from "next/image";
import ScrollFadeIn from "@/components/animations/ScrollFadeIn";
import ScrollStagger from "@/components/animations/ScrollStagger";

export default function Testimonials() {
  return (
    <section className="flex flex-col my-[112px] items-center">
      <ScrollFadeIn className="text-4xl lg:text-5xl font-bold text-center lg:text-left w-full">
        Customer testimonials
      </ScrollFadeIn>

      <ScrollStagger className="flex flex-col lg:flex-row gap-8 mt-16 lg:mt-20 w-full items-center lg:items-stretch">
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index}
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            &ldquo;Uni Pen Pals is a brilliant chance for a cultural exchange, allowing for my own knowledge and conscious surrounding cultures to improve. Additionally, having a person to provide emotional support to, as well as receive, would is excellent.&rdquo;
          </h6>
        </div>

        <div className="flex flex-col gap-8 w-full lg:max-w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index} 
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            &ldquo;It&rsquo;s a nice way to connect with people you may not get the chance to usually and to exchange cultural and different social experiences.&rdquo;
          </h6>
        </div>

        <div className="flex flex-col gap-8 w-full lg:max-w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index}
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            &ldquo;Genuinely just helping to make friendships and connect with people that could translate to irl friendships. University isn’t lacking in people wanting more friends, we just lack in opportunities to make those friends.&rdquo;
          </h6>
        </div>

      </ScrollStagger>
    </section>
  );
}
