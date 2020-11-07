import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SignUpTop from '../components/sections/SignUpTop';

const SignUp = () => {
    document.title = "Med-Mentor Sign Up";

    return (
        <>
        <SignUpTop />
        </>
    );
}

export default SignUp;