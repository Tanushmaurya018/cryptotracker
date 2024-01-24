import React from "react";
const Hero = () => {
  return (
    <div className="p-10">

      <div className="w-full h-[500px] bg-gray-700 bg-opacity-30 backdrop-blur rounded-3xl flex p-5">
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="text-gray-100 text-5xl  font-Anton">
            Navigate Your Crypto Journey with Precision
          </h1>
          <p className="text-2xl text-gray-300 font-thin">
            Welcome to CRYPTOTRACKER, where every market move becomes an
            opportunity. Whether you're a seasoned investor or just stepping
            into the world of cryptocurrencies, our platform empowers you with
            the tools and insights needed to make informed decisions. Track your
            favorite assets in real-time, analyze historical performance, and
            stay updated with the latest market trends
          </p>
          <div className="flex justify-between">
            <a href="#trending">
              <button className=" px-10 bg-orange-700 text-white rounded-full py-2">
                Show Trends
              </button>
            </a>
            <button className=" px-10 bg-orange-700 text-white rounded-full py-2">
              Show Crypto Coins
            </button>
          </div>
        </div>
        <div className="w-1/2  flex justify-center items-center h-full">
          <iframe
            src="https://gifer.com/embed/UUcK"
            className="h-full rounded-full"
          ></iframe>
          {/* <p>
          <a href="https://gifer.com">via GIFER</a>
        </p> */}
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
