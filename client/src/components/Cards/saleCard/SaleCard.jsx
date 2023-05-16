import React from 'react'
import './SaleCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const SaleCard = ({isSale}) => {
  return (
    <div className="card-container" style={{width: isSale ? "200px" : "150px"}}>
        <div className="cardImg">
            <img src='https://static-01.daraz.lk/p/2698d521522f269a4b2b8dfee371eb03.jpg' alt="img" className='itemImg' style={{width: (isSale ? "200px" : "150px"),height: (isSale ? "200px" : "150px")}}/>
        </div>
        <div className="cardDesc">
            <h1 className="cardname">Shoes</h1>
            <h1 className="cardprice">Rs. 1200</h1>
            {isSale && <span className="sale">Rs. 1800</span>}
            <span className="rating">
                <FontAwesomeIcon className="startIcon" icon={faStar} />
                <FontAwesomeIcon className="startIcon" icon={faStar} />
                <FontAwesomeIcon className="startIcon" icon={faStar} />
                <FontAwesomeIcon className="startIcon" icon={faStarHalfAlt} />
                   4.9
            </span>
        </div>
    </div>
  )
}

export default SaleCard