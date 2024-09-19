import Image from "next/image";

export default function page() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-20 my-[112px] w-full overflow-x-hidden px-16">
      <div className="flex flex-col gap-8 items-center justify-between max-w-[75ch]">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl lg:text-6xl font-bold">What Is A Pen Pal?</h1>
          <p className="text-base lg:text-lg">
            A pen pal is someone you build a relationship with through written correspondence, traditionally by exchanging letters but increasingly through emails and messaging platforms. 
            The idea is to communicate with someone you may not know personally, often from a different location or even country, to share experiences, thoughts, and interests. 
            Pen pals often exchange ideas about their cultures, hobbies, and personal lives, fostering connections across geographic and social boundaries. 
            In the digital age, pen pals offer a meaningful way to form friendships in a low-pressure environment, allowing people to connect over time at their own pace.
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-4">
            <Image src="/talk-chat-message-svgrepo-com.svg" alt="world" width={48} height={48} />
            <h6 className="text-xl font-semibold">Improved Communication Skills</h6>
            <p className="text-base">
              Strengthen communication skills and build confidence through regular, meaningful exchanges with new friends.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/happy-heart-kid-svgrepo-com.svg" alt="world" width={48} height={48} />
            <h6 className="text-xl font-semibold">Emotional Wellbeing</h6>
            <p className="text-base">
              Enhance your emotional well-being by sharing experiences and finding support through lasting friendships.
            </p>
          </div>
        </div>
      </div>
      <Image src="/Happy Bunch - Chat.png" alt="People talking" width={616} height={640} />
    </section>
  );
}
