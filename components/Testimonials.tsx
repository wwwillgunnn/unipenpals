import Image from "next/image"

const Testimonials = () => {
  return (
    <section className="flex flex-col my-[112px] mx-16">
      <h2 className="text-5xl font-bold">Customer testimonials</h2>
        <div className="flex flex-row gap-8 mt-20">
          <div className="flex flex-col gap-8 w-1/3">
            <Image src="/Family Values - Catching Up.png" alt="People talking" width={19} height={116} />
            <h6 className="text-xl font-semibold">“Uni Pen Pals is a brilliant chance for a cultural exchange, allowing for my own knowledge and conscious surrounding cultures to improve. Additionally, having a person to provide emotional support to, as well as receive, would is excellent .”</h6>
          </div>
          <div className="flex flex-col gap-8 w-1/3">
            <Image src="/Family Values - Catching Up.png" alt="People talking" width={19} height={116} />
            <h6 className="text-xl font-semibold">"It’s a nice way to connect with people you may not get the chance to usually and to exchange cultural and different social experiences."</h6>
          </div>
          <div className="flex flex-col gap-8 w-1/3">
            <Image src="/Family Values - Catching Up.png" alt="People talking" width={19} height={116} />
            <h6 className="text-xl font-semibold">"Genuinely just helping to make friendships and connect with people that could translate to irl friendships. University isn’t lacking in people wanting more friends, we just lack in opportunities to make those friends."</h6>
          </div>
        </div>
    </section>
  )
}

export default Testimonials
