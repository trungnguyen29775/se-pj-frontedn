import React, { useState } from 'react'
import { RiAddFill } from "react-icons/ri";
import './payment.css'

export default function Payment() {
    const [selected, setSelected] = useState(0);
    const [show,setShow]=useState(false)
    const handleSelectAddress = () => {

    }
    const deleteAddress = () => {

    }
    const handleUpdateAddress = () => {

    }
    const handlePayment = () => {

    }

    //test address
    const address =[{
        name:"Thanh",
        address: "281 duong 9",
        town:"5",
        city: "Ho Chi Minh",
        state: "state",
        pincode: "pincode",
        mobNo:'0903821515'
    }]
    return (
    <div className='payment'>
        <div className="shipping-details">
            <div className="address">
                <h3>Select Delivery Address</h3>
                <div className="add-sec-area">
                {
                address.length>0?(address.map((address,i)=>(
                  <div onClick={()=>handleSelectAddress(address,i)} className={`og-add ${selected===i&& 'selected'}`} key={address._id}>
                  <p>{address.name}</p>
                  <span>{address.address},{address.town}</span>
                  <span>{address.city},{address.state} -{address.pinCode} </span>
                  <span><b>Mobile No:</b>{address.mobNo}</span>
                  <div className="btns">
                      <button className='btn' onClick={()=>deleteAddress(address._id)}>Remove</button>
                      <button className='btn' onClick={()=>handleUpdateAddress(address)}>Edit</button>
                  </div>
                </div>
                ))
                ):<h3 style={{padding:'20px 0'}}>No Address found! Add one</h3>}
             
                    <div className="add-address" onClick={()=>setShow(true)}>
                        <div className="add">
                            <RiAddFill/>
                            <p>Add Address</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="checkout-area">
                <div className="billing">
                    <h4>PRICE DETAILS</h4>
                    <div className="details">
                        <div className="item">
                            <p>Price</p>
                            <p>cartPice<span>VND</span></p>
                        </div>
                              
                        <div className="item">
                            <p>Delivery Charges</p>
                            <p>deleviryPrice<span>VND</span></p>
                        </div>
                    </div>
                    <div className="total">
                        <h3>Total</h3>
                        <h3>totalPrice<span>VND</span></h3>
                    </div>
                </div>
                <div class="payment-type">
                    <h3>Select Payment type</h3>
                    <div class="payments-opts">
                        <div class="payment-method">
                            <div class="select-opt">
                                <input type="radio" name="payment" id="cod" value="COD" checked=""/>
                                <label for="cod">CASH ON DELIVERY</label>
                            </div>
                            <div class="select-opt">
                                <input type="radio" name="payment" id="paypal" value="paypal"/>
                                <label for="paypal">ZALOPAY</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handlePayment} >PAYMENT</button>
            </div>
        </div>
    </div>
  )
}
