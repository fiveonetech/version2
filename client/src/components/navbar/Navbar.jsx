import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'

const Navbar = ({onThemeChange}) => {
    const navigate = useNavigate();

    const [popUp, setPopu] = useState(false)

  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">
            <div className="logoContainer">
                <h1 className="logo" onClick={() => navigate("/")}>Buyme</h1>
            </div>
            <div className="listContainer">
                <span className="listItem">Sell on Buyme</span>
                <span className="listItem">Track My orders</span>
                <div className="listItem accountItem" >
                    <div  onClick={()=>setPopu(!popUp)}>
                        <FontAwesomeIcon icon={faUser} 
                        className="account"/>
                        Account
                    </div>
                    
                </div>
                {<div className="accountPopup" style={{display: popUp? "flex" : "none"}}>
                        <div className="log">
                            <button className="button">Login</button>
                            <button className="button">CreateAccount</button>
                        </div>
                        <hr className='popupHr'/>
                        <div className="sub">
                            <div className="listItem">My Account</div>
                            <div className="listItem">My Orders</div>
                            <div className="listItem">WishList</div>
                            <div className="listItem">My Account</div>
                            <div className="listItem">My Account</div>
                        </div>
                    </div>}
                <span className="listItem"><FontAwesomeIcon icon={faSun} className="close" onClick={onThemeChange}/></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar