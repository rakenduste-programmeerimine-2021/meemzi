import RegisterForm from "../components/RegisterForm";
import React from 'react';
import './Pages.css'

function Register(){
    return(
        <div className="container">
            <div className="registerForm">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register