import React from 'react'
import './hstyle.scss'

const About = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;


  function isMobileAppInstalled() {
    if (/android/i.test(userAgent)) {
      return !!window.location.href.match(/your-android-package-name/i);
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      return !!window.location.href.match(/your-ios-app-url-scheme/i);
    }
    return false;
  }

  const handleDeeplinkClick = () => {

    if (isMobileAppInstalled()) {
      // Uygulama açma işlemi
      window.location.href = 'emlakjetapp://';
    } else {
      // Uygulama indirme sayfasına yönlendirme işlemi
      if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.emlakjet.kurumsal.sekizbit&hl=tr&gl=US';
      }
      if (/iPad|iPhone|iPod/i.test(userAgent)) {
        window.location.href = 'https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334';
      }
    }
  }


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
