import React from "react";
import "./Cart_view.css";
import { Link } from "react-router-dom";
import CartItem from "../Items_in_cart/Items_in_cart";

export default function Cart_view(props) {
  const { onEmptyCart, onRemove, onAdd, cartItems } = props;
  var total = 0;
  return (
    <div>
      <div className="navbar">
        <div className="heading">
          <h2>Cart Items </h2>
        </div>
        <button className="empty-btn" onClick={onEmptyCart}>
          Your Cart
        </button>
      </div>
      <div>
        {cartItems.length === 0 && (
          <div className="dishes_cart">
            <center>
              <h3>
                The Cart is Empty :( <br />
                <br/>
                Please add Some Dishes!
              </h3>
            </center>
          </div>
        )}
      </div>
      <div className="CartItems">
        {cartItems.map((item) => (
          <CartItem item={item} onAdd={onAdd} onRemove={onRemove} />
        ))}
        {cartItems.length !== 0 && (
          <div>
            <center>
              <h2>
                <u>Total Amount : </u>
              </h2>
            </center>
          </div>
        )}
        {cartItems.map((item) => (
          <div className="bill">
            {item.qty} x Rs.{item.price.toFixed(2)} = Rs.{item.qty * item.price}
            <div style={{ display: "none" }}>
              {"=>Total="}
              {(total = total + item.qty * item.price)}
            </div>
          </div>
        ))}
        <br />
        {cartItems.length !== 0 && (
          <div>
            <center>
              <u>{"Grand Total"}</u> = {total}
            </center>
            <br />
            <center>
              <Link to="/CheckoutPage" className="buynow_btn2">
                Continue to Checkout
              </Link>
              <br />
            </center>
          </div>
        )}
      </div>
      {cartItems.length !== 0}
    </div>
  );
}
