import React, { useEffect, useState } from 'react'
import './Header.css'

function Header() {

  const [className, setClassName] = useState('')

  const toggleClass = () => {
    setClassName(!className)
  }

  return (
    <section className='h-wrapper'>
      <div 
      className='bars'
      onClick={toggleClass}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <div className="h-container padding width">
            <img src="./logo.png" alt="logo" width={100} />

            <div className={`flex-center h-menu ${className ? 'display-flex' : ''}`}>
                <a href="">Residencies</a>
                <a href="">Our values</a>
                <a href="">Contact Us</a>
                <a href="">Get started</a>
                <button className="button">
                    Contact<a href=""></a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header