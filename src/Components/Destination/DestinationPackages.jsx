import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PackageCard from './PackageCard';
import allPackages from '../data/packages-master.json';

function DestinationPackages() {
    const { category } = useParams();

    // Find the matching category entry from the master JSON
    const categoryData = allPackages.find(p => p.slug === category);

    // Fallback if unknown slug
    if (!categoryData) {
        return (
            <section className="space">
                <div className="container">
                    <p>No packages found for this destination.</p>
                    <Link to="/tour" className="th-btn">Back to Tours</Link>
                </div>
            </section>
        );
    }

    const { label, subPackages } = categoryData;

    return (
        <section className="space">
            <div className="container">
                {/* Section heading */}
                <div className="row mb-40">
                    <div className="col-12">
                        <div className="title-area">
                            <span className="sub-title">Explore Packages</span>
                            <h2 className="sec-title">{label}</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Package cards */}
                    <div className="col-lg-8 col-xxl-9">
                        <div className="row gy-30">
                            {subPackages.map((pkg) => (
                                <div key={pkg.id} className="col-md-6">
                                    <PackageCard
                                        tourCode={pkg.tourCode}
                                        title={pkg.title}
                                        duration={pkg.duration}
                                        itinerary={pkg.itinerary}
                                        price={pkg.price}
                                        image={pkg.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4 col-xxl-3">
                        <aside className="sidebar-area style2">
                            {/* Other packages quick links */}
                            <div className="widget widget_categories">
                                <h3 className="widget_title">Other Packages</h3>
                                <ul>
                                    {allPackages
                                        .filter(p => p.slug !== category)
                                        .map(p => (
                                            <li key={p.slug}>
                                                <Link to={`/destination/${p.slug}`}>
                                                    <img src="/assets/img/theme-img/map.svg" alt="" />
                                                    {p.label}
                                                </Link>
                                                <span>({p.subPackages.length})</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Help widget */}
                            <div
                                className="widget widget_offer"
                                style={{ backgroundImage: 'url(/assets/img/bg/widget_bg_1.jpg)' }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Pravaash" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">Call Us For Booking</h6>
                                            <Link className="offter-num" to="tel:+919909025094">
                                                +91 99090 25094
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Back to all tours */}
                            <div className="widget" style={{ textAlign: 'center', marginTop: '16px' }}>
                                <Link to="/tour" className="th-btn style3" style={{ width: '100%', display: 'block' }}>
                                    ← Back to All Tours
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestinationPackages;
