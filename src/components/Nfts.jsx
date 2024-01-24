import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

const Nfts = () => {
  const [loading, setLoading] = useState(false);
  const [allCoins, setAllCoins] = useState();

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`
      https://api.coingecko.com/api/v3/nfts/list?per_page=50&page=1
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
          <h1 className="p-5 text-center md:text-left text-white md:text-6xl text-xl font-Anton">NFT's :</h1>

            <table className="w-full divide-y divide-gray-200 bg-gray-900 bg-opacity-30 backdrop-blur text-gray-300">
              <thead>
                <tr className="">
                  <th className="py-2 px-4">S.No</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Contract Address</th>
                  <th className="py-2 px-4">Asset Platform Id</th>

                </tr>
              </thead>
              <tbody>
                {allCoins?.map((coin, index) => (
                  <tr className=" hover:bg-gray-500 hover:scale-105 transition-all ease-in-out text-center">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{coin.name != null ? coin.name :" Not Available"}</td>
  
                    {/* <td className="py-2 px-4">
                      ${coin.current_price.toLocaleString()}
                    </td> */}

                    <td className="py-2 px-4">
                      
                      {coin.contract_address != null ? coin.contract_address
                    : "Not Available"
                    }
                    </td>
                    <td className="py-2 px-4">
                      
                      {coin.asset_platform_id != null ? coin.asset_platform_id
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

export default Nfts;
