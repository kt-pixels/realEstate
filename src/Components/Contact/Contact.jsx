import React from 'react'
import './Contact.css'
import {MdCall, MdChat, MdVideoCall, MdEmail} from 'react-icons/md'

function Contact() {
  return (
    <section className="c-wrapper">
        <div className="padding w-full cont-container">
            {/* LEFT SIDE */}
            <div className="c-left">
                <span>Our Contact</span>
                <span>Easy to contact us</span>
                <span>
                We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                </span>

                {/* CONTACT */}
                <div className="contactModes">
                    {/* First row */}
                    <div className="row">
                        <div className="mode">
                            <div className="flex-start">
                                <div className="icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="details">
                                    <span>Call</span>
                                    <span>9810******</span>
                                </div>
                            </div>
                            <div className="button">Call Now</div>
                        </div>

                        <div className="mode">
                            <div className="flex-start">
                                <div className="icon">
                                    <MdChat size={25}/>
                                </div>
                                <div className="details">
                                    <span>Chat</span>
                                    <span>9810******</span>
                                </div>
                            </div>
                            <div className="button">Chat Now</div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row">
                        <div className="mode">
                            <div className="flex-start">
                                <div className="icon">
                                    <MdVideoCall size={25}/>
                                </div>
                                <div className="details">
                                    <span>Video Call</span>
                                    <span>9810******</span>
                                </div>
                            </div>
                            <div className="button">Call Now</div>
                        </div>

                        <div className="mode">
                            <div className="flex-start">
                                <div className="icon">
                                    <MdEmail size={25}/>
                                </div>
                                <div className="details">
                                    <span>Email</span>
                                    <span>k*********5@gmail.com</span>
                                </div>
                            </div>
                            <div className="button">Email Now</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact