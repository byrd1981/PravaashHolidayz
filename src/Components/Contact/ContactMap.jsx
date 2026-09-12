import React from 'react'

function ContactMap() {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="contact-map style2">
                    
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1715577166296!2d72.47235037438365!3d23.017472316520223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3101dce31f%3A0xdbe042d1116ea861!2sSoBo%20Center!5e0!3m2!1sen!2sin!4v1772520939890!5m2!1sen!2sin" 
                        allowfullscreen="" loading="lazy" 
                    ></iframe>
                    <div className="contact-icon">
                        <img src="assets/img/icon/location-dot3.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMap
