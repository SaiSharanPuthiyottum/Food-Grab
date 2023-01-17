import React from 'react';
import './Checkout.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout(props) {
  const navigate = useNavigate()

  const first_form_State = {
    fname: "",
    street: "",
    phone: "",
    credit: 0
  }

  const [forminfo, setForminfo] = useState(first_form_State)
  const input_on_change_Handler = (e) => {
    setForminfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const on_submit_Handler = (e) => {
    e.preventDefault()
    props.onBuyCheckout(forminfo)
    navigate('/transaction')
  }

  return (

    <div className="checkout_body">
        <div className="checkout_title">
          <h2>Checkout Form</h2>
        </div>
        <div className="d-flex">
          <form action="" method="">
            <label>
              <span className="fname"> Name :  <span className="required">*</span></span>
              <input type="text" name="fname" onChange={input_on_change_Handler} />
            </label>
            
            <label>
              <span>Delivery Address <span className="required">*</span></span>
              <input type="text" name="street" onChange={input_on_change_Handler}  required />
            </label>
            
            
            
            
            <label>
              <span>Phone Number: <span className="required">*</span></span>
              <input type="tel" name="phone" onChange={input_on_change_Handler} />
            </label>
            
          </form>
          <div className="your_order">
            <div>
              <input type="radio" name="dbt" value="dbt" defaultChecked />  UPI Payment
            </div>
            <p>
              
            </p>
            <br />
            <div>
              <input type="radio" name="dbt" value="cd" /> Cash on Delivery
            </div>
            <div>
              <br />
              <input type="radio" name="dbt" value="cd" /> Amazon Pay <span>
                
              </span>
            </div>
            <br />
            <button type="button" className='checkout_button' onClick={on_submit_Handler}>Place Order</button>
          </div>
          <br />
        </div>
    </div>
  );
}

export default Checkout;
