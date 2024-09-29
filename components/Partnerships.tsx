"use client";

import Image from "next/image";
import ScrollFadeIn from "./AnimationScrollFadeIn";

export default function Partnerships() {
  return (
    <ScrollFadeIn className="flex flex-col gap-6 items-center justify-center text-center my-[112px] w-full">
        <h3 className="text-3xl lg:text-4xl font-bold">Partnered Universities</h3>
        <div className="flex flex-row">
            <Image src="/uclogo.svg" alt="UC Logo" width={600} height={600} priority/>
            <Image src="/anulogo.svg" alt="Anu Logo" width={300} height={300} priority/>
        </div>
    </ScrollFadeIn>
  )
}
