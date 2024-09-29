"use client";

import Image from 'next/image';
import Button from './Button';
import ScrollFadeIn from './AnimationScrollFadeIn';
import ScrollStagger from './AnimationScrollStagger';

export default function Benefits() {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full my-[112px] benefits-container">
      <ScrollFadeIn className="flex flex-col gap-6 items-center justify-center text-center w-full lg:max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold">Discover and connect with university students</h2>
        <p className="text-base lg:text-lg">University Pen Pals is a secure messaging service designed exclusively for university students. Connect with other students, verify your university affiliation, and find pen pals based on shared interests.</p>
      </ScrollFadeIn>
      
      <ScrollStagger className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20 mb-12 max-w-full">
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-full lg:w-1/3">
          <Image src="/lock-alt-svgrepo-com.svg" alt="Secure Lock" width={48} height={48} />
          <h4 className="text-2xl lg:text-4xl font-semibold">Secure Messaging</h4>
          <p className="text-center text-base">Communicate safely and privately with other university students.</p>
        </div>
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-full lg:w-1/3">
          <Image src="/verified-svgrepo-com.svg" alt="Verified" width={48} height={48} />
          <h4 className="text-2xl lg:text-4xl font-semibold">University Verification</h4>
          <p className="text-center text-base">Verify your university affiliation for added trust and authenticity.</p>
        </div>
        {/* This needs a mb-6 or else the div is position slightly lower than the other two, idk why just allow it */}
        <div className="benefit-item flex flex-col items-center justify-center gap-4 w-full lg:w-1/3 mb-6"> 
          <Image src="/sun-svgrepo-com.svg" alt="Stress Reliever" width={48} height={48} />
          <h4 className="text-2xl lg:text-4xl font-semibold">Stress Reliever</h4>
          <p className="text-center text-base">Find pen pals who share your interests and hobbies.</p>
        </div>
      </ScrollStagger>
      
      <div className="flex gap-4 mt-6">
        <Button type="button" title="Join" variant="btn-primary" href="/log-in" />
        <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
      </div>
    </section>
  );
}
