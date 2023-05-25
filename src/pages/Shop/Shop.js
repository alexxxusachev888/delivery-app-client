import {Home} from "../../components/Home/Home.js";
import { useContext } from "react";
import { CartContext } from "../../utils/CartContext.js";

export const Shop = (props) => {
    const {burgers} = useContext(CartContext);
    
    return(
        <Home burgers={burgers}/>
    )
}