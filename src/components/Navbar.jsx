// react-icons imports
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { RiUser3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

//react-router-dom
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-container relative top-4">
      <nav className="wrapper flex gap-5 items-center">
        <div className="logo">
          <NavLink className="navbar-link font-bold text-3xl hover:text-blue-500">
            ShopClean
          </NavLink>
        </div>
        <ul className="flex gap-15 ">
          <li>
            <NavLink className="navbar-links text-gray-600 hover:text-blue-500 text-base">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links text-base text-gray-600 hover:text-blue-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links text-base hover:text-blue-500 text-gray-600">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links text-base hover:text-blue-500 text-gray-600 ">
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="searchbar border border-gray-800 h-8 rounded-2xl flex items-center w-md relative">
          <CiSearch className="absolute left-3 text-xl font-semibold" />
          <input
            type="text"
            placeholder="Search products..."
            className="border-0 border-gray-400 w-sm absolute right-6 h-4 outline-0 "
          />
        </div>
        <div className="navbar-extra flex gap-5 cursor-pointer text-xl  ">
          <FaRegHeart className="hover:text-blue-500" />
          <Link to="/cartItem/">
            <LiaShoppingCartSolid className="hover:text-blue-500 text-2xl" />
          </Link>
          <RiUser3Line className="hover:text-blue-500" />
        </div>
      </nav>
      <hr className="text-gray-300 navbar-line" />
    </header>
  );
}

export default Navbar;
