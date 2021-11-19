import react from react;
import {Link} from 'react-router-dom';
import './RegisterForm.css';

function RegisterForm(){
    return(
        <div className="OuterContainer">

            <form className="InnerContainer">
            <div className="titleBackround">
                <h1 className="titel">Register</h1>
            </div>

            <div className="input">
                <input
                    type="text"
                    placeholder="Username"
                ></input>
            </div>

            <div className="input">
                <input
                    type="password"
                    placeholder="Password"
                ></input>
            </div>

            <div className="input">
                <input
                    type="password"
                    placeholder="Confirm Password"
                ></input>
            </div>

            <div className="input">
                <input
                    type="email"
                    placeholder="email"
                ></input>
            </div>
            
            <div className="register">
                <button classname="register">Register</button>
            </div>

            <div className="SubLogin">
                <Link to="./login">
                    <button classname="ToLogin">Already have an account?</button>
                </Link>
            </div>

            </form>
        </div>
        
    )
}
export default RegisterForm