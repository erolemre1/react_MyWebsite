import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  // const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  // const androidDeepUrl = "ejapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  // const androidStoreUrl = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";

  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {
  setTimeout(() => {
    
    window.location.href = IosStoreUrl; // Store sayfasına yönlendir
  }, 700);

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
      <a href="emlakjetapp://"
        onClick={() => openApp()}
      >
        Open mobile app
      </a>
    </div>
  )
};

export default About
