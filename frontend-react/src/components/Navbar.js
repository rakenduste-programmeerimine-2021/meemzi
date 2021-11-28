import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){

  <div className="Navbar">

    //Add Post?

    <div className="ToHot">
      <Link to="./Hot">
        <img className="logo" scr="/hot.png" alt=""/>
      </Link>
    </div>

    <div className="ToTrending">
      <Link to="./Trending"></Link>
      <img className="logo" scr="/trending.png" alt=""/>
    </div>

    <div className="ToNew">
      <Link to="./New"></Link>
      <img className="logo" scr="/new.png" alt=""/>
    </div>

    <div className="ToUser">
      <Link to="./User"></Link>
      <img className="logo" scr="/user.png" alt=""/>
    </div>

    //V2lja logimine???

  </div>
}

export default Navbar;