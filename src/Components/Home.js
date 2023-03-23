import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Cards from "./Dashboard/Dashboard";
const Home = (props) => {
  return (
    <div className="bg-gray-700">
      <div>
        <Navbar />
        <div className="flex">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
