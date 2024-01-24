
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const user = false;
const Menu = () => {
  const [open, setOpen] = useState(false);
  function changeOpen() {
    setOpen(!open);
    // console.log(open)
  }
  return (
    <div>
        {
            open ? <IoMdClose onClick={changeOpen}/> : <FaBars onClick={changeOpen}/>
        }
      {open && (
        <div className="z-[999] absolute left-0 top-16 bg-gray-500 bg-opacity-30 backdrop-blur w-full h-screen">
          <div className="flex flex-col gap-10 text-center items-center justify-center h-full text-white text-3xl">
          <Link onClick={changeOpen} className={" py-2 rounded-full px-5 text-white"} to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link onClick={changeOpen} className={" py-2 rounded-full px-5 text-white"} to="/categories">Categories</Link>
          <Link onClick={changeOpen} className={" py-2 rounded-full px-5 text-white"} to="/nfts">NFT's</Link>
          {/* <Link onClick={clicked} className={click ? "bg-gray-500 py-2 rounded-full px-5 text-black" : "bg-transparent text-white"} to="/contracts">Contracts</Link> */}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Menu;
