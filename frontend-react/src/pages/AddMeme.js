import React from 'react';
import Navbar from "../components/Navbar"

function AddMeme(){
  return(
    <div className="container">
      <Navbar/>
      <input type="text" placeholder="Meme Titel"></input>
      <br></br>
      <button></button>
    </div>
  )
}


export default AddMeme;