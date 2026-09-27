import React from 'react';
import { Link } from 'react-router-dom';

function PackageCard({ tourCode, title, duration, itinerary, price, image }) {
    return (
        <div className="tour-box th-ani">
            <div className="tour-box_img global-img">
                <img src={`/assets/img/tour/${image}`} alt={title} />
            </div>
            <div className="tour-content">
                {/* Tour Code badge */}
                <span className="sub-title" style={{ fontSize: '12px', marginBottom: '6px', display: 'block' }}>
                    Tour Code : {tourCode}
                </span>
                <h3 className="box-title">{title}</h3>
                {/* Itinerary */}
                <p className="sec-text" style={{ fontSize: '13px', margin: '8px 0' }}>
                    <i className="fa-light fa-location-dot" style={{ marginRight: '6px' }} />
                    {itinerary}
                </p>
                {/* Price */}
                <h4 className="tour-box_price">
                    <span className="currency">{price}</span>
                </h4>
                {/* Footer row */}
                <div className="tour-action">
                    <span>
                        <i className="fa-light fa-clock" />{duration}
                    </span>
                    <Link to="/contact" className="th-btn style4 th-icon">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PackageCard;
