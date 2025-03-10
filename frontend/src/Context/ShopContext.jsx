import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart ={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i] = 0;
    }
    return cart;        }
const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());

        const addToCart = (itemId) =>{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
                console.log(cartItems);
        }
        const removeFromCart = (itemId) =>{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }

        const getTotalCartAmount = () =>{
            let total = 0 ;
            for(const item in cartItems)
            {
                if(cartItems[item]>0)
                {
                    let itemInfo = all_product.find((product)=>product.id===Number(item))
                    total+=itemInfo.new_price * cartItems[item]
                }
                
            }
            return total;
        }

        const getTotalCartItems = () =>{
            let count = 0 ;
            for(const item in cartItems){
                if(cartItems[item] > 0 )
                {
                    count += cartItems[item];
                    }
                    }
                    return count;
        }

        const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

        return(
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}
export default ShopContextProvider;
