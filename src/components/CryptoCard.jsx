import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const CryptoCard = () => {
  const [data, setData] = useState();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  console.log(params.id);


  
  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.id}`
      );
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div
          className=" text-white min-h-[100vh] w-[1500px] 
     bg-purple-900 bg-opacity-30 backdrop-blur p-5 flex flex-col justify-center items-center"
        >
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col justify-center gap-5 h-full w-full">
              <h1 className="text-7xl flex justify-center items-center">{data?.name}</h1>
              <div className="flex md:flex-row flex-col  h-full ">

                <div className="flex flex-col justify-evenly  w-full items-center  h-full md:w-1/3 ">
                  <img
                    className="w-[200px] h-[200px] "
                    src={data?.image.large}
                  />
                  <h1>
                    <span className="text-3xl">Categories :</span>
                    <div className="overflow-y-scroll">
                      {data?.categories.map((cat, index) => (
                        <h1 className="">{cat}</h1>
                      ))}
                    </div>
                  </h1>
                </div>

                <div className="w-full flex justify-evenly items-center md:w-2/3 overflow-y-scroll">
                  <p className="text-sm md:text-xl p-5">
                    <span className="text-lg md:text-4xl">Description : </span>
                    {data?.description.en}
                  </p>

                  <div className="">

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
