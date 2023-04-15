import React from 'react'
import './hstyle.scss'

const About = () => {
  
  const handleDeeplinkClick = (url, appStoreUrl) => {
    // Attempt to open the deeplink URL
    window.location.href = url;

    // Wait for a short delay before checking if the deeplink worked
    setTimeout(() => {
      // Check if the browser was redirected to the app
      if (document.hidden || document.webkitHidden) {
        // The app is installed
        console.log('App is installed');
      } else {
        // The app is not installed
        console.log('App is not installed');
        // Redirect to the app store
        window.location.href = appStoreUrl;
      }
    }, 100);
  };

  return (
    <div className="container" >
      <button
        onClick={() => {
          setTimeout(() => {
            handleDeeplinkClick(
              'emlakjetapp://',
              'https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334',
            );
          }, 500);
        }}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
