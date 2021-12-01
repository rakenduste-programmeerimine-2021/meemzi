import RegisterForm from "../components/RegisterForm";
import React from 'react';
import './Pages.css'

function Register(){
    return(
        <div className="Container">
            <div className="RegisterForm">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register;