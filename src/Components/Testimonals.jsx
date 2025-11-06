import React from 'react'

import userImg from '../assets/dancer.png'
import './Testimonals.css'
function Testimonials() {
  return (
    <div className="testimonial-container">
      <h4 className="testimonial-title">
        <span className="quote-icon">❝</span> Testimonials
      </h4>

      <p className="testimonial-text">
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult 
        to find or connect with like minded people. Websites like hobbycue.com is a great service 
        which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. 
        It also provides the extra benefit of finding products and services that I can avail, which I 
        can be assured is going to be of great quality as it comes recommended by people of the hobbycue 
        community. To have discussions, to get visibility, and to be able to safely explore various hobbies 
        and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
      </p>

      {/* Audio Section */}
      <div className="audio-player">
        <button className="play-btn">▶</button>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <span className="time">0:00</span>
        <img src={userImg} alt="User" className="user-audio-img" />
      </div>

      {/* User Info */}
      <div className="testimonial-user">
        <img src={userImg} alt="User" className="user-img" />
        <div>
          <h6 className="user-name">Shubha Nagarajan</h6>
          <p className="user-role">Classical Dancer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
