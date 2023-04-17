import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  // const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  // const androidDeepUrl = "ejapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr" // Uygulamanızın App Store veya Google Play Store bağlantısı
  // const androidStoreUrl = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";

  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {
    const myLink = document.getElementById('myLink');

    myLink.addEventListener('click', function(event) {
      event.preventDefault(); // Sayfanın yenilenmesini önlemek için tıklamayı iptal et
    
      window.location.href = myLink.href; // Deep link URL'sine yönlendirin
    });


    setTimeout(() => {
      window.location.href = IosStoreUrl
    }, 5000);
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
      <a id="myLink" href="emlakjetapp://"
        onClick={() => openApp()}
      >
        Open mobile app
      </a>
    </div>
  )
};

export default About
