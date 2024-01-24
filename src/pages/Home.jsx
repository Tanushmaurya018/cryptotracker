import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "swiper/css/bundle";
import { IoIosTrendingUp } from "react-icons/io";
import { CiBitcoin } from "react-icons/ci";

import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import CryptoCard from "../components/CryptoCard";
import Hero from "../components/Hero";
import Search from "../components/Search";


const Home = () => {
  const [trendingCrypto, setTrendingCrypto] = useState();
  const [allCoins, setAllCoins] = useState();
  const [open, setOpen] = useState(false);
  function changeOpen() {
    setOpen(!open);
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

  const [click, setClick] = useState(false);

  const clicked = () => {
    setClick(!click);
  };

  useEffect(() => {
    fetchCoinData();
    fetchTrendingData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen h-full w-full">

      <Hero />

      <Search />

      <div id="#trending" className=" flex flex-col">
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
              <Link to={`/list/${coin.item.id}`}>
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

      <div id="#allcoin" className=" flex flex-col">
        <div
          className="w-full text-sm md:text-2xl flex gap-3 justify-center items-center
           text-gray-200 p-2 md:p-5  "
        >
          <div className="w-full justify-center flex gap-5 rounded-3xl bg-gray-500 bg-opacity-30 backdrop-blur p-5">
            <Link
              onClick={clicked}
              className={
                click ? "bg-white text-black" : "bg-transparent text-white"
              }
              to="/cryptocurrencies"
            >
              Cryptocurrencies
            </Link>
            <Link
              onClick={clicked}
              className={
                click ? "bg-white text-black" : "bg-transparent text-white"
              }
              to="/categories"
            >
              Categories
            </Link>
            <Link
              onClick={clicked}
              className={
                click ? "bg-white text-black" : "bg-transparent text-white"
              }
              to="/nfts"
            >
              NFT's
            </Link>

          </div>
          {/* <span>Crypto's</span> */}
          <CiBitcoin className="hidden md:flex" />
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

                    <tr className=" hover:bg-gray-500 hover:scale-105 transition-all 
                    ease-in-out text-center">

                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px]">
                        <img src={coin.image} />
                      </td>
                      <Link to={`/list/${coin.id}`}><td className="py-2 px-4">{coin.name}</td></Link>
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
