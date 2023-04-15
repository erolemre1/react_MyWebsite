import React, { useState } from 'react'
import './hstyle.scss'

const About = () => {
  const [first, setfirst] = useState(null);
  

  const handleDeeplinkClick = (url, appStoreUrl) => {
    // Check if the app is installed
    const isAppInstalled = window.navigator.userAgent.indexOf('emlakjet') > -1;
    console.log("window.navigator11")
    console.log("window.navigator",window.navigator)
    if (isAppInstalled) {
      // Open the app with the deeplink
      window.location.href = url;
    } else {
      // Redirect to the app store
      window.location.href = appStoreUrl;
    }
    setfirst(window.navigator.userAgent)
  };

  return (
    <div className="container" >
      <div>
        {first}
      </div>
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
