import React from 'react'
import './About.css'

function About() {
  return (
    <div id ="about">
      <h2>About Us</h2>
      <div className="line"/>
        <div className="about-container">
          <div className="image">
          <img src="/img/Image2.jpg" alt="" />
            </div>

            <div className="text">
              <p>Flexi decor is a mosotho owned company that sells high quality furniture imported from various countries like South Africa using reliable and prestige material. The shop is located in Lesotho, Maseru at Maseru Mall.
The establishment also offers home decor by interior designers for new homes that require furnishing and or homes that need to be refurbished</p>
              </div>
          </div>
    </div>
  )
}

export default About