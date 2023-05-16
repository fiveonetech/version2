import React, { useState } from 'react'
import './DescriptionCard.scss'
import '../../../variables.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const DescriptionCard = () => {
    const navigate = useNavigate()

    const [price, setPrice] = useState(1250)
    const [shippingFee, setShippingFee] = useState(250)
    const [qty, setQty] = useState(1);
    const [totalPrice, setTotal] = useState(price+shippingFee)

    const changeQty = (type) =>{
        if(type === "i"){
            setQty(qty+1)
            setTotal(shippingFee + (price*(qty+1)))
        } else if(type === "d" && qty >1){
            setQty (qty-1);
            setTotal(shippingFee + (price*(qty-1)))
        }
    }

    const orderConfirm = () => {
        navigate("/OrderConfirmation", {state:{price, shippingFee, qty, totalPrice}})
    }

    return (
        <div className="descrption-container">
            <div className="photo-section">
                <div className="mainPhoto">
                    <img src="https://static-01.daraz.lk/p/c0d61a43f884c905309646e6da64485b.jpg" alt="" className="mainIng" />
                </div>
                <div className="subImages">
                    <img src="https://static-01.daraz.lk/p/2698d521522f269a4b2b8dfee371eb03.jpg" alt="sub" className="subImg" />
                    <img src="https://static-01.daraz.lk/p/2698d521522f269a4b2b8dfee371eb03.jpg" alt="sub" className="subImg" />
                    <img src="https://static-01.daraz.lk/p/2698d521522f269a4b2b8dfee371eb03.jpg" alt="sub" className="subImg" />
                </div>
            </div>
            <div className="desc-section">
                <div className="name">Name</div>
                <div className="desc">descrption goes here</div>
                <div className="reviews">
                    <div className="reviews">
                        <span className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        4.9
                    </span>
                    </div>
                    <div className="comments">1 reviews</div>
                    <div className="solds">0 solds</div>
                </div>
                <hr className="descHr"/>
                <div className="costs">
                    <div className="cost">Rs.{price}</div>
                    <div className="originalCost">Rs. 1900</div>
                    <div className="salep">25%</div>
                </div>
                <div className="quantity">
                    <div className="qty">Quantity</div>
                    <div className="qtyFilter">
                        <div className="decrease" onClick={()=>changeQty("d")}>-</div>
                        <input type="number" min={0} disabled value={qty} className='number'/>
                        <div className="increase" onClick={()=>changeQty("i")}>+</div>
                    </div>
                </div>
                <div className="Fee">
                    <div className="feetype">Shipping Fee</div>
                    <div className="price">Rs. {shippingFee}</div>
                </div>
                <div className="Fee">
                    <div className="feetype">Total Price</div>
                    <div className="price total">Rs. {totalPrice}</div>
                </div>
                <div className="buttons">
                    <button className="button btncart">Add to Card</button>
                    <button className="button btnbuy" onClick={orderConfirm}>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard