import React from 'react'
import {link} from 'react-router-dom'
import './Components.css'

function LoginForm(){
  return(
      <div className="OuterContainer">

          <form className="InnerContainer">
          <div className="titleBackround">
              <h1 className="titel">Login</h1>
          </div>

          <div className="input">
              <input
                  type="text"
                  placeholder="Username"
              ></input>
          </div>

          <div className="input">
              <input
                  type="password"
                  placeholder="Password"
              ></input>
          </div>

          
          <div className="login">
              <button classname="login">Login</button>
          </div>

          <div className="SubRegister">
              <Link to="./register">
                  <button classname="ToRegister">Dont have an account?</button>
              </Link>
          </div>

          </form>
      </div>
      
  )
}
export default LoginForm