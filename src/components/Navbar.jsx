// react-icons imports
import { LiaShoppingCartSolid } from "react-icons/lia";
import { RiUser3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

//react-router-dom
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate("/search", { state: { query: input } });
      setInput("");
    }
  };

  return (
    <header className="navbar-container relative top-4 max-sm:max-w-[642px] max-sm:overflow-hidden">
      <nav className="wrapper flex gap-5 items-center max-sm:flex justify-between">
        <div className="logo">
          <NavLink className="navbar-link font-bold text-3xl hover:text-blue-500 max-sm:text-base relative left-1">
            ShopClean
          </NavLink>
        </div>
        <ul className="flex gap-15 max-sm:hidden">
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

        {/* search bar */}
        <div className="searchbar border border-gray-800 h-8 rounded-2xl flex items-center w-md relative max-sm:max-w-[160px] max-sm:w-[30%] max-sm:h-[20px]">
          <CiSearch className="absolute left-3 text-xl font-semibold max-sm:text-base max-sm:left-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="border-0 border-gray-400 w-sm absolute right-6 h-4 outline-0 "
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            value={input}
          />
        </div>

        {/* favourite, cart, profile */}
        <div className="navbar-extra flex gap-5 cursor-pointer text-xl relative max-sm:gap-2 ">
          <Link to="/cartItem/">
            <LiaShoppingCartSolid className="hover:text-blue-500 text-2xl max-sm:text-sm" />
          </Link>
          <RiUser3Line className="hover:text-blue-500 max-sm:text-sm" />
          <FaBars className="drop-menu max-sm:block text-sm" />
        </div>
      </nav>
      <hr className="text-gray-300 navbar-line" />
    </header>
  );
}

export default Navbar;
