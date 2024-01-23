import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";

const user = false;
const Navbar = () => {
  return (
    <div className=" flex h-16 md:h-20 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
     
      <div className="hidden md:flex gap-5 flex-1">
        <Link href="/">Home</Link>
        <Link href="/currency">Currencies</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="text-xl md:text-2xl flex-1">
        <Link href="/" className="font-bold">
          CryptoTracker
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-5 flex-2">
        <div className=" flex gap-2 items-center justify-center bg-orange-700 rounded-lg p-1">
          <FaPhoneAlt className="text-white"/>
          <span className="text-white">+123-456-789</span>
        </div>

        {/* <Link href={user ? "/order" : "/login"}>
          {user ? "Orders" : "Login"}
        </Link> */}
      </div>

      <div className="flex md:hidden">
        <Menu />
      </div>
      
    </div>
  );
};

export default Navbar;
