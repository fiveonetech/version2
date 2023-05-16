import React from 'react'
import './ItemPage.scss'
import Categories from '../../components/categories/Categories'
import Searchbar from '../../components/searchbar/Searchbar'
import TypeSelection from '../../components/typeSelection/TypeSelection'
import SaleCard from '../../components/Cards/saleCard/SaleCard'
import Pagination from '../../components/pagination/Pagination'

const ItemPage = () => {
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
        <div className="middle-wrapper">
            <div className="selection">
                <TypeSelection/>
            </div>
            <div className="item-section">
                <div className="items">
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                    <SaleCard isSale={false}/>
                </div>
                <div className="pageNo">
                    <Pagination/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemPage