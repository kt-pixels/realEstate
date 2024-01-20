import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="padding hero-container w-full">

        {/* Left side */}
        <div className="hero-left">
          <div className="hero-title">
              <h1>Discover <br /> Most Suitable <br /> Property</h1>
          </div>

          <div className="secondary hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color='blue' size={25}/>
            <input type="text" placeholder='Search...' />
            <button className='button'>Search</button>
          </div>

          <div className="stats">
            <div className="stat">
              <span><CountUp start={7800} end={9000} duration={3}/>
                <span>+</span>
              </span>
              <span className='secondary'>Premium Products</span>
            </div>
            <div className="stat">
              <span><CountUp start={1900} end={2000} duration={3}/>
                <span>+</span>
              </span>
              <span className='secondary'>Happy customers</span>
            </div>
            <div className="stat">
              <span><CountUp end={28}/>
                <span>+</span>
              </span>
              <span className='secondary'>Award winning</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-center hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero