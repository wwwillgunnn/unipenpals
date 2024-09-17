import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between w-full h-16 px-16 py-3">
      <ul className="navbar-start hidden lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 px-5 cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
  
      <Link href="/" className="navbar-center">
        <Image src="/pplogo.svg" alt="logo" width={68} height={71} />
      </Link>
  
      <div className="hidden lg:flex navbar-end gap-5">
        <Button type="button" title="Sign Up" variant="btn btn-primary" />
        <Button type="button" title="Log In" variant="btn btn-outline btn-primary"/>
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>About Us</a></li>
          <li><a>Discover More</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
  
}

export default Navbar
