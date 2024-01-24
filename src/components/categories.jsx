import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [allCoins, setAllCoins] = useState();

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`
      https://api.coingecko.com/api/v3/coins/categories
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
        <div className=" flex  justify-center items-center  p-5">
          <div className="overflow-x-scroll w-full">
            <h1 className="p-5 text-center md:text-left text-white md:text-6xl text-xl font-Anton">Categories :</h1>
            <table className="w-full divide-y divide-gray-200 bg-gray-900 bg-opacity-30 backdrop-blur text-gray-300">
              <thead>
                <tr className="">
                  <th className="py-2 px-4">S.No</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Top 3 Gainers</th>
                  <th className="py-2 px-4">Market Cap</th>
                  <th className="py-2 px-4">Market Cap Change (24h)</th>
                  <th className="py-2 px-4">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {allCoins?.map((coin, index) => (
                  <tr className=" hover:bg-gray-500 hover:scale-105 transition-all ease-in-out text-center">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{coin.name != null ? coin.name :" Not Available"}</td>

                    <td className="flex gap-2 md:gap-5">
                      {coin.top_3_coins.map((gainer)=>{
                        return <img className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]" src={gainer != null ? gainer :" Not Available"}></img>
                      })}
                    </td>
  
                    {/* <td className="py-2 px-4">
                      ${coin.current_price.toLocaleString()}
                    </td> */}

                    <td className="py-2 px-4">
                      $
                      {coin.market_cap != null ? coin.market_cap?.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        notation: "compact",
                        compactDisplay: "short",
                      })
                    : "Not Available"
                    }
                    </td>

                    <td className="py-2 px-4">
                      {coin.market_cap_change_24h != null ? coin.market_cap_change_24h?.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        notation: "compact",
                        compactDisplay: "short",
                      })
                      : "Not Available"

                    }
                    </td>

                    <td className="py-2 px-4">
                      {coin.volume_24h !== null ? coin.volume_24h?.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        notation: "compact",
                        compactDisplay: "short",
                      })
                      : "Not Available"
                    }
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

export default Categories;
