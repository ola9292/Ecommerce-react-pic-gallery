import React, { useContext} from "react"
import { Context } from "../Context"
import { Link } from 'react-router-dom'
function Header() {

    const {  cartItems } = useContext(Context)
    return (
        <header>
            <Link to="/"><h2>Pix Gallery</h2></Link>
           <Link to="/cart"><i className={cartItems.length >0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i></Link> 
        </header>
    )
}

export default Header
