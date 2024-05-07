import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/reviews/Reviews.css";
import filled from "../../assets/reviews/filledstars.svg"
import empty from "../../assets/reviews/emptystars.svg";
import cust1 from "../../assets/reviews/custimg1.svg";
import like from "../../assets/reviews/custlike.svg";
import dislike from "../../assets/reviews/custdislike.svg";
import cust2 from "../../assets/reviews/custimg2.svg";
import food from "../../assets/reviews/foodDisplay.svg"
import add from "../../assets/reviews/add.svg";
import verticalfood from "../../assets/reviews/verticalfood.svg";


const Reviews = ()=>{
    return(
        <>
        <div className="container mb-5" style={{backgroundColor:'#697BFF'}} >
            <div className="row review-hero">
                <div className="col-lg-6">
                    <div className="review-area">
                        <div className="d-flex justify-content-between">
                            <div className="rating">
                                <p>Overall rating</p>
                                <div className="rating-particulars d-flex">
                                    <p className="rating-number">4.2</p>
                                    <div className="stars" style={{marginTop:-6}}>
                                        <span><img src={filled} /></span>
                                        <span><img src={filled} /></span>
                                        <span><img src={filled} /></span>
                                        <span><img src={filled} /></span>
                                        <span><img src={empty} /></span>
                                    </div>
                                    <div className="votes">
                                        <p>3 votes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-review">
                                <button>Leave a Review</button>
                            </div>
                        </div>
                        <div className="sort">
                            <form>
                            <div className="review-sort">
                                <div className="review-sort-box">
                                    <label for="reviews" className="custom-label">Sort By:</label>
                                    <select name="reviews" id="reviews" class="custom-dropdown">
                                        <option value="Newest">Newest First</option>
                                        <option value="Oldest">Oldest First</option>
                                        <option value="Most-rated">Most Rated</option>
                                    </select>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/*Reviews Section */}
                        <div className="customer-review">
                            <div className="customer-details d-flex" style={{marginTop:10}}>
                                <div className="customer-img">
                                    <img src={cust1} style={{height:50,width:50}}/>
                                </div>
                                <div className="customer-name" style={{marginLeft:10}}>
                                    <p>Savannah Miles</p>
                                    <div className="customer-stars d-flex" >
                                        <div>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                        </div>
                                        <div className="customer-date">
                                            <p>10 days ago</p>
                                        </div>
                                    </div>
                                    <div className="review-text">
                                        <p>
                                        Lorem ipsum dolor sit amet, adhuc nulla
                                         definiebas mei ad, ei doming aperiam delicata est.
                                        </p>
                                    </div>
                                    <div className="customer-like-dislike d-flex gap-4">
                                        <div className="customer-like ">
                                            <img src={like}/> <span style={{marginLeft:4}}>14</span>
                                        </div>
                                        <div className="customer-dislike">
                                            <img src={dislike}/> <span style={{marginLeft:4}}>4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="customer-review">
                            <div className="customer-details d-flex" style={{marginTop:10}}>
                                <div className="customer-img">
                                    <img src={cust2} style={{height:50,width:50}}/>
                                </div>
                                <div className="customer-name" style={{marginLeft:10}}>
                                    <p>Jacob Jones</p>
                                    <div className="customer-stars d-flex" >
                                        <div>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={filled} /></span>
                                            <span><img src={empty} /></span>
                                        </div>
                                        <div className="customer-date">
                                            <p>1 days ago</p>
                                        </div>
                                    </div>
                                    <div className="review-text">
                                        <p>
                                        Lorem ipsum dolor sit amet, adhuc nulla
                                         definiebas mei ad, ei doming aperiam delicata est.
                                        </p>
                                    </div>
                                    <div className="customer-like-dislike d-flex gap-4">
                                        <div className="customer-like ">
                                            <img src={like}/> <span style={{marginLeft:4}}>14</span>
                                        </div>
                                        <div className="customer-dislike">
                                            <img src={dislike}/> <span style={{marginLeft:4}}>4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                    <div className="food-display">
                        <img src={food}/>
                        <div className="food-name">
                            <p>Roll Set</p>
                        </div>
                        <p className="food-discription">
                        Ea his sensibus eleifend, mollis iudicabit 
                        omittantur id mel. Et cum ignota euismod 
                        corpora, et saepe.
                        </p>
                        <div className="d-flex justify-content-between food-cost">
                            <p>$ 22.56</p>
                            <div className="food-add text-center">
                                <button><img src={add}/></button> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Vertical Review section */}
            <div className="row food-cart-box">
                <div className="col-lg-8 col-xs-12 food-cart">
                    <div className="vertical-review d-flex">
                        <div className="vertical-img">
                            <img src={verticalfood} alt="vertical image"/>
                        </div>
                        <div className="vertical-discription">
                            <div className="vertical-title">
                                <p>Nigiri Set</p>
                            </div>
                            <div className="d-flex gap-5">
                                <div className="vertical-text">
                                    <p>Ea his sensibus eleifend,mollis iudicabit omittantur id mel.
                                         Et cum ignota euismod corpora, et saepe.</p>
                                </div>
                                <div className="vertical-count d-flex gap-2">
                                    <span><button>-</button></span>
                                    <p><strong>1</strong></p>
                                    <span><button><strong>+</strong></button></span>
                                </div>
                            </div>
                            <div className="d-flex gap-5">
                                <div className="vertical-cost">
                                    <p>$ 17.55</p>
                                </div>
                                <div className="vertical-btn d-flex ">
                                    <button>+ Add To cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/*Carousel description */}

                <div className="row mt-5">
                    <div className="carousel-title">
                        <p>Leave reviews for all meals</p>
                    </div>
                    <div className="carousel-description">
                        <p>Lorem ipsum dolor sit amet, magna scaevola his ei. 
                            Cum te paulo probatus <br /> molestiae, eirmod assentior
                             eum ne, et omnis antiopam mel.</p>
                    </div>
                </div>

                <div className="carousel-btns d-flex justify-content-center gap-3 mt-3 pb-5">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </>
    )
}


export default Reviews