import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png"
const user = false;
const Navbar = () => {
  const [click,setClick]=useState(false)
  const clicked =()=>{
    setClick(!click)
  }
  return (
    <div className="z-[9999] flex h-16 md:h-20 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
     
      {/* <div className="hidden md:flex justify-start gap-5 flex-1">
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Currencies</Link>
      </div> */}

      <div className="text-xl md:text-2xl text-center flex-1">
        <Link to="/" className="font-bold ">
          <img src={logo} className="w-[200px] md:w-[300px]"/>
        </Link>
      </div>

      {/* <div className="hidden md:flex items-center gap-5 flex-2">
        <div className=" flex gap-2 items-center justify-center bg-orange-700 rounded-lg p-1">
          <FaPhoneAlt className="text-white"/>
          <span className="text-white">+123-456-789</span>
        </div>

      </div> */}


<div className="hidden md:flex text-2xl  gap-5 rounded-3xl  bg-opacity-30 backdrop-blur ">
          <Link onClick={clicked} className={click ? "bg-gray-500 py-2 rounded-full px-5 text-black" : "bg-transparent text-white"} to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link onClick={clicked} className={click ? "bg-gray-500 py-2 rounded-full px-5 text-black" : "bg-transparent text-white"} to="/categories">Categories</Link>
          <Link onClick={clicked} className={click ? "bg-gray-500 py-2 rounded-full px-5 text-black" : "bg-transparent text-white"} to="/nfts">NFT's</Link>
          {/* <Link onClick={clicked} className={click ? "bg-gray-500 py-2 rounded-full px-5 text-black" : "bg-transparent text-white"} to="/contracts">Contracts</Link> */}
          </div>

      <div className="flex md:hidden">
        <Menu />
      </div>
      
    </div>
  );
};

export default Navbar;
