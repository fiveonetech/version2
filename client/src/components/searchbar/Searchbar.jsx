import React from 'react'
import './Searchbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
  return (
    <div className="search-container">
        <div className='searchWrapper'>
          <input type="text" className='search' />
        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="cart"/>
    </div>
  )
}

export default Searchbar