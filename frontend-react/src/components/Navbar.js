import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  return(

  <div className="Navbar">

    <div className="ButtonLeft">

      <div className="Button">
        <Link to="./exerciseTracker">
          <button class="mainbutton">Exercise Tracker</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./exerciseList">
          <button class="button">Exercises</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./AddExercise">
          <button class="button"> Create Exercise Log</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./AddUser">
          <button class="button"> Create User</button>
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