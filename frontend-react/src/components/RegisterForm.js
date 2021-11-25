import React from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import {useState} from 'react';
import axios from 'axios';

function RegisterForm(){

    const {userName, setUserName} = useState('')
    const {password, setPassword} = useState('')
    const {email, setEmail} = useState('')
    const handleSubmit = (value)=>{
        value.preventDefault()

        const user ={
            userName: userName,
            password: password,
            email: email
        }

        try{
            axios.post('http://localhost:8081/api/auth/signup', user)
            .then(res =>{
                console.log(res)
                //console.log(res,data)
                if(res.ok){
                    console.log("New account made")
                }
            }).catch(e=>{
                console.log(e)
            })
        }catch(e){
            console.log(e)
        }

        //ikka ei saa aru, miks try kogueage finally expectib.
        //Nvm try ja kui ei t22ta tee hoopis seda :D

    }


    return(
        <body>
        <div className="OuterContainer">

            <form className="InnerContainer" onSubmit={handleSubmit}>
            <div className="TitleBackround">
                <h1 className="Titel">Register</h1>
            </div>

            <div className="Input">
                <input
                    type="Text"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                ></input>
            </div>

            <div className="Input">
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
            </div>

            <div className="Input">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    minLength="6"
                ></input>
            </div>

            <div className="Input">
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    email
                ></input>
            </div>
            
            <div className="Register">
                <button classname="Register">Register</button>
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