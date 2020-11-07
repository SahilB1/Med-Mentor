import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import LoginTop from '../components/sections/LoginTop';

const Login = () => {
    document.title = "Med-Mentor Login";

    return (
        <>
        <LoginTop />
        </>
    );
}

export default Login;