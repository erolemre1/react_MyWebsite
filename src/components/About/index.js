import React from 'react'
import './hstyle.scss'

const About = () => {
  
  const handleDeeplinkClick = (url, appStoreUrl) => {
    // Attempt to open the deeplink URL
    const appWindow = window.location.href = url
  
    // Check if the app has opened
    const checkAppOpened = () => {
      // Check if the app window is focused
      if (appWindow && appWindow.window && appWindow.window.focus) {
        // The app has opened and the deeplink worked
        console.log('App is installed');
        // Close the app window
        appWindow.close();
      } else {
        // The app has not opened yet, or the deeplink failed
        console.log('App is not installed');
        // Redirect to the app store
        window.location.href = appStoreUrl;
      }
    };
  
    // Check if the app has opened when the current window loses focus
    window.addEventListener('blur', checkAppOpened);
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
