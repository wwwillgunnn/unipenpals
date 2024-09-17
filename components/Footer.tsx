import Image from "next/image"

const Footer = () => {
  return (
    <footer className="py-20 px-16">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-8">
          <Image src="/pplogo.svg" alt="logo" width={68} height={71} />
          <div className="flex flex-row gap-8">
            <p className="text-base font-semibold">About Us</p>
            <p className="text-base font-semibold">Contact Us</p>
            <p className="text-base font-semibold">FAQs</p>
            <p className="text-base font-semibold">Support</p>
            <p className="text-base font-semibold">Terms</p>
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

export default Footer
