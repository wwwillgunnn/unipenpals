import Spline from '@splinetool/react-spline/next';
import Button from "./Button"

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center text-center w-full mb-[112px]">
      <div className="flex flex-col gap-6 items-center max-w-3xl w-full">
        <h1 className="text-6xl md:text-6xl sm:text-4xl font-bold">
          Connect with university students through our pen pal service
        </h1>
        <p className="text-lg md:text-lg sm:text-sm">
          Join University Pen Pals and start making meaningful connections with other university students today!
        </p>
      </div>
      <div className="flex gap-4">
        <Button type="button" title="Sign Up" variant="btn-primary" href="/log-in" />
        <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
      </div>
      <div className="w-full max-w-7xl">
        <Spline scene="https://prod.spline.design/oogYi91XkSVVYKTf/scene.splinecode" />
      </div>
    </section>
  )
}
