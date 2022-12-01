import React, {useContext} from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
function Cart() {
    const {cartItems,order, placeOrder} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    function totalCost(Items){
        let answer = Items.length * 5.99
        return answer.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCost(cartItems)} </p>
            <div className="order-button" >
             {cartItems.length > 0 ?<button onClick={placeOrder}>{order}</button> : "You have no items in cart!"}
            </div>
        </main>
    )
}

export default Cart