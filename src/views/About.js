import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import AboutTop from '../components/sections/AboutTop';

const About = () => {
    document.title = "Med-Mentor About";

    return (
        <>
        <AboutTop />
        </>
    );
}

export default About;