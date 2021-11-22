import React from 'react'
import {Link} from 'react-router-dom'
import './Components.css'

function LoginForm(){
    return(
        <div className="OuterContainer">

            <form className="InnerContainer">
            <div className="TitleBackround">
                <h1 className="titel">Login</h1>
            </div>

            <div className="Input">
                <input
                    type="text"
                    placeholder="Username"
                ></input>
            </div>

            <div className="Input">
                <input
                    type="password"
                    placeholder="Password"
                ></input>
            </div>


            <div className="Login">
                <button classname="login">Login</button>
            </div>

            <div className="ToRegister">
                <Link to="./register">
                    <button classname="ToRegister">Dont have an account?</button>
                </Link>
            </div>

            </form>
        </div>
    
    )
}
export default LoginForm