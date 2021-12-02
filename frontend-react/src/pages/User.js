import React from 'react';
//import {Link} from 'react-router-dom';
import './Pages.css';
import Navbar from "../components/Navbar";

function User(){
  return(
    <div className="container">
      <Navbar/>
      <h1>Siia tuleb kasutaja info, loodetavasti, :D</h1>
    </div>
  )
}

export default User;