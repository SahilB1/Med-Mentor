import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {
  document.title = "Med-Mentor Home";

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
    </>
  );
}

export default Home;