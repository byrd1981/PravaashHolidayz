import React from 'react'
import { Link } from 'react-router-dom'

function GetInTouch() {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Get In Touch</span>
                    <h2 className="sec-title">Our Contact Information</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid style2">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/location-dot2.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Our Address</h6>
                                <p className="about-contact-details-text">
                                    F/410, SOBO Centre, Nr. Safal Parisar, Gala Gymkhana Road, South Bopal, Bopal
                                </p>
                                <p className="about-contact-details-text">Ahmedabad – 380 058, Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/call.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Phone Number</h6>
                                <p className="about-contact-details-text">
                                    <Link to="tel:+919909025094">+91 99090 25094</Link>
                                </p>
                                <h6 className="box-title">GST No</h6>
                                <p className="about-contact-details-text">
                                    24ABKFP4933E1Z9
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/mail.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Email Address</h6>
                                <p className="about-contact-details-text">
                                    <Link to="mailto:info@pravaashholidayz.com">info@pravaashholidayz.com</Link>
                                </p>
                                <p className="about-contact-details-text">
                                    <Link to="https://www.pravaashholidayz.com">www.pravaashholidayz.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch
