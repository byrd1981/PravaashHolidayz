import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import Booking from '../Components/Booking/Booking'
import CategoryOne from '../Components/Category/CategoryOne'
import DestinationOne from '../Components/Destination/DestinationOne'
import AboutOne from '../Components/About/AboutOne'
import TourOne from '../Components/Tour/TourOne'
import GalleryOne from '../Components/Gallery/GalleryOne'
import CounterOne from '../Components/Counter/CounterOne'

import HighlightsOne from '../Components/Highlights/HighlightsHome'
import BrandOne from '../Components/Brand/BrandOne'
import BlogOne from '../Components/Blog/BlogOne'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function HomeOne() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
            <Booking />
            <CategoryOne />
            <DestinationOne />
            <AboutOne />
            <TourOne />
            <GalleryOne />
            <CounterOne />
            <HighlightsOne />
            <BrandOne className="space-bottom"/>
            <BlogOne />
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeOne
