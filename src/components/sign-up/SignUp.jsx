import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/loginstyles/Login.css"
import { Link,useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase";

const Signup = ()=>{

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handelSubmit= async(e)=>{
        setLoading(true);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await createUserWithEmailAndPassword(auth,email,password);
            navigate('/home')
        }
        catch(err){
            setErr(true)
        }
        finally{
            setLoading(false)
        }
    }
    return(
        <>
                <div className="particulars">
                    <div className="row">
                            <div className="app-name">
                                <p>Food <br />
                                <span >delivery</span>
                                </p>
                            </div>
                    </div>
                    <div className="row pt-5">
                            <div className="login-form">
                                <div className="login-name">
                                    <p>Sign-Up</p>
                                </div>
                                <div className="login-discription">
                                    <p>Create an account by providing your information 
                                        <br /> for the first time.</p>
                                </div>
                                <div className="login-form-particulars">
                                    <form onSubmit={handelSubmit}>
                                        <div className="login-labels pt-1">
                                            <label className="login-label">Email</label>
                                            <br />
                                            <input type="email" placeholder="register@example.com" className="login-input" required/>
                                        </div>
                                        <div className="pt-3">
                                            <label className="login-label">Password</label>
                                            <br />
                                            <input type="password" placeholder="min. 8 characters for registration" minLength="8" className="login-input" required/>
                                        </div>
                                        <div className="pt-4 login-btn">
                                            <button type="submit" disabled={loading} style={{cursor:'pointer'}}><p>Register</p></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="text-center">{loading && "Creating User"}</div>
                                <div className="text-center">{err && "Something went wrong"}</div>
                                <div className="login-signup text-center pt-3">
                                    <p>Already have an Account? <span><Link to='/' style={{textDecoration:'none'}}>Sign in</Link></span></p>
                                </div>
                            </div>
                    </div>
                </div>
        </>
    )
}

export default Signup