import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { IoIosTrendingUp } from "react-icons/io";
import { CiBitcoin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// import photo1 from "../assets/homeimg/1.jpg";
// import photo2 from "../assets/homeimg/2.jpg";
// import photo3 from "../assets/homeimg/3.jpg";
// import photo4 from "../assets/homeimg/4.jpg";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import CryptoCard from "../components/CryptoCard";
// import FTable from "../components/row";

// const list = [photo1, photo2, photo3, photo4];

const Home = () => {
  const [trendingCrypto, setTrendingCrypto] = useState();
  const [allCoins, setAllCoins] = useState();
  const [open, setOpen] = useState(false);
  function changeOpen() {
    setOpen(!open);
    // console.log(open)
  }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchTrendingData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      setTrendingCrypto(res.data.coins);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoinData = async () => {
    const counter = 0;
    try {
      setLoading(true);

      const res = await axios.get(`
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en\
      `);
      console.log(res.data);
      setAllCoins(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoinData();
    fetchTrendingData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen h-full w-full">
      {/* <div className="w-full h-[500px]  ">
        <div className=" flex flex-col justify-between relative  w-full h-full  p-5">
          <div className="absolute top-0 bottom-0 left-0 right-0 p-0 h-full">
            <Swiper
              className="w-full h-full"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {list.map((url) => (
                <SwiperSlide key={url}>
                  <div className="h-auto  md:h-full flex  justify-center p- overflow-hidden  ">
                    <img
                      src={url}
                      className="shadow-sm shadow-current  h-[500px] md:h-full w-full object-cover "
                    ></img>
                    <div className="absolute  inset-0 bg-gradient-to-l from-transparent to-black opacity-95"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <h1 className=" flex justify-center text-3xl md:text-7xl text-gray-300 z-[2]">
            Welcome To Maurya Estates
          </h1>
          <p
            className="text-sm md:text-3xl text-gray-400 w-3/4
              z-[2]"
          >
            Welcome to mauryaestate.com – Your gateway to exceptional homes in
            India! Explore a curated selection of properties tailored to your
            lifestyle. From urban dwellings to serene retreats, find your
            perfect home effortlessly. mauryaestate.com, where your dream home
            awaits!
          </p>

          <div className="flex justify-between z-[2]">
            <Link to="/login">
              <h1 className=" text-2sm md:text-2xl z-10 px-5 md:px-10 rounded-full bg-green-600  py-2 text-white">
                Log In
              </h1>
            </Link>

            <Link to="/">
              <h1 className="  text-2sm md:text-2xl z-10 px-5 md:px-10 rounded-full bg-blue-600  py-2 text-white">
                View Listing
              </h1>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col">
        <div
          className="text-3xl md:text-7xl  flex gap-3 justify-center items-center
          mx-auto text-gray-200 p-2 md:p-5  font-bold"
        >
          <span>Trending</span>
          <IoIosTrendingUp />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className=" flex flex-wrap justify-center items-center ">
            {trendingCrypto?.map((coin) => (
              <Link to={coin.item.id}>
              <div onClick={changeOpen}>

                <Card
                  imageUrls={coin.item.large}
                  name={coin.item.name}
                  price={coin.item.data.price}
                />

              </div>
              </Link>
            ))}
          </div>
        )}
      </div>



      <div className="flex flex-col">
        <div
          className="text-3xl md:text-7xl  flex gap-3 justify-center items-center
          mx-auto text-gray-200 p-2 md:p-5  "
        >
          <span>Crypto's</span>
          <CiBitcoin />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className=" flex  justify-center items-center ">
            <div className="overflow-x-scroll w-full">
              <table className="w-full divide-y divide-gray-200 bg-gray-900 bg-opacity-30 backdrop-blur text-gray-300">
                <thead>
                  <tr className="">
                    <th className="py-2 px-4">S.No</th>
                    <th className="py-2 px-4">Image</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Market Cap</th>
                    <th className="py-2 px-4">Market Cap Change (24h)</th>
                  </tr>
                </thead>
                <tbody>
                  {allCoins?.map((coin, index) => (
                    <tr className=" hover:bg-gray-500 hover:scale-105 transition-all ease-in-out text-center">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px]">
                        <img src={coin.image} />
                      </td>
                      <td className="py-2 px-4">{coin.name}</td>
                      <td className="py-2 px-4">
                        ${coin.current_price.toLocaleString()}
                      </td>
                      <td className="py-2 px-4">
                        $
                        {coin.market_cap.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                          notation: "compact",
                          compactDisplay: "short",
                        })}
                      </td>
                      <td className="py-2 px-4">
                        {coin.market_cap_change_24h.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                          notation: "compact",
                          compactDisplay: "short",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
