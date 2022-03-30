import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div id = "home">
    
        <Carousel className = "carousel" autoPlay = {true} swipeable = {true} showStatus = {false} centerMode= {true} interval={1000} showThumbs = {false} axis ="horizontal" centerSlidePercentage={100}infiniteLoop={true} width="100%" height="100%" showArrows={true}>
            <div className="image">
                <img src="/img/Image2.jpg" alt="" />
            </div>

            <div className="image">
                <img src="/img/Image3.jpg" alt="" />
            </div>

            <div className="image">
                <img src="/img/Image4.jpg" alt="" />
            </div>

            <div className="image">
                <img src="/img/Image5.jpg" alt="" />
            </div>

            <div className="image">
                <img src="/img/Image6.jpg" alt="" />
            </div>

            <div className="image">
                <img src="/img/Image7.jpg" alt="" />
            </div>

           
        </Carousel>
    </div>
  )
}

export default Home