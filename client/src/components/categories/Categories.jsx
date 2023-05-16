import React, { useState } from 'react'
import './categories.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown, faDownLong, faList } from '@fortawesome/free-solid-svg-icons'


const Categories = ({isSmall}) => {
  const [isClick, setIsClick] = useState(false)
  return (
    <>
        {isSmall ?  
        <div className='smallCat'>
          <div className="titleWrapper" onClick={()=>setIsClick(!isClick)}>
            <FontAwesomeIcon icon={faList} className='list'/>
            <h1 className="title">Categories</h1>
            <FontAwesomeIcon icon={faChevronDown} className='down'/>
          </div> 
          {<div className="typesPopUp" style={{display: isClick? "flex" : "none"}}>
                <p className="type">Women’s Fashion</p>
                <p className="type">Men’s Fashion</p>
                <p className="type">Phones & Telecommunincations</p>
                <p className="type">Computer, Office & security</p>
                <p className="type">Consumer Electronics</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Home, Pet & Appliances</p>
                <p className="type">Bags & Shoes</p>
                <p className="type">Toys, Kids & Babies</p>
                <p className="type">Beauty</p>
          </div>}
          </div>
        :
          <div className="category-container">
            <div className="titleWrapper">
                <FontAwesomeIcon icon={faList} className='list'/>
                <h1 className="title">Categories</h1>
            </div> 
            <div className="types">
                <p className="type">Women’s Fashion</p>
                <p className="type">Men’s Fashion</p>
                <p className="type">Phones & Telecommunincations</p>
                <p className="type">Computer, Office & security</p>
                <p className="type">Consumer Electronics</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Jewelry & Watches</p>
                <p className="type">Home, Pet & Appliances</p>
                <p className="type">Bags & Shoes</p>
                <p className="type">Toys, Kids & Babies</p>
                <p className="type">Beauty</p>
            </div>
          </div>
      }
      </>
  )
}

export default Categories