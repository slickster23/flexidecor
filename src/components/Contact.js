import React from 'react'
import './Contact.css'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
const coordinates = {
    "lat": -29.336075665748144,
    "lng": 27.483740489798908
  }

  const containerStyle = {
    width: '95vw',
    height: '60vh',
   
  };
function Contact() {
  return (
    <div id="contact">
        <h2>Contact</h2>
        <div className="line"/>
            
        <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyA4x_uwF1U8Dezn2xciKYwgcRmPInk1tbQ">

            <GoogleMap className="map"
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={16}
            style={{width: '100%', height: '70vh', position: 'relative'}}>
 
      <Marker position={coordinates}/>
   
      </GoogleMap>
              </LoadScript>
              </div>

        <div className="contact-container">
            <div className="box">
            
                <h3>Location</h3>
             

                <div className="text">
                    <p>Maseru Mall</p>
                </div>
            </div>

            <div className="box">
              
               <h3>Phone</h3>
              

                <div className="text">
                    <p>(+266) 2232 0277</p>
                    <p>(+266) 6321 0446</p>
                    <p>(+266) 5885 4889</p>
                </div>
            </div>

            <div className="box">
             
                    <h3>Email</h3>
          

                <div className="text">
                    <p>m.matsepo@yahoo.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact