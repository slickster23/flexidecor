import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id="contact">
        <h2>Contact</h2>
        <div className="line"/>
            
  

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