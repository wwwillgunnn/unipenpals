import Button from "./Button"

export default function CTA() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-20 my-[112px]">
      <h2 className="text-5xl font-bold text-center lg:text-left w-1/2">Connect with fellow <br />students today!</h2>
      <div className="flex flex-col gap-6 w-1/2">
        <p className="text-lg text-center lg:text-left">Join our pen pal service and start building meaningful connections with other university students. Discover new perspectives, share experiences, and make lifelong friends.</p>
        <div className="flex gap-4 justify-center lg:justify-normal">
          <Button type="button" title="Sign Up" variant="btn-primary" href="/log-in" />
          <Button type="button" title="Learn More" variant="btn-outline" href="/discover" />
        </div>
      </div>
    </section>
  )
}
