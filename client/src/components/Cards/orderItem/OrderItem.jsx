import React, { useState } from 'react'
import './OrderItem.scss'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderItem = (props) => {
  console.log(props)
  const location = useLocation();
  const [price, setPrice] = useState(1250)
  const [shippingFee, setShippingFee] = useState(250)
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotal] = useState(shippingFee+price)

  const changeQty = (type) =>{
      if(type === "i"){
          setQty(qty+1)
          setTotal(shippingFee + (price*(qty+1)))
      } else if(type === "d" && qty >1){
          setQty (qty-1);
          setTotal(shippingFee + (price*(qty-1)))
      }
  }
  return (
    <div className="itemContianer">
        {props.isMyOrder && <div className="select">
          <input type="checkbox" />
        </div>}
        <div className="orderitemImg">
          <img src="https://static-01.daraz.lk/p/c0d61a43f884c905309646e6da64485b.jpg" alt="" />
        </div>
        <div className="itemorderDetails">
          <div className="priceQty">
            <h1 className="cardname">Shoes</h1>
            {props.isMyOrder &&<div className="delete">
              <FontAwesomeIcon icon={faHeart} className='favIcon'/>
              <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
            </div>}
          </div>
          <div className="desc">descrption goes here</div>
          <div className="priceQty">
            <div className="quantity">
              <div className="qtyFilter">
                <div className="decrease qtyChange" onClick={()=>changeQty("d")}>-</div>
                <input type="number" min={0} disabled value={qty} className='number'/>
                <div className="increase qtyChange" onClick={()=>changeQty("i")}>+</div>
              </div>
            </div>
              <h1 className="cardprice">Rs. 1200</h1>
          </div>
        </div>
    </div>
  )
}

export default OrderItem