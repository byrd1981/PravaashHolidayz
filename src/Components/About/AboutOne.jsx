import React from 'react'
import { Link } from 'react-router-dom'

function AboutOne() {
    return (
        <div
            className="about-area position-relative overflow-hidden space"
            id="about-sec"
        >
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-box1">
                            <div className="img1">
                                <img src="/assets/img/normal/about_1_1.jpg" alt="About" />
                            </div>
                            <div className="img2">
                                <img src="/assets/img/normal/about_1_2.jpg" alt="About" />
                            </div>
                            <div className="img3">
                                <img src="/assets/img/normal/about_1_3.jpg" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1 ">In Ahmedabad</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    Best Tour & Travel Agency
                                </h2>
                                <p className="sec-text mb-30">
                                    Welcome to PRAVAASH HOLIDAYZ, a leading travel agency based in Ahmedabad, proudly serving travelers since 2014. We specialize in domestic tour packages, international holiday packages, customized travel planning, honeymoon tours, group tours, and corporate travel services.
                                    <br/><br/>
                                    With over a decade of experience in the travel industry, we provide affordable, well-planned, and stress-free travel experiences tailored to your needs.
                                </p>
                            </div>
                            {/* <div className="about-item-wrap">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Domestic Tour Packages</h5>
                                        <p className="about-item_text">
                                            Explore the beauty of India with customized and fixed departure tours from Ahmedabad to popular destinations including Goa, Kerala, Himachal, Kashmir, Rajasthan, Andaman, and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">International Holiday Packages</h5>
                                        <p className="about-item_text">
                                            Discover the world with our specially curated international travel packages covering Dubai, Bali, Thailand, Maldives, Singapore, Europe, and many other global destinations.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="mt-35">
                                <Link to="/about" className="th-btn style3 th-icon">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    style={{
                        top: "12%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "20%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{
                        top: "14%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{
                        bottom: "0%",
                        right: "-11%",
                    }}
                >
                    <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-rating d-none d-xxl-block"
                    style={{
                        bottom: "50%",
                        right: "-20%",
                    }}
                >
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.9k</span>
                </div>
                <div
                    className="shape-mockup about-emoji d-none d-xxl-block"
                    style={{
                        bottom: "25%",
                        right: "5%",
                    }}
                >
                    <img src="/assets/img/icon/emoji.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default AboutOne
