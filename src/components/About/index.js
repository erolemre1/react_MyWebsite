import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const androidDeepUrl = "ejapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  const androidStoreUrl = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
 
  const handleDeeplinkClick = (url, appStoreUrl) => {
 
    setTimeout(() => {
      // Check if the browser was redirected to the app
      if (document.hidden || document.webkitHidden) {
        // The app is installed
        console.log('App is installed');
        window.location.href = url;
      } else {
        // The app is not installed
        console.log('App is not installed');
        // Redirect to the app store
        window.location.href = appStoreUrl;
      }
    }, 500);
  };
  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {

    if (/Android/i.test(navigator.userAgent)) {
      // Android için deep link
      handleDeeplinkClick(androidDeepUrl, androidStoreUrl) 
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // iOS için deep link
      handleDeeplinkClick(IosDeepUrl, IosStoreUrl) 
    } else {
      // Deep link desteklenmeyen cihazlar
      window.location.href = 'www.google.com';
    }
    
  

  }

// if (getMobileOperatingSystem() === "iOS") {
//   appLink = "emlakjetapp://";
// } else if (getMobileOperatingSystem() === "Android") {
//   appLink = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
// }

  return (
    <div className="container" >
      <head>
        <title>Test</title>
        <meta charset="UTF-8" />
        <meta name="apple-itunes-app" content="app-id=1551825141" />
    </head>
      {first}
      <button
        onClick={() => openApp()}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
