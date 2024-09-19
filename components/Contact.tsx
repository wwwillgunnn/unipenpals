import Spline from "@splinetool/react-spline";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-0">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
                <div className="text-lg text-white">Have a question or need assistance? Contact us.</div>
            </div>
            <form className="flex flex-col gap-5">
                {/* Name input */}
                <input
                type="text"
                placeholder="Name"
                className="p-4 bg-transparent border-2 border-white text-white placeholder-[#E0E0E0] focus:outline-none"
                />
                {/* Email input */}
                <input
                type="email"
                placeholder="Email"
                className="p-4 bg-transparent border-2 border-white text-white placeholder-[#E0E0E0] focus:outline-none"
                />
                {/* Message textarea */}
                <textarea
                placeholder="Start typing here..."
                rows={6}
                className="p-4 bg-transparent border-2 border-white text-white placeholder-[#E0E0E0] focus:outline-none"
                />
                {/* Submit button */}
                <button
                type="submit"
                className="p-4 bg-[#D48A67] font-bold hover:bg-[#BF7553]"
                >
                Send Message
                </button>
            </form>
        </div>
        <div className="flex items-center w-full lg:w-1/2 h-80 lg:h-auto">
          <Spline scene="https://prod.spline.design/oeZvlxAg123pidNF/scene.splinecode" />
        </div>

    </div>
  )
}
