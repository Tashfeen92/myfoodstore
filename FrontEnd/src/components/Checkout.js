import React from "react";
import { LoginContext } from "../Context.js/LoginContext";

export default function Checkout() {
    const { cartData, setCartData } = React.useContext(LoginContext)
    const items = cartData.map(item => {
        return (
            <div className="checkout--card">
                <p>{item.head}</p>
                <p>{item.quantity}</p>
                <p>{item.price * item.quantity}</p>
            </div>
        )
    })
    function subtotal() {
        let sum = 0;
        for (let i = 0; i < cartData.length; i++) {
            sum = sum + (cartData[i].price * cartData[i].quantity)
        }
        return sum
    }

    return (
        <div>
            <div className="Cart">
                <h2 className="CartHead">Your Cart</h2>
                <hr />
                <p>{items}</p>
                <hr />
                <p className="CartDisc"></p>
                <span className="Cartstp">{cartData.length > 0 ? subtotal() : "0"}</span>
                <p className="Cartst">Subtotal</p>
                <span className="Cartdf">Rs. 99</span>
                <p className="Cartd">Delivery Fee</p>
                <span className="Carttp">{cartData.length > 0 ? subtotal() + 99 : "0"}</span>
                <p className="Cartt">
                    Total<span className="tSpan">(incl. GST)</span>
                </p>
                <button className="checkBtn">Go to Checkout</button>
            </div>
        </div>
    )
}