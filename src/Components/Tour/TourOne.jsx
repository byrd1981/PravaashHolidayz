import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Link } from 'react-router-dom';

function TourOne() {
  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      style={{ backgroundImage: 'url(/assets/img/bg/tour_bg_1.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Top Travel Services </span>
              <h2 className="sec-title">In Ahmedabad</h2>
              <p className="sec-text">
                At PRAVAASH HOLIDAYZ, we offer complete travel solutions under one roof
              </p>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            <SwiperSlide key="tour1">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_1.jpg" alt="Greece Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Domestic Packages</Link>
                  </h3>
                  <p class="sec-text">
                    Covering Goa, Kerala, Himachal, Kashmir, Rajasthan, Andaman and more.. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour2">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_2.jpg" alt="Italy Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">International Packages</Link>
                  </h3>                  
                  <p class="sec-text">
                    Covering Dubai, Bali, Thailand, Maldives, Singapore, Europe and more...
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour3">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_3.jpg" alt="Dubai Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Honeymoon Packages</Link>
                  </h3>
                 <p class="sec-text">
                    Romantic and specially designed honeymoon packages from Ahmedabad for unforgettable memories
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour4">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_4.jpg" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Group & Family Tours</Link>
                  </h3>
                  <p class="sec-text">
                    Well-organized group departures and family holiday packages with complete coordination
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour5">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_5.jpg" alt="Greece Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Hotel & Flight Bookings</Link>
                  </h3>
                  <p class="sec-text">
                    Best deals on hotels, resorts, and flight tickets with competitive pricing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </SwiperSlide>  
            <SwiperSlide key="tour6">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_6.jpg" alt="Greece Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Visa Assistance in Ahmedabad</Link>
                  </h3>
                  <p class="sec-text">
                    Complete visa guidance and documentation support for international travel
                  </p>
                </div>
              </div>
            </SwiperSlide>            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
