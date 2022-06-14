import React from "react";
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import Logo from "../assets/main.png";

import Form from "./Form";
import Navbar from "./Navbar";
// rgba(191,219,254,var(--tw-bg-opacity));
const Home = () => {
  // const [counter, setCounter] = useState(false);
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="middleSection">
        <h1>Making healthcare accessible using</h1>
        <h2>AI powered solutions</h2>
        <Link to={'/form'} className='button'>Prescription Form</Link>
        {/* <button>Prescription Form</button> */}
      </div>
    </div>
  );
};

export default Home;
