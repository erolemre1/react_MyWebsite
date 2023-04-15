import React from 'react'
import './hstyle.scss'

const About = () => {
  
  function isAppInstalled() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("emlakjet");
  }

const  handleDeeplinkClick = () => {
    if (isAppInstalled()) {
      window.location.href = "emlakjetapp://path/to/content";
    } else {
      window.location.href = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334";
    }
  };
  
  return (
    <div className="container" >
      <button
        onClick={() => {
          setTimeout(() => {
            handleDeeplinkClick();
          }, 500);
        }}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
