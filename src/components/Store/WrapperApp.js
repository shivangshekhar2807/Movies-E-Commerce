import { useReducer } from "react";
import AllContext from "./Store-Context";



function handleReducer(currObj, action) {
    if (action.type == "ADD") {
        const notPresent = currObj.some((item) => item.id === action.payload.id);

        if (!notPresent) {
            return [...currObj, action.payload];
        }
        else {
            const updatedMovies = currObj.map((item) => {
                if (item.id === action.payload.id) {
                    return {...item,quantity:item.quantity + Number(action.payload.quantity)}
                }
                return item;
            })
            return updatedMovies;
        }
    }

    else if (action.type == "DELETE") {

        const updatedMovies = currObj.filter((item) => item.id !== action.payload.id);

        return updatedMovies;
        
    }
    return currObj;
}



function WrapperApp(props) {

    const [showCartItem, dispatchShowCartItem] = useReducer(handleReducer, []);

    
    function AddToCart(obj) {
        dispatchShowCartItem(obj);
    }

    function DeleteFromCart(obj) {
        dispatchShowCartItem(obj);
    } 

    return <AllContext.Provider value={{showCartItem:showCartItem,
        AddToCart:AddToCart,DeleteFromCart:DeleteFromCart,
    }}>{props.children}</AllContext.Provider>

}
export default WrapperApp;