import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

const Cryptocurrencies = () => {
  const [loading, setLoading] = useState(false);
  const [allCoins, setAllCoins] = useState();

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`
        https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en\
        `);
      // console.log(res.data);
      setAllCoins(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className=" flex  justify-center items-center ">
          <div className="overflow-x-scroll w-full">
          <h1 className="p-2 text-center md:text-left text-white md:text-6xl text-xl font-Anton">Cryptocurrencies :</h1>

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
  );
};

export default Cryptocurrencies;
