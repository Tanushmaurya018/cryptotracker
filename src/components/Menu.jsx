
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
        <div className="absolute left-0 top-16 bg-red-500 w-full h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-10 text-center items-center justify-center h-full text-white text-3xl">
            {links.map((link) => {
              return (
                <Link href={link.url} key={link.id} onClick={changeOpen}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Menu;
