import Image from "next/image";

export default function Team() {
  return (
    <section>
        <h3>Meet Our Team</h3>
        <p>Get to know the core team members behind Uni Pen Pals</p>
        <Image src="/notion-avatar-will.svg" alt="logo" width={640} height={640} />
        <h4></h4>
    </section>
  )
}
