import React from 'react'
import './Cart.scss'
import Categories from '../../components/categories/Categories'
import Searchbar from '../../components/searchbar/Searchbar'
import Summary from '../../components/Cards/summary/Summary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import OrderItem from '../../components/Cards/orderItem/OrderItem'

const Cart = () => {
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
        <div className="orders-wrapper">
            <div className="details">
                <div className="orderItem-wrapper">
                    <div className="allItems">
                        <input type="checkbox" />
                        <div className="title">All Items</div>
                        <hr className='orderhr'/>
                        <div className="delete">
                            <FontAwesomeIcon icon={faHeart} className='favIcon'/>
                            <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
                        </div>
                    </div>
                </div>
                <div className="orderItem-wrapper">
                    <div className="allItems">
                        <input type="checkbox" />
                        <div className="title">Shop Name</div>
                        <hr className='orderhr'/>
                        <div className="delete">
                            <FontAwesomeIcon icon={faHeart} className='favIcon'/>
                            <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
                        </div>
                    </div>
                    <OrderItem isMyOrder={true}/>
                    <OrderItem isMyOrder={true}/>
                </div>
                <div className="orderItem-wrapper">
                    <div className="allItems">
                        <input type="checkbox" />
                        <div className="title">Shop Name</div>
                        <hr className='orderhr'/>
                        <div className="delete">
                            <FontAwesomeIcon icon={faHeart} className='favIcon'/>
                            <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
                        </div>
                    </div>
                    <OrderItem isMyOrder={true}/>
                    <OrderItem isMyOrder={true}/>
                    <OrderItem isMyOrder={true}/>
                </div>
            </div>
            <div className="summary">
                <Summary/>
            </div>
        </div>
    </div>
  )
}

export default Cart