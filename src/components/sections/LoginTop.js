import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import './Hero.css';
import Modal from '../elements/Modal';
import LoginForm from './LoginForm';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const LoginTop = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (data) => {
    console.log(data)
  }

  const Logout = () => {
    console.log("Log Out");
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
              Log <span className="text-color-secondary">In</span>
            </h1>
          </div>
        {(user.email != "") ? (
          <div className="text-center">
            <h2>Welcome, {user.name}</h2>
            <button>Log Out</button>
          </div>  
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
        </div>
      </div>
    </section>
  );
}

LoginTop.propTypes = propTypes;
LoginTop.defaultProps = defaultProps;

export default LoginTop;