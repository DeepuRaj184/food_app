import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../../styles/home/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; 
import cartimg from "../../assets/Navimages/cartimage.png"
import accimg from "../../assets/Navimages/accimage.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="container">
                <div className="row pt-2 navrow">
                    <div className="col-6 d-flex">
                        <div className="app-name">
                            <Link to="/home">
                                <p>Food <br />
                                    <span >delivery</span>
                                </p>
                            </Link>
                        </div>
                        <div className="nav-search">
                            <form>
                                <input type="text" placeholder="Search" />
                                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <div className="nav-headers d-flex align-items-center" >
                            <div className={`nav-elements ${showMenu ? 'show-menu' : 'hide-show-menu'}`}>
                                <ul className="nav-list d-flex">
                                    <li><Link>Restaurants</Link></li>
                                    <li><Link>Deals</Link></li>
                                    <div className="nav-line"></div>
                                    <li><Link>My orders</Link></li>
                                </ul>
                            </div>
                            <div className={`nav-cart ${showMenu?'hide-nav-cart':''}`}>
                                <div className="nav-count ">
                                    <p>4</p>
                                </div>
                                <Link><img src={cartimg} alt="cart" style={{ width: '20px', height: '20px',marginTop:-20 }} /></Link>
                            </div>
                            <div className={`nav-acc-pic ${showMenu?'hide-nav-acc-pic':''}`}>
                                <Link to="/account"><img src={accimg} alt="account" style={{height:48,width:48}}/></Link>
                            </div>
                            <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar;
