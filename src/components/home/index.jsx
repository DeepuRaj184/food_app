import React from "react";
import Navbar from "./Navbar";
import Heroarea from "./Heroarea";
import Itemarea from "./Itemsarea";
import Restaurants from "./Restaurants";
const Home = ()=>{
    return(
        <>
            <Navbar />
            <Heroarea />
            <Itemarea />
            <Restaurants />
        </>
    )
}

export default Home