import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderOne from '../Components/Header/HeaderOne';
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import DestinationPackages from '../Components/Destination/DestinationPackages';
import DestinationDetails from './DestinationDetails';
import FooterFour from '../Components/Footer/FooterFour';
import ScrollToTop from '../Components/ScrollToTop';
import allPackages from '../Components/data/packages-master.json';

function DestinationPackagesPage() {
    const { category } = useParams();
    const categoryData = allPackages.find(p => p.slug === category);

    // If it's not a known package slug, fall through to original DestinationDetails
    if (!categoryData) {
        return <DestinationDetails />;
    }

    return (
        <>
            <HeaderOne />
            <Breadcrumb title={categoryData.label} />
            <DestinationPackages />
            <FooterFour />
            <ScrollToTop />
        </>
    );
}

export default DestinationPackagesPage;
