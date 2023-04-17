import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  const appUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const storeUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  // Kullanıcının cihazında uygulama yüklü mü diye kontrol edin
  function isAppInstalled() {
    if (isIOS) {
      // iOS cihazlarında uygulamanın yüklü olup olmadığını kontrol edin
      if (window.location.href.indexOf(appUrl) > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      // Diğer cihazlarda uygulamanın yüklü olmadığını varsayın
      return false;
    }
  }
  
  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {

    // if (isAppInstalled()) {
    //   window.location.href = appUrl;
    // } else {
    //   window.location.href = storeUrl;
    // }
    window.location.href = 'ejapp://';
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
