import React from 'react'
import './MainContainer.css'

function MainContainer() {
  return (
    <div className='Container'>
        <div className='content-field' >
      <div className="text-content-field">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className="text-content-btn">
        <button className='btn1'>Shop Now</button>
        <button className='btn2'>Category</button>
      </div>
      <div className="selling-app">
      <p>Also Available On</p>
      <div className="site-img">
        <img src="./images/flipkart.png" alt="flipkart-logo" />
        <img src="./images/amazon.png" alt="amazon-logo" />
        </div>
      </div>
      </div>
      <div className="img-content-field">
        <img src="./images/shoe_image.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default MainContainer
