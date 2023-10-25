import React from 'react'
import './MainContainer.css'

function MainContainer() {
  return (
    <div className='Container'>
      <div className="text-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className="text-content-btn">
        <button>Shop Now</button>
        <button>Category</button>
      </div>
      <div className="selling-app">
        <img src="./images/flipkart.png" alt="flipkart-logo" />
        <img src="./images/amazon.png" alt="amazon-logo" />
      </div>
      </div>
      <div className="img-content">
        <img src="./images/shoe_image.png" alt="" />
      </div>
    </div>
  )
}

export default MainContainer
