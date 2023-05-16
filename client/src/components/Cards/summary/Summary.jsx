import React from 'react'
import './Summary.scss'

const Summary = () => {
  return (
    <div className="summary-container">
        <div className="name">Order Summary</div>
        <div className="summaryItem">
            <div className="label">Total items</div>
            <div className="label leftlable">1</div>
        </div>
        <div className="summaryItem">
            <div className="label">Total item cost</div>
            <div className="label leftlable">Rs. 1250</div>
        </div>
        <div className="summaryItem">
            <div className="label">Total delivery fee</div>
            <div className="label leftlable">Rs. 250</div>
        </div>
        <div className="summaryItem">
            <div className="label">Saved</div>
            <div className="label leftlable">Rs. 0</div>
        </div>
        <hr className="summarthr" />
        <div className="summaryItem">
            <div className="label">Total costs</div>
            <div className="label leftlable">Rs. 1500</div>
        </div>
        <button className="button btnbuy btnsummary">Buy now</button>
        <div className="label terms">Upon clicking 'Place Order', I confirm I have read and acknowledged all terms and policies.</div>


    </div>
  )
}

export default Summary