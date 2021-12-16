import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  return(

  <div className="Navbar">

    <div className="ButtonLeft">

      <div className="Button">
        <Link to="./home">
          <button class="mainbutton">Harjutuste Logia</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./">
          <button class="button">Harjutused</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./AddExercise">
          <button class="button">Loo harjutus</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./AddUser">
          <button class="button">Lisa kasutaja</button>
        </Link>
      </div>

    </div>



  </div>
  )
}

export default Navbar;
/*
<div className="NavbarRight">

<div className="Logout">
  <Link to="./Login">
    <button class="button">Logout</button>
  </Link>
</div>

</div>

*/