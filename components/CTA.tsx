import Button from "./Button"

const CTA = () => {
  return (
    <section className="flex flex-row gap-20 my-[112px] mx-16">
      <h2 className="text-5xl font-bold w-1/2">Connect with fellow <br />students today!</h2>
      <div className="flex flex-col gap-6 w-1/2">
        <p className="text-lg">Join our pen pal service and start building meaningful connections with other university students. Discover new perspectives, share experiences, and make lifelong friends.</p>
        <div className="flex gap-4">
          <Button type="button" title="Sign Up" variant="btn btn-primary" />
          <Button type="button" title="Learn More" variant="btn btn-outline btn-primary" />
        </div>
      </div>
    </section>
  )
}

export default CTA
