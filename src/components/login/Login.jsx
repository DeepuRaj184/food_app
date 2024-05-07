import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/loginstyles/Login.css"
import { Link ,useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Login = ()=>{
    const [err,setErr]= useState(false)
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/home')
        }
        catch(err){
            setErr(true)
        }
    }


    return(
        <>
            <div >
                <div className="particulars">
                    <div className="row">
                            <div className="app-name">
                                <p>Food <br />
                                <span >delivery</span>
                                </p>
                            </div>
                    </div>
                    <div className="row">
                            <div className="login-form">
                                <div className="login-name">
                                    <p>Login</p>
                                </div>
                                <div className="login-discription">
                                    <p>Sign in with your data that you entered during your
                                        <br /> registration.</p>
                                </div>
                                <div className="login-form-particulars">
                                    <form onSubmit={handleSubmit}>
                                        <div className="login-labels pt-1">
                                            <label className="login-label">Email</label>
                                            <br />
                                            <input type="email" placeholder="name@example.com" className="login-input" required/>
                                        </div>
                                        <div className="pt-3">
                                            <label className="login-label">Password</label>
                                            <br />
                                            <input type="password" placeholder="min. 8 characters" minLength="8" className="login-input" required/>
                                        </div>
                                        <div className="pt-3">
                                            <label for="logged-in" className="checkbox-label">
                                                <input type="checkbox" id="logged-in"/>
                                                Keep me logged in
                                            </label>
                                        </div>
                                        <div className="pt-4 login-btn">
                                            <button type="submit"><p>Login</p></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="text-center">{err && "Something went wrong"}</div>
                                <div className="forgot-password text-center pt-4">
                                    <p>Forgot password</p>
                                </div>
                                <div className="login-signup text-center pt-3">
                                    <p>Don't have an account? <span><Link to='/sign-up' style={{textDecoration:'none'}}>Sign up</Link></span></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login