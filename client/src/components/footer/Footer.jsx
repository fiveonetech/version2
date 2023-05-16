import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVcard } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter, faVisaCreditCard, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerItems">
        <div className="ItemWrapper">
          <span className="itemTite">About</span>
          <span className="item">About Us</span>
          <span className="item">Find Store</span>
          <span className="item">Categories</span>
          <span className="item">Blogs</span>
        </div>
        <div className="ItemWrapper">
          <span className="itemTite">Information</span>
          <span className="item">Help Center</span>
          <span className="item">Money Refund</span>
          <span className="item">Shipping</span>
          <span className="item">Contact us</span>
        </div>
        <div className="ItemWrapper">
          <span className="itemTite">For users</span>
          <span className="item">Login</span>
          <span className="item">Register</span>
          <span className="item">Settings</span>
          <span className="item">My orders</span>
        </div>
        <div className="ItemWrapper">
          <span className="itemTite">Follow us</span>
          <div className="icons">
            <FontAwesomeIcon className='brands' icon={faFacebook}/>
            <FontAwesomeIcon className='brands' icon={faInstagram}/>
            <FontAwesomeIcon className='brands' icon={faYoutube}/>
            <FontAwesomeIcon className='brands' icon={faTwitter}/>
          </div>
        </div>
      </div>
      <div className="bottomBar">
        www.Buyme.com
      </div>
    </div>
  )
}

export default Footer