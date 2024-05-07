import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../../styles/home/homestyles.css";
import res_icons from "../../assets/Restaurants/rest_card_icons/res-icon.svg";
import time_cost from "../../assets/Restaurants/rest_card_icons/time_cost.svg";
import { foodContext } from "../../context/food_context";


const Restaurants = () => {
    const {resFood} = useContext(foodContext);
    return (
        <>
            <div className="container">
                <div className="row pt-4 res-description">
                    <p>Nearby restaurants</p>
                </div>
                <div className="row ">
                    { resFood.map((item,i)=>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={i}>
                        <div className="res-box">
                            <div className="img-box">
                                <img src={item.image} style={{borderTopLeftRadius:'16px',borderTopRightRadius:'16px',width:'100%',height:'auto'}}/>
                                {
                                    item.featured && (<div className="featured">
                                                    <p>FEATURED</p>
                                                </div>)
                                }
                            </div>
                            <div className="res-name d-flex justify-content-between">
                                <p>{item.name}</p>
                                <button><img src={res_icons} style={{height:20,width:20}}/></button>
                            </div>
                            <div className="time-rate d-flex">
                                <img src={time_cost} />
                                <span className="ms-2 time-cost">{item.time} min</span>
                                <span className="res-dot"></span>
                                <span className="ms-2 time-cost">${item.cost} min sum</span>
                            </div>
                            <div className="res-special-container">
                                {item.res_special.map((data, index) => (
                                    <div className="res-special d-flex" key={index}>
                                        <img src={data.img} />
                                        <p>{data.special_item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Restaurants;
