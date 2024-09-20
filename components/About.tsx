"use client";

import Image from "next/image";
import FadeIn from "./AnimationFadeIn";
import ScrollFadeIn from "./AnimationScrollFadeIn";

export default function About() {
  return (
    <section className="my-20">
      <section className="flex flex-col lg:flex-row gap-20 lg:items-center">
        <FadeIn className="flex flex-col gap-6 w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold">About Us</h1>
          <p className="text-base lg:text-lg max-w-[75ch]">
            University Pen Pals is a platform designed for university students to connect anonymously and form meaningful one-on-one relationships. 
            Our mission is to foster meaningful connections, support isolated students, and provide a low-risk, low-commitment environment for making new friends easily. 
            We cater to university students seeking to overcome mental health challenges and meet peers they might not encounter otherwise. Our platform is dedicated to creating 
            a space where students can share their passions and interests while maintaining their anonymity, allowing them to build connections at their own pace. 
            We recognise that students deeply immersed in their studies often find it difficult to socialise, and campuses can sometimes feel isolating. Therefore, 
            our primary goal is to facilitate new friendships and bring people together through our website and app, without the pressure of high-commitment interactions. 
            By offering this supportive environment, we aim to help students navigate the challenges of university life and improve their overall well-being.
          </p>
        </FadeIn>
        <FadeIn className="flex w-full lg:w-1/2">
          <Image src="/pplogo.svg" alt="logo" layout="intrinsic" width={640} height={640} />
        </FadeIn>
      </section>

      <ScrollFadeIn className="flex flex-col-reverse lg:flex-row gap-20 lg:items-center my-[112px]">
        <div className="flex w-full lg:w-1/2">
          <Image src="/3 SCENE.svg" alt="logo" width={640} height={640} />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-6xl font-bold">Our Mission</h3>
          <p className="text-base lg:text-lg max-w-[75ch]">Our mission is to provide a low-risk and low-commitment platform for university students to communicate one-on-one anonymously. 
            We are dedicated to fostering an environment where students can meet new people, share passions and interests with anonymity, and build connections at their own pace. 
            We aim to assist students who are isolated and affected by mental health issues, acknowledging that those who are heavily invested in their studies often struggle to socialize.
             Understanding that campuses can often feel desolate, our primary goal is to facilitate new friendships and bring people together through our website and app, 
             all without the pressure of high-commitment interactions.
          </p>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn className="flex flex-col lg:flex-row gap-20 lg:items-center my-[112px]">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-6xl font-bold">Our Vision</h3>
          <p className="text-base lg:text-lg max-w-[75ch]">Our vision is to create a connected and inclusive university community where every student feels empowered to form meaningful relationships. 
            We envision a world where students, regardless of their background or situation, can easily find support, companionship, and a sense of belonging through genuine and 
            low-pressure interactions. By leveraging the power of anonymity and technology, we aim to break down social barriers, enhance mental well-being, and create a supportive 
             network that fosters personal growth and lifelong connections.
          </p>
        </div>
        <div className="flex w-full lg:w-1/2">
          <Image src="/7 SCENE.svg" alt="logo" width={640} height={640} />
        </div>
      </ScrollFadeIn>      
    </section>        
  );
}
