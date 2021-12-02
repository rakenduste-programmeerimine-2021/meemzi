import React from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import {useState} from 'react';
import axios from 'axios';

function RegisterForm(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = async (value)=>{
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
                if(res){
                    console.log("New account made")
                    alert("New account made")
                }
            }).catch(e=>{
                console.log(e)
                alert("Sth went wrong error: 1")
            })
        }catch(e){
            console.log(e)
            alert("Sth went wrong error: 2")
        }
    }

    //Kuskil on cors Error


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
                />
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
                <button className="Register">Register</button>
            </div>

            <div className="ToLogin">
                <Link to="./login">
                    <button className="ToLogin">Already have an account?</button>
                </Link>
            </div>

            </form>
        </div>
        </body>
        
    )
}
export default RegisterForm;