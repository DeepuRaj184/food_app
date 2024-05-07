import React, { useEffect, useState } from "react";
import res_categories from "../data/restaurant_details"; 
import { createContext } from "react";

// Creating a Context for managing food-related data
export const foodContext = createContext();

// Component to provide food Context to its children.,
export const Myfood = ({ children }) => {
    // State to store restaurant food data
    const [resFood, setResFood] = useState([]);

    // Effect to initialize resturant food data when the component mounts
    useEffect(() => {
        // Check if restaurant data exists and is not empty
        if (res_categories && res_categories.length > 0) {
            // Set the restaurant food data
            setResFood(res_categories);
        }
    }, []);

    // Function to update filtered food based on category
    const updateFilteredFood = (category) => {
        // Filter the restaurant data based on the category
        const filtered = res_categories.filter((item) => item.category === category);
        // Update the restaurant food data with the filtered results
        setResFood(filtered);
    };

    // Provide the Restaurant food data and update function to its children Components through the context
    return (
        <foodContext.Provider value={{ resFood, updateFilteredFood }}>
            {children}
        </foodContext.Provider>
    );
};
