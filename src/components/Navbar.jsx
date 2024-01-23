import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

const user = false;
const Navbar = () => {
  return (
    <div className=" flex h-16 md:h-20 bg-red-100 text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
     
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
        <div className=" flex gap-2 items-center justify-center bg-orange-300 rounded-lg p-1">
          <img src="/phone.png" alt="" width={20} height={20} />
          <span>+123-456-789</span>
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
