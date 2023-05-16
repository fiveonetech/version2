import React from 'react'
import './OrderConfimation.scss'
import Categories from '../../components/categories/Categories'
import Searchbar from '../../components/searchbar/Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import OrderItem from '../../components/Cards/orderItem/OrderItem'
import Summary from '../../components/Cards/summary/Summary'

const OrderConfimation = () => {
  return (
    <div className="mainContainer">
        <div className="topWrapper">
            <div className="category">
                <Categories isSmall={true}/>
            </div>
            <div className="searchbar">
                <Searchbar/>
            </div>
        </div>
        <div className="orderconfirmation-wrapper">
            <div className="details">
                <div className="delivery-details">
                    <div className="heading">
                        <div className="name">Delivery</div>
                        <hr className='headingHr'/>
                    </div>
                    <div className="detail">
                        <div className="label">To : </div>
                        <input type="text" />
                    </div>
                    <div className="detail">
                        <div className="label">Address : </div>
                        <input type="text" />
                    </div>
                    <div className="detail">
                        <div className="label">Contact Number : </div>
                        <input type="number" maxLength={10}/>
                    </div>
                    <div className="detail">
                        <div className="label">email : </div>
                        <input type="email" />
                    </div>
                </div>
                <div className="payment-details">
                    <div className="heading">
                        <div className="name">Payment Option</div>
                        <hr className='headingHr'/>
                    </div>
                    <div className="paymentOptions">
                        <div className="option">
                            <input type="radio" id='payment1' name='payment' className="radio" />
                            <div className="label">Visa</div>
                            {/* <FontAwesomeIcon icon={faVisaCre}/> */}
                            {/* <FontAwesomeIcon icon={solid("cc-visa")} /> */}
                        </div>
                        <div className="option">
                            <input type="radio" id='payment2' name='payment' className="radio" />
                            <div className="label">Master</div>
                        </div>
                        <div className="option">
                            <input type="radio" id='payment3' name='payment' className="radio" />
                            <div className="label">Cash on delivery</div>
                        </div>
                    </div>
                </div>
                <div className="item-details">
                    <OrderItem isMyOrder={false}/>
                </div>
            </div>
            <div className="summary">
                <Summary/>
            </div>
        </div>
    </div>
  )
}

export default OrderConfimation