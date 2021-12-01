import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Components.css';
import {useState} from 'react';
//import axios from 'axios';

function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    
    


    const handleSubmit = async(value)=>{
        value.preventDefault()

        const user ={
            email: email,
            password: password,
        }

        await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(user/*{email, password}*/)
            //body: JSON.stringify({email, password})
        }).then((res) =>{
            if(res.ok)
            setRedirect(true)
                alert("User sign-in successful!")
        }).catch((e) => {
            console.error(e)
            alert("Something went wrong")
        })
    }

    if (redirect) /*return redirectTO();*/{
        return <Redirect to="/hot" />
    }
        /*try{
            axios.post('http://localhost:8081/api/auth/signup', user)
            .then(res =>{
                console.log(res)
                //console.log(res,data)
                if(res.ok){
                    setRedirect(true)
                    console.log("Login successful")
                    alert("Login succsessfull")
                }
            }).catch(e=>{
                console.log(e)
                alert("Sth went wrong")
            })
        }catch(e){
            console.log(e)
            alert("Sth went wrong")
        }
    }
    https://stackoverflow.com/questions/57515082/react-hook-redirect-on-component-mount*/


    return(
        <div className="OuterContainer">

            <form className="InnerContainer" onSubmit={handleSubmit}>
            <div className="TitleBackround">
                <h1 className="titel">Login</h1>
            </div>

            <div className="Input">
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
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

export default LoginForm;