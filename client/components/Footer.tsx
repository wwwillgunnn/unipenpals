import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="my-20 mx-16">
      <div className="flex flex-col gap-8 lg:flex-row justify-between w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4 items-center">
          <Image src="/pplogo.svg" alt="logo" width={60} height={60} />
          <Link href="https://www.instagram.com/uni.penpals/" passHref>
            <Image
              src="/instagram-svgrepo-com.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
          </div>
          <div className="flex flex-row gap-8">
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold"><Link href="/about">About</Link></p>
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold"><Link href="/contact">Contact</Link></p>
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold"><Link href="/contact#faq">FAQs</Link></p>
          </div>
        </div>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <div className="join flex flex-col sm:flex-row w-full gap-4 sm:gap-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-full bg-[#6CA4B2] placeholder-[#E0E0E0] border-white join-item rounded-none lg:rounded-lg" />
              <button className="btn w-full sm:w-auto bg-[#D48A67] hover:bg-[#BF7553] border-[#D48A67] hover:border-[#BF7553] text-white join-item rounded-none lg:rounded-lg">Subscribe</button>
            </div>
            <label className="label">
              <span className="label-text text-[#E0E0E0]">Stay updated with our latest news and promotions.</span>
            </label>
          </fieldset>
        </form>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white border-t mt-8 lg:mt-20"></div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between w-full">
          <div className="flex flex-row gap-8">
            <a className="link">Privacy Policy</a>
            <a className="link">Terms of Service</a>
            <a className="link">Cookie Policy</a>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by University Pen Pals Ltd</p>
        </div>
      </div>
    </footer>
  )
}
