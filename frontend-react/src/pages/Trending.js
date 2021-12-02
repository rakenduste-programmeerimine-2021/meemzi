import React from 'react';
//import {Link} from 'react-router-dom';
import './Pages.css';
import Navbar from "../components/Navbar";

function Trending(){
  return(
    <div className="container">
      <Navbar/>
      <h1>Siia tulevad trending memed, loodetavasti, :D</h1>
    </div>
  )
}

export default Trending;