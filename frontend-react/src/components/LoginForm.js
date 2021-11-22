import React from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import {useState} from 'react';
import axios from 'axios';

function LoginForm(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (value)=>{
        value.preventDefault()

        const user ={
            userName: userName,
            password: password,
        }

        try{
            axios.post('http://localhost:8081/api/auth/signup', user)
            .then(res =>{
                console.log(res)
                //console.log(res,data)
                if(res.ok){
                    console.log("Login successful")
                }
            }).catch(e=>{
                console.log(e)
            })
        }catch(e){
            console.log(e)
        }
    }


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