import React from 'react'
import { Link } from "react-router-dom";
import './Payment.css'
export default function TransactionPage(props) {
    const {data}=props;
  return (
    <div className="payment_page">
        <h2><u>Payment Successful!</u></h2>
        <h3> Name : {data.fname}</h3>
        <h3>Address : {data.street}</h3>
        <h3>Mobile Number : {data.phone}</h3><br />
        <h3>Thankyou! for Choosing FoodGrab:)</h3>
        <Link to="/" className="button_2">Continue to FoodGrab!</Link>
    </div>
  )
}
