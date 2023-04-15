import React from 'react'
import './hstyle.scss'

const handleDeeplinkClick = (url, appStoreUrl) => {
  // Check if the app is installed
  const isAppInstalled = window.navigator.userAgent.indexOf('emlakjet') > -1;
  if (isAppInstalled) {
    // Open the app with the deeplink
    window.location.href = url;
  } else {
    // Redirect to the app store
    window.location.href = appStoreUrl;
  }
};
const About = () => {
  return (
    <div className="container" >
      <a
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
      </a>
    </div>
  )
};

export default About
