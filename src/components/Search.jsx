import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  const [form, setForm] = useState("");
  const [data, setData] = useState();
    const [id,setId] =useState()
  const fetchData = async () => {
    const res =
      await axios.get(`https://api.coingecko.com/api/v3/search?query=${form}
        `);
    setData(res.data);
    console.log(res.data);
    console.log(form);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setForm(newValue);

    // Perform any other actions based on the changed input value here
    console.log("Input value changed:", form);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-10">
      <div className="flex justify-center flex-col gap-5">
      <div className="flex gap-5 justify-center items-center">
        <input
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-[300px] md:w-[500px] bg-gray-700 px-5 py-2 text-2xl 
            text-white rounded-full "
        />
        <button
          className="text-white flex justify-center items-center text-3xl"
          onClick={fetchData}
        >
          <FaSearch />
        </button>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {data?.coins?.length > 0 ? (
            data.coins.map((coin, index) => (
              <Link to={`/list/${coin.id}`}>
              <div className="flex">
                <Card imageUrls={coin.large} name={coin.name} />
              </div>
              </Link>
            ))
          ) : (
            <div className="text-white font-bold text-4xl">
              Nothing here to see
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
