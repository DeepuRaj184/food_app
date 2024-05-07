import React, { useEffect, useState } from "react";
import res_categories from "../data/restaurant_details";
import { createContext } from "react";

export const foodContext = createContext();

export const Myfood = ({children})=>{

    const [resFood,setResFood] = useState([]);

    useEffect(()=>{
        if (res_categories && res_categories.length > 0) {
            setResFood(res_categories);
        }
    },[])

    const updateFilteredFood = (category) => {
            const filtered = res_categories.filter((item) => item.category === category);
            setResFood(filtered);
    };

return(
    <foodContext.Provider value={{resFood,updateFilteredFood}}>
        {children}
    </foodContext.Provider>
)
    
}