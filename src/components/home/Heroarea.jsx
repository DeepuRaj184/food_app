import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import heroimg1 from "../../assets/heroimages/heroimg1.svg"
import heroimg2 from "../../assets/heroimages/heroimg2.svg"
import "../../styles/home/Hero.css"
const Heroarea = ()=>{
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="col-6 col-md-6 col-xs-12 col-sm-12 area1 m-0 p-0">
                    <div className="area1-img ">
                        <img src={heroimg1}/>
                        <div className="hero-description">
                            <p className="food-category">All deserts</p>
                            <p className="food-offer1">20% OFF</p>
                            <p className="food-nickname">Deserty</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-xs-12 col-sm-12 area2 m-0 p-0">
                    <div  className="area2-img">
                        <img src={heroimg2} />
                        <div className="hero-description">
                            <p className="food-category">Big Burgers</p>
                            <p className="food-offer2">50% OFF</p>
                            <p className="food-nickname">Fooddies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Heroarea