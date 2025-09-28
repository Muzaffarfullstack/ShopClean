import { RiShoppingBag3Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import "../index.css";

function Intro() {
  return (
    <div className="wrapper intro-container text-center">
      <div className="intro-logo inline-flex rounded-full justify-center bg-blue-200 h-20 w-20 text-4xl text-blue-600 max-sm:text-2xl max-sm:w-16 max-sm:h-16">
        <RiShoppingBag3Line />
      </div>
      <h1 className="text-7xl font-bold max-sm:text-3xl">
        Simple Shopping,
        <span className="line-clamp-2 text-blue-600">Clean Experience</span>
      </h1>
      <p className="line-clamp-2 text-xl text-gray-600 max-sm:text-base">
        Discover quality products with a minimalist approach. Everything you
        need, nothing you don't.
      </p>
      <button className="border border-gray-300 whitespace-nowrap inline-flex justify-center btn rounded-3xl bg-blue-600 text-neutral-100 cursor-pointer hover:bg-blue-700 ">
        Shop Now <FaArrowRight className="btn-logo" />
      </button>
    </div>
  );
}

export default Intro;
