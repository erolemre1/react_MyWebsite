import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    
    return "unknown";
  }

  let appLink = "emlakjetapp://";

function openApp() {
  window.location = appLink;
  
  setTimeout(function() {
    if (!document.webkitHidden) {
      window.location = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334";
    }
  }, 2000);
}

if (getMobileOperatingSystem() === "iOS") {
  appLink = "emlakjetapp://";
} else if (getMobileOperatingSystem() === "Android") {
  appLink = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
}

  return (
    <div className="container" >
      {first}
      <button
        onClick={() => {
          setTimeout(() => {
            openApp();
          }, 500);
        }}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
