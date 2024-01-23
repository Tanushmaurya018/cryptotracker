import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = (props) => {

  return (
    <div className=" hover:scale-105  duration-200 bg-gray-700 text-white bg-opacity-40 backdrop-blur hover:bg-white transition-all ease-linear hover:text-black m-5 rounded-2xl p-4">
      <div className="flex flex-col md:flex-row justify-between w-[100px] md:w-[300px] h-[200px] md:h-[100px]  gap-5 overflow-hidden b">
        <img src={`${props.imageUrls}`} className=" object-cover rounded-2xl flex justify-center items-center w-[100px] h-[100px]" />
        <div className="justify-between items-center text-center md:text-right">
        <h1 className="text-md md:text-2xl font-bold ">{props.name}</h1>
        <h1 className="text-md md:text-xl  font-medium ">
        {props.price}</h1>
        </div>


      </div>
    </div>
  );
};

export default Card;