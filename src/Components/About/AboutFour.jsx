import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/normal/about_3_1.jpg" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/normal/about_3_2.jpg" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/normal/about_3_3.jpg" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Welcome To </span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           PRAVAASH HOLIDAYZ
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        <b>PRAVAASH HOLIDAYZ</b> was established with a passion for travel and a commitment to creating unforgettable journeys. Since 2014, we have been proudly serving travelers with carefully curated holiday experiences, personalized itineraries, and seamless travel arrangements.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        {" "}
                        With over a decade of experience in the travel industry, we understand that every traveler is unique. Whether you are looking for a relaxing beach vacation, an adventurous getaway, a romantic honeymoon, a family holiday, or a corporate tour, we design travel experiences tailored specifically to your preferences and budget.
                     </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Exclusive Trip</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Safety First Always</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Professional Guide</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
