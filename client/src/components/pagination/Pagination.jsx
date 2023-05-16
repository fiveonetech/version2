import React from 'react'
import './pagination.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
  return (
    <div className="pagination-container">
        <FontAwesomeIcon classname="pageleft" icon={faAnglesLeft}/>
        <button className="pagebtn">1</button>
        <button className="pagebtn">2</button>
        <button className="pagebtn">3</button>
        <button className="pagebtn">4</button>
        <button className="pagebtn">5</button>
        <button className="pagebtn">6</button>
        <FontAwesomeIcon classname="pageleft" icon={faAnglesRight}/>
    </div>
  )
}

export default Pagination