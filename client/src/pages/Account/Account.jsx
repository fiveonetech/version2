import React, { useState } from 'react'
import './Account.scss'
import Categories from '../../components/categories/Categories'
import Searchbar from '../../components/searchbar/Searchbar'
import SaleCard from '../../components/Cards/saleCard/SaleCard'
import OrderedItem from '../../components/Cards/orderdItem/OrderedItem'

const Account = () => {
  const [sectionType, setSectionType] = useState("myOrders")

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
        <div className="account-wrapper">
            <div className="accountDetails">
                <div className="sectionType">
                <div onClick={()=>setSectionType("myAccount")} className={sectionType=== "myAccount" ? "descType active" : "descType"}>My Account</div>
                <div onClick={()=>setSectionType("myOrders")} className={sectionType=== "myOrders" ? "ReviewType active" : "ReviewType"}>My orders</div>
                </div>
                <div className="sectionContainer">
                {sectionType === "myAccount" ? (
                    <>
                    </>
                ) :(
                    <>
                    <OrderedItem/>
                    <OrderedItem/>
                    <OrderedItem/>
                    <OrderedItem/>
                    </>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account