//import RegisterForm from "../components/RegisterForm";
import React from 'react';
import './Pages.css';
import LoginForm from '../components/LoginForm.js'

function Login(){
    return(
        <div className="Container">
            <div className="RegisterForm">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login