import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const CryptoCard = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.id}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
        setLoading(false)
    }
  }

  function limitText() {
    const words = data?.description.en;
    const charLength = words?.split(" ");
    if (charLength?.length > 150) {
      setText(words.slice(0, 150) + "...");
    } else {
      setText(words);
    }
    console.log(text);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    limitText();
  }, [data]);
  // console.log(data?.description)
  return (
    <div
      className="absolute container mx-auto p-5 
     bg-gray-700 bg-opacity-40 backdrop-blur h-full w-full flex
      justify-center items-center z-10 overflow-hidden text-gray-300"
    >
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="w-[500px] h-[500px] bg-gray-900 rounded-3xl relative p-10 flex gap-5">
          <Link to="/" className="absolute top-5 right-10 text-3xl text-white">
            <IoMdClose />
          </Link>
          <img src={data?.image.large} className="w-[100px] h-[100px]" />
          <p className="">{text}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
