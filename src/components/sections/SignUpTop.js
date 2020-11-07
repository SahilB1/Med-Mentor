import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
//import ButtonGroup from '../elements/ButtonGroup';
//import Button from '../elements/Button';
import Image from '../elements/Image';
import './Hero.css';
import Modal from '../elements/Modal';
import { Card, Button } from 'react-bootstrap';


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
               Sign <span className="text-color-secondary">Up</span>
            </h1>
            
            <Card className="text-center">
                <form>
                <Card.Header>We'll help you find a mentor / mentee match</Card.Header>
                    <Card.Body>
                        <Card.Title>Year</Card.Title>
                        <select className="form">
                            <option value="OMS-1">OMS-1</option>
                            <option value="OMS-2">OMS-2</option>
                            <option selected value="OMS-3">OMS-3</option>
                            <option value="OMS-4">OMS-4</option>
                        </select>
                        <Card.Title>Anticipated Degree</Card.Title>
                        <select className="form">
                            <option value="DO">DO</option>
                            <option value="DO-PhD">DO / PhD</option>
                            <option selected value="DO-MBA">DO / MBA</option>
                            <option value="DO-MPH">DO / MPH</option>
                        </select>
                        <Card.Title>Anticipated Specialty</Card.Title>
                        <select className="form">
                            <option value="Family-Medicine">Family Medicine</option>
                            <option value="Neurology">Neurology</option>
                            <option selected value="Pediatrics">Pediatrics</option>
                            <option value="OBGYN">OB / Gyn</option>
                            <option value="surgery">Surgery</option>
                            <option value="cardiology">Cardiology</option>
                        </select>
                        <Card.Title>Research Interests</Card.Title>
                        <input type="text"></input>
                        <Card.Title>Undergrad Degree</Card.Title>
                        <input type="text"></input>
                        <Card.Title>Gap Year?</Card.Title>
                        <select className="form">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </Card.Body>
                    </form>
                    <Button className="button button-secondary button-wide-mobile button-sm">Submit</Button>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;