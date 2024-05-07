import React from "react"; 
import "../../styles/accounts/Accountsstyles.css";
import accounts from "../../assets/accounts/account.svg"
import address from "../../assets/accounts/address.svg"
import payment from "../../assets/accounts/payment.svg"
import security from "../../assets/accounts/security.svg"
import avatar from "../../assets/accounts/avatar.svg"
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccountsArea = () => {
    const navigate = useNavigate();

    const handleSignout=()=>{
        signOut(auth);
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-md-4 col-xs-12 mb-3 mb-md-0">
                        <div className="settings-name">
                            <p>Settings</p>
                        </div>
                        <div className="acc-particulars">
                            <div className="settings-particulars d-flex">
                                <div className="settings-imgs d-flex justify-content-center align-items-center">
                                    <img src={accounts} alt="account"/>
                                </div>
                                <div className="settings-info">
                                    <span className="settings-label">Account</span>
                                    <br />
                                    <span className="settings-detail">Personal Information</span>
                                </div>
                            </div>
                        </div>
                        <div className="acc-particulars">
                            <div className="settings-particulars d-flex">
                                <div className="settings-imgs d-flex justify-content-center align-items-center">
                                    <img src={address} alt="address"/>
                                </div>
                                <div className="settings-info">
                                    <span className="settings-label">Address</span>
                                    <br />
                                    <span className="settings-detail">Shipping addresses</span>
                                </div>
                            </div>
                        </div>
                        <div className="acc-particulars">
                            <div className="settings-particulars d-flex">
                                <div className="settings-imgs d-flex justify-content-center align-items-center">
                                    <img src={payment} alt="payment"/>
                                </div>
                                <div className="settings-info">
                                    <span className="settings-label">Payment method</span>
                                    <br />
                                    <span className="settings-detail">Connected credit cards</span>
                                </div>
                            </div>
                        </div>
                        <div className="acc-particulars">
                            <div className="settings-particulars d-flex">
                                <div className="settings-imgs d-flex justify-content-center align-items-center">
                                    <img src={security} alt="security"/>
                                </div>
                                <div className="settings-info">
                                    <span className="settings-label">Security</span>
                                    <br />
                                    <span className="settings-detail">Password, 2FA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-xs-12">
                        <div className="settings-inner">
                        <div className="settings-name">
                            <p>Account</p>
                        </div>
                        <form>
                            <div className="personal-info" style={{ padding: '20px 15px 25px 15px' }}>
                                <div className="personal-title">
                                    <p>Personal Information</p>
                                </div>
                                <div className="avatar">
                                    Avatar
                                </div>
                                <div className="avatar-img d-flex">
                                    <div className="avatar-pic">
                                        <img src={avatar} alt="avatar"/>
                                    </div>
                                    <div className="d-flex align-items-center"> 
                                        <div className="avatar-change avatar-action">
                                            <p>Change</p>
                                        </div>
                                        <div className="avatar-remove avatar-action">
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-form mt-4">
                                    <div className="personal-acc-details">
                                    <div className="input-group">
                                    <label htmlFor="first-name">First Name</label>
                                    <br />
                                    <input type="text" id="first-name" placeholder="Jane"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="last-name">Last Name</label>
                                    <br />
                                    <input type="text" id="last-name" placeholder="Robertson"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <input type="text" id="email" placeholder="jane.robertson@example.com"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">Phone</label>
                                    <br />
                                    <input type="text" id="phone" placeholder="(217) 555-0113"/>
                                </div>
                                    </div>
                                    <div className="emailarea mt-5 mb-3">
                                        <div className="emailtitle">
                                            <p>Email notifications</p>
                                        </div>
                                        <div className="personal-checkbox">
                                            <div >
                                                <input type="checkbox" id="checkbox1" name="checkbox1" defaultChecked/>
                                                <label htmlFor="checkbox1">New deals</label>
                                            </div>  
                                            <div>
                                                <input type="checkbox" id="checkbox2" name="checkbox2" defaultChecked/>
                                                <label htmlFor="checkbox2">Password changes</label>
                                            </div>  
                                            <div>
                                                <input type="checkbox" id="checkbox3" name="checkbox3" />
                                                <label htmlFor="checkbox3">New restaurants</label>
                                            </div>  
                                            <div>
                                                <input type="checkbox" id="checkbox4" name="checkbox4" defaultChecked/>
                                                <label htmlFor="checkbox4">Special offers</label>
                                            </div>  
                                            <div>
                                                <input type="checkbox" id="checkbox5" name="checkbox5" defaultChecked/>
                                                <label htmlFor="checkbox5">Order statuses</label>
                                            </div>  
                                            <div>
                                                <input type="checkbox" id="checkbox6" name="checkbox6" />
                                                <label htmlFor="checkbox6">Newsletter</label>
                                            </div>                                    
                                        </div>
                                    </div> 
                                    <div className="personal-save pt-4">
                                        <div className="personal-logout">
                                                <button onClick={handleSignout}>Log Out</button>
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-around btn-small">
                                            <button className="personal-discard">Discard Changes</button>
                                            <Link to="/review"><button className="personal-changes">Save Changes</button></Link>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountsArea;
