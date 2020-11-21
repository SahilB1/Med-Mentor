import React from 'react';
// import sections
import ChatTop from '../components/sections/ChatTop';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Chat = () => {
  document.title = "Med-Mentor Home";

  return (
    <>
      <ChatTop className="illustration-section-01" />
    </>
  );
}

export default Chat;