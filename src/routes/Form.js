import React, { useState } from 'react';
import './FormStyles.css';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [data, setData] = useState({
        name : "",
        age : "",
        gender : "",
        address : "",
        date : "",
        notes : "",
        details : ""});
    
        let name, value;
    
        const handleInputs = (e) => {
            name = e.target.name;
            value = e.target.value;
    
            setData({...data, [name]:value})
        }
    
        const navigate = useNavigate()
      const SubmitForm = () => {
        // setCounter(true) 
        navigate('/prescription',{state:data})
      }
    
      // if(counter){
      //   return (
      //       <>
      //       <Prescription data={data} />
      //       </>
      //   )
      // }else{
    
      return (
        <div className='container'>
            <h1>Prescription Form</h1>
          <form>
            <label>Patient Name</label>
            <input type='text' name="name" value={data.name} onChange={handleInputs} />
            <label>Age</label>
            <input type='number' name='age' value={data.age} onChange={handleInputs} />
            <label>Gender</label>
            <input type='text' name='gender' value={data.gender} onChange={handleInputs} />
            <label>Address</label>
            <input type='text' name='address' value={data.address} onChange={handleInputs} />
            <label>Date</label>
            <input type='date' name='date' value={data.date} onChange={handleInputs} />
            <label>Medical Notes</label>
            <textarea rows="6" name='notes' value={data.notes} onChange={handleInputs} placeholder="Type Your Message Here"  />
            <label>Details of Medicine</label>
            <textarea rows="6" name='details' value={data.details} onChange={handleInputs} placeholder="Type Your Message Here"   />
            {/* <Link to={'/prescription'} className='btn' state={data}>Click here</Link> */}
            <button className='btn' onClick={SubmitForm}>Click Here</button>
          </form>
        </div>
      )
}

export default Form;
