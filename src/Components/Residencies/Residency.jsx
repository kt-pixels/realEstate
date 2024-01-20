import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './Residency.css'
import data from '../../unity/Slider.json'
import { sliderSettings } from '../../unity/common';
import SliderButtons from './SliderButtons';

function Residency() {

  return (
    <section className="r-wrapper">
        <div className="padding w-full r-container">
            <div className="r-head">
                <div className="head">
                    <span>Best Chioces</span>
                    <span>Popular Residencies</span>
                </div>
            </div>
           

            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card, id) => (
                        <SwiperSlide key={id}>
                            <div className="r-card">
                                <img src={card.image} alt="" />
                                <span className='secondary'>&nbsp; {card.price}</span>
                                <span>{card.name}</span>
                                <span className='secondary'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residency