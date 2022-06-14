import React from "react";
import './PrescriptionStyles.css';
import Logo from '../assets/logo.png';
import { useLocation } from "react-router-dom";

const Prescription = (props) => {
  const location = useLocation();
  const data = location.state
  return (
    <div className="main"> 
      <div className="prescContainer">
        <div className="topSection">
          <h1>Name Of The Hospital</h1>
          <h2>Dr. John Killer<span> M.B.B.S, M.S.(Ortho)</span></h2>
          <p>7551 Victoria123 Street, South Statue 204</p>
          <p>Hometown, US 1234</p>
          <p>PH : (207) 808 1234 5678</p>
          <p>FAX : (207) 808 5678 1234</p>
          
        </div>
        <div className="line"></div>

        <div className="midSection">
          <p>S.No. : </p>
          <div className="detailSec">
            <p>Patient Name : <span className="data">{data.name}</span></p>
            
            <p>Age : <span className="data">{data.age}</span></p>
            
            <p>Gender : <span className="data">{data.gender}</span></p>
            
          </div>
          <div className="detailSec">
            <p>Address : <span className="data">{data.address}</span></p>
            
            <p>Date : <span className="data">{data.date}</span></p>
            
          </div>
        </div>

        <div className="bottomSection">
          <img src={Logo} alt='logo' />
          <div className="notesSection">
            <p>{data.notes}</p>
            <br></br><br></br>
            <p>{data.details}</p>
          </div>
          <div className="sign"><p>Doctor's Signature : <span className="data">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></div>
        </div>
        <div className="line"></div>
        <p className="end">www.hospilalmail@gmail.com</p>
      </div>
    </div>
  );
};

export default Prescription;
