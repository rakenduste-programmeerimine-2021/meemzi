import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  return(

  <div className="Navbar">
    <div className="NavbarLeft">

      <div className="ToAddMeme">
        <Link to="./AddMeme">
          <img className="logo" src="/addMeme.png" alt="Hot"/>
        </Link>
      </div>

    </div>

    <div className="ToHot">
      <Link to="./Hot">
        <img className="logo" src="/hot.png" alt="Hot"/>
      </Link>
    </div>

    <div className="ToTrending">
      <Link to="./Trending">
      <img className="logo" src="/trending.png" alt="Trending"/>
      </Link>
    </div>

    <div className="ToNew">
      <Link to="./New">
      <img className="logo" src="/new.png" alt="New"/>
      </Link>
    </div>


    <div className="NavbarRight">

      <div className="ToUser">
        <Link to="./User">
        <img className="user" src="/user.png" alt="User"/>
        </Link>
      </div>

    </div>

  </div>
  )
}

export default Navbar;

//why it no work :d
//Is cuz i wrote scr and not src :D. Damn VSC did not even point it out and i did not think to look there for a mistake
