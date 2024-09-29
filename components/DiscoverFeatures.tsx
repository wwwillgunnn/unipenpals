import Image from "next/image";

export default function DiscoverFeatures() {
  return (
    <section className="flex flex-col text-center">
        <h2>Enjoy Different Social Interests and Perspectives</h2>
        <p>
            University Pen Pals offers a range of additional features to enhance your pen pal experience. 
            Customize your profile, enjoy multilingual support, and navigate our user-friendly interface with ease.
        </p>
        <div>
            <Image src="/pplogo.svg" alt="logo" layout="intrinsic" height={240}/>
            <h4></h4>
            <p></p>
        </div>
    </section>
  )
}
