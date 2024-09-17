import Spline from '@splinetool/react-spline/next';
import Button from "./Button"

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full my-20 mx-16">
      <div className="flex flex-col items-center max-w-3xl w-full">
        <h1 className="text-6xl font-bold">Connect with university students through our pen pal service</h1>
        <p className="text-lg mt-6">
          Join University Pen Pals and start making meaningful connections with other university students today!
        </p>
        <div className="flex gap-4 mt-6">
          <Button type="button" title="Sign Up" variant="btn btn-primary" />
          <Button type="button" title="Learn More" variant="btn btn-outline btn-primary" />
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <Spline scene="https://prod.spline.design/oogYi91XkSVVYKTf/scene.splinecode" />
      </div>
    </section>

  )
}

export default Hero
