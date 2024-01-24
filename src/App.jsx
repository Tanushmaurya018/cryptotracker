import React from "react";
import Home from "./pages/Home";
import Currency from "./pages/Currency";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import bgVideo from "./assets/bg-video.mp4";
import CryptoCard from "./components/CryptoCard";
import Cryptocurrencies from "./components/cryptocurrencies";
import Contracts from "./components/Contracts";
import Nfts from "./components/Nfts";
import Categories from "./components/categories";

const App = () => {
  return (
    <div>
      <video
        className="fixed inset-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list/:id" element={<CryptoCard />}></Route>
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/nfts" element={<Nfts />}></Route>
        <Route path="/contracts" element={<Contracts />}></Route>
      </Routes>

      <Footer />

    </div>
  );
};

export default App;
