import RegisterForm from "../components/RegisterForm";
import React from 'react';
import './Pages.css'

function Login(){
    return(
        <div className="container">
            <div className="registerForm">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login