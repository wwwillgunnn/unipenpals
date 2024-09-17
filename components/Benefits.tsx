import Image from "next/image"
import Button from "./Button"

const Benefits = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full my-[112px] mx-16">
      <div className="flex flex-col gap-6 items-center justify-center text-center max-w-3xl">
        <h2 className="text-5xl font-bold">Discover and connect with university students</h2>
        <p className="text-lg">University Pen Pals is a secure messaging service designed exclusively for university students. Connect with other students, verify your university affiliation, and find pen pals based on shared interests.</p>
      </div>
      <div className="flex flex-row items-start justify-center gap-12 mt-20 mb-12 max-w-full">
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/Family Values - Catching Up.png" alt="People talking" width={48} height={48} />
          <h4 className="text-4xl font-semibold">Secure Messaging</h4>
          <p className="text-center text-base">Communicate safely and privately with other university students.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/Family Values - Catching Up.png" alt="People talking" width={48} height={48} />
          <h4 className="text-4xl font-semibold">University Verification</h4>
          <p className="text-center text-base">Verify your university affiliation for added trust and authenticity.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <Image src="/Family Values - Catching Up.png" alt="People talking" width={48} height={48} />
          <h4 className="text-4xl font-semibold">Stress Reliever</h4>
          <p className="text-center text-base">Find pen pals who share your interests and hobbies.</p>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
          <Button type="button" title="Join" variant="btn btn-primary" />
          <Button type="button" title="Learn More" variant="btn btn-outline btn-primary" />
        </div>
    </section>

  )
}

export default Benefits
