import React from 'react'
import './TypeSelection.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const TypeSelection = () => {
  return (
    <div className="type-container">
        <div className="categoryType-wrapper">
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
        <div className="priceRange">
            <div className="selectionTitle">Price Range</div>
            <div className="price-wrapper">
                <input type="number" name="minprice" id="" className='minprice' min={1}/>
                <p> - </p>
                <input type="number" name="minprice" id="" className='minprice' min={1}/>
                <button className='pricefilter'><FontAwesomeIcon className='check' icon={faCheck}/></button>
            </div>
        </div>
        <div className="colors">
            <div className="selectionTitle">Colours</div>
            <div className="color">
                <input type="checkbox" name="" id="" className='colorCheck'/>
                <span>Red</span>
            </div>
            <div className="color">
                <input type="checkbox" name="" id="" className='colorCheck'/>
                <span>Blue</span>
            </div>
            <div className="color">
                <input type="checkbox" name="" id="" className='colorCheck'/>
                <span>Green</span>
            </div>
            <div className="color">
                <input type="checkbox" name="" id="" className='colorCheck'/>
                <span>Black</span>
            </div>
        </div>
        <div className="brandsSelection">
            <div className="selectionTitle">Brands</div>
            <p className="type">Spring & Summer</p>
            <p className="type">Moose</p>
            <p className="type">ODEL</p>
            <p className="type">Leives</p>
        </div>
    </div>
  )
}

export default TypeSelection