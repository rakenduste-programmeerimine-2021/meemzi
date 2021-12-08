import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  return(

  <div className="Navbar">

    <div className="ButtonLeft">

      <div className="Button">
        <Link to="./AddExercise">
          <button class="mainbutton">Exercise Tracker</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./Exercises">
          <button class="button">Exercises</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./ExerciseLog">
          <button class="button">ExerciseLog</button>
        </Link>
      </div>

      <div className="Button">
        <Link to="./User">
          <button class="button">User</button>
        </Link>
      </div>

    </div>

    <div className="NavbarRight">

      <div className="Logout">
        <Link to="./Login">
          <button class="button">Logout</button>
        </Link>
      </div>

    </div>

  </div>
  )
}

export default Navbar;