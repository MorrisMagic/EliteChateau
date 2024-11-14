import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, ShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <p className="sm:text-2xl text-xl">EliteChateau</p>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className={"flex flex-col items-center gap-1"}
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <IoIosSearch
          onClick={() => setShowSearch(!ShowSearch)}
          className="cursor-pointer"
          size={22}
        />
        <div className="group relative">
          <Link to={"/login"}>
            <IoPersonOutline size={21} className="cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/card"} className="relative">
          <GiShoppingCart size={23} />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <IoMenuOutline
          onClick={() => setVisible(true)}
          size={26}
          className="cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoChevronBack size={22} />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border"}
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border"}
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border"}
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border"}
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
