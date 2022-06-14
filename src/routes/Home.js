import React from "react";
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="middleSection">
        <h1>Making healthcare accessible using</h1>
        <h2>AI powered solutions</h2>
        <Link to={'/form'} className='button'>Prescription Form</Link>
      </div>
    </div>
  );
};

export default Home;
