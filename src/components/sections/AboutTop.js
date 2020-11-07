import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
//import ButtonGroup from '../elements/ButtonGroup';
//import Button from '../elements/Button';
import Image from '../elements/Image';
import './Hero.css';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              About <span className="text-color-secondary">Us</span>
            </h1>
            <div className="container-xs">
              <div className="m-50 mb-32 reveal-from-bottom" data-reveal-delay="400">
              MEdMentor was made by pre-medical students for pre-medical students. As pre-meds, we know how often questions arise about the application process, 
              extracurriculars, research experiences, gap years, etc. While online forums can provide useful information, sifting through all of the responses 
              from a single post often leads one into a deep rabbit hole that might actually contributeto instead of do away with stress.
                </div>
              <br />
              <div className="m-50 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We realized that it would be great if we could reach out directly to current medical students who have characteristics that we are interested in, 
              whether those be specific research interests, certain clinical interests, or a college degree similar to ours. With this in mind, 
              the goal of our platform is to increase both the quantity and the quality of interactions that pre-meds have with current medical students. 
              By making it easier for pre-meds to find and subsequently chat with medical students, MEdMentor aims to reduce some of the stress that often 
              comes with trying to figure outhow to make meaningful connections along your journey to medical school. 
                </div>  
              <div className="reveal-from-bottom" data-reveal-delay="600">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;