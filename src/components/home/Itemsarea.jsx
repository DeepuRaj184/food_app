import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../../styles/home/homestyles.css"
import desserts from "../../assets/heroimages/itemimages/desserts.svg"
import bbq from "../../assets/heroimages/itemimages/bbq.svg"
import burger from "../../assets/heroimages/itemimages/burger.svg"
import pizza from "../../assets/heroimages/itemimages/pizza.svg"
import sushi from "../../assets/heroimages/itemimages/sushi.svg"
import vegan from "../../assets/heroimages/itemimages/vegan.svg"
import { useContext } from "react";
import { foodContext } from "../../context/food_context";

const FoodItems = [
    {
        image:pizza,
        name:"Pizza",
        category:"pizza"
    },
    {
        image:burger,
        name:"Burger",
        category:'burger'
    },
    {
        image:bbq,
        name:"BBQ",
        category:'bbq'
    },
    {
        image:sushi,
        name:"Sushi",
        category:'sushi'
    },
    {
        image:vegan,
        name:"Vegan",
        category:'vegan'
    },
    {
        image:desserts,
        name:"Desserts",
        category:'desserts'
    }
]
const Itemarea = ()=>{

    const {updateFilteredFood} = useContext(foodContext)

    const handleCategory = (category) => {
        updateFilteredFood(category);
    };
    return(
        <>
            <div className="container">
                <div className="row pt-4">
                    {FoodItems.map((item,i)=>
                    <div className="col-xl-2  small-screen" key={i}>
                        <div className="home-items pt-2" style={{height:80,maxWidth:'100%'}} onClick={()=>handleCategory(item.category)}>
                            <img src={item.image}/>
                            <p className="pt-3 home-food-varieties">{item.name}</p>
                        </div>
                    </div>
                    )}           
                </div>
            </div>
        </>
    )
}

export default Itemarea