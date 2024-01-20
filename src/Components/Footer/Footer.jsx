import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="f-container padding">
            {/* left side */}
            <div className="f-left">
                <img src="./logo2.png" width={120} alt="" />
                <span>
                Our vision is to make all people <br />
                the best place to live for them.
                </span>
            </div>

            {/* right side */}
            <div className="f-right">
                <span>Information</span>
                <span>145 New York, FL 5467, USA</span>
                <div className="f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer