import React from 'react'
import { useSwiper } from 'swiper/react'
import './Residency.css'

function SliderButtons() {

    const swiper = useSwiper()

  return (
    <div className="prev-next">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}

export default SliderButtons