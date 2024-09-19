import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-20 px-16">
      <div className="flex flex-col lg:flex-row justify-between w-full">
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
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold">About Us</p>
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold">Contact Us</p>
            <p className="text-base font-semibold cursor-pointer transition-all hover:font-bold">FAQs</p>
          </div>
        </div>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
            <label className="label">
              <span className="label-text">Stay updated with our latest news and promotions.</span>
            </label>
          </fieldset>
        </form>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white border-t mt-20"></div>
        <div className="flex flex-row justify-between w-full">
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
