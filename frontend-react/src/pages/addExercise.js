import React from 'react';
import axios from 'axios';
import './Pages.css';
import Navbar from "../components/Navbar";

function Exercise(){
  return(
    <div className="container">
      <Navbar/>
      <h1>Create New Exercise Log</h1>
      <form onSubmit=(this.onSubmit)>
        <div className="form-group">
          <label>Firsname: </label>
          <select ref="useInput"

        </div>
    </div>
  )
}

//is broken cuz too tyred to continue :'<

export default Exercise;