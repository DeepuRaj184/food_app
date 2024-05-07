import pizza from "../assets/heroimages/itemimages/pizza.svg"
import burger from "../assets/heroimages/itemimages/burger.svg"
import desserts from "../assets/heroimages/itemimages/desserts.svg"
import sushi from "../assets/heroimages/itemimages/sushi.svg"
import bbq from "../assets/heroimages/itemimages/bbq.svg"
import vegan from "../assets/heroimages/itemimages/vegan.svg"

import res1 from "../assets/Restaurants/sushi.svg";
import res2 from "../assets/Restaurants/Burger_pizza.svg";
import res3 from "../assets/Restaurants/ninjas_sushi.svg";




const res_categories = [
    {
        name:"Royal Sushi house",
        time:"30-40",
        cost:"32",
        image:res1,
        featured:true,
        category:"sushi",
        res_special:[
            {
                img:pizza,
                special_item:"Pizza"
            }
        ]
    },
    {
        name:"Burgers & Pizza",
        time:"40-60",
        cost:"24",
        image:res2,
        featured:true,
        category:"pizza",
        res_special:[
            {
                img:pizza,
                special_item:"Pizza"
            },
            {
                img:burger,
                special_item:"Burger"
            }
        ]
    },
    {
        name:"Ninjas Sushi",
        time:"20-40",
        cost:"40",
        image:res3,
        category:"sushi",
        res_special:[
            {
                img:sushi,
                special_item:"Sushi"
            }
        ]
    },
    {
        name:"Dessert Cafe",
        time:"10-15",
        cost:"30",
        image:res1,
        category:"desserts",
        res_special:[
            {
                img:desserts,
                special_item:"Desserts"
            }
        ]
    },
    {
        name:"Vegan Adda",
        time:"20-25",
        cost:"10",
        image:res2,
        category:"vegan",
        res_special:[
            {
                img:vegan,
                special_item:"Vegan"
            },
            {
                img:desserts,
                special_item:"Desserts"
            }
        ]
    },
    {
        name:"Absolute BBQ",
        time:"50-70",
        cost:"59",
        image:res3,
        featured:true,
        category:"bbq",
        res_special:[
            {
                img:bbq,
                special_item:"BBQ"
            }
        ]
    },
    {
        name:"Diet Cafe & BBQ",
        time:"40-60",
        cost:"54",
        image:res1,
        featured:true,
        category:"bbq",
        res_special:[
            {
                img:bbq,
                special_item:"BBQ"
            },
            {
                img:vegan,
                special_item:"Vegan"
            }
        ]
    },
    {
        name:"Crunchy Snacks",
        time:"80-90",
        cost:"72",
        image:res2,
        category:"burger",
        res_special:[
            {
                img:burger,
                special_item:"Burger"
            },
            {
                img:desserts,
                special_item:"Desserts"
            }
        ]
    },
    {
        name:"Mc Donald's",
        time:"20-25",
        cost:"9",
        image:res3,
        category:"pizza",
        res_special:[
            {
                img:burger,
                special_item:"Pizza"
            }
        ]
    },
    {
        name:"Oven Story",
        time:"40-60",
        cost:"31",
        image:res1,
        category:"pizza",
        res_special:[
            {
                img:pizza,
                special_item:"Pizza"
            }
        ]
    },
    {
        name:"Sushi Rolls",
        time:"15-20",
        cost:"25",
        image:res2,
        featured:true,
        category:"sushi",
        res_special:[
            {
                img:sushi,
                special_item:"Sushi"
            },
            {
                img:burger,
                special_item:"Burger"
            }
        ]
    },
    {
        name:"Bengaluru BBQ",
        time:"45-50",
        cost:"50",
        image:res3,
        category:"bbq",
        res_special:[
            {
                img:bbq,
                special_item:"BBQ"
            },
            {
                img:sushi,
                special_item:"Sushi"
            }
        ]
    },

]

export default res_categories