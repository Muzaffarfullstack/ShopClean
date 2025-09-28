import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className="wrapper footer-container flex justify-between max-sm:flex flex-col relative left-3">
      <div>
        <Link to="/" className=" text-3xl font-bold ">
          ShopClean
        </Link>
        <p className="footer-text text-neutral-400">
          Clean, simple shopping experience. Discover quality <br /> products
          with a minimalist approach. Everything you need, <br /> nothing you
          don't.
        </p>
        <div className="contact-footer">
          <div className="footer-email text-neutral-400 flex">
            <MdOutlineMailOutline className="text-slate-500 footer-logo" />
            hello@shopclean.com
          </div>
          <div className="footer-email text-neutral-400 flex">
            <FaPhoneAlt className="text-slate-500 footer-logo" />
            +1 (555) 123-4567
          </div>
          <div className="footer-email text-neutral-400 flex">
            <MdOutlineLocationOn className="text-slate-500 footer-logo" />
            123 Commerce Street, New York, NY 10001
          </div>
        </div>
      </div>

      <div className="flex flex-col relative top-5">
        <p className="text-2xl font-bold">Company</p>
        <Link
          to="/about"
          className="text-neutral-400 footer-link hover:text-blue-600"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-neutral-400  footer-link hover:text-blue-600"
        >
          Contact
        </Link>
        <Link
          to="/faq"
          className="text-neutral-400  footer-link hover:text-blue-600"
        >
          FAQ
        </Link>
      </div>

      <div className="flex flex-col relative top-10 bottom-2">
        <p className="text-2xl font-bold">Legal</p>
        <Link
          to="/"
          className="text-neutral-400 footer-link hover:text-blue-600"
        >
          Privacy Policy
        </Link>
        <Link
          to="/"
          className="text-neutral-400 footer-link hover:text-blue-600"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
}

export default Footer;
