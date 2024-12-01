import Contact from "@/components/contact/Contact";
import FAQ from "@/components/contact/Faq";

export default function contact() {
  return (
    <section className="flex flex-col gap-[112px] my-[112px] mx-16">
        <Contact />
        <FAQ />
    </section>
  )
}