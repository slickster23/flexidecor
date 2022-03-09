import React from 'react'
import ResponsiveGallery from "react-responsive-gallery";
import './Gallery.css'

function Gallery() {

    const PHOTO_SET = [
        {
          src: '/img/Image2.jpg',
        },

        {
            src: '/img/Image3.jpg',
          },

          {
            src: '/img/Image4.jpg',
          },

          {
            src: '/img/Image5.jpg',
          },

          {
            src: '/img/Image6.jpg',
          },

          {
            src: '/img/Image7.jpg',
          },

          {
            src: '/img/Image8.jpg',
          },

          {
            src: '/img/Image9.jpg',
          },

          {
            src: '/img/Image10.jpg',
          },

          {
            src: '/img/Image11.jpg',
          },

    ]
  return (


    <div id = "gallery">
        <h2>Gallery</h2>
        <div className="line"/>
        <div className="gallery-container">
        <ResponsiveGallery useLightBox images={PHOTO_SET} />
            </div>
      
    </div>
  )
}

export default Gallery