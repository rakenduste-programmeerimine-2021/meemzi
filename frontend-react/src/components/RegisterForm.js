import React from 'react';
import {Link} from 'react-router-dom';
import './Components.css';

function RegisterForm(){
    return(
        <body>
        <div className="OuterContainer">

            <form className="InnerContainer">
            <div className="TitleBackround">
                <h1 className="Titel">Register</h1>
            </div>

            <div className="Input">
                <input
                    type="Text"
                    placeholder="Username"
                ></input>
            </div>

            <div className="Input">
                <input
                    type="password"
                    placeholder="Password"
                ></input>
            </div>

            <div className="Input">
                <input
                    type="password"
                    placeholder="Confirm Password"
                ></input>
            </div>

            <div className="Input">
                <input
                    type="email"
                    placeholder="email"
                ></input>
            </div>
            
            <div className="Register">
                <button classname="register">Register</button>
            </div>

            <div className="ToLogin">
                <Link to="./login">
                    <button classname="ToLogin">Already have an account?</button>
                </Link>
            </div>

            </form>
        </div>
        </body>
        
    )
}
export default RegisterForm