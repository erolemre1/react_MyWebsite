import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  // const androidDeepUrl = "ejapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  // const androidStoreUrl = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
 
  function isAppInstalled(uriScheme) {
    let isInstalled;
    if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) {
      isInstalled = false;
      const appUrl = uriScheme;
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', appUrl);
      iframe.setAttribute('style', 'display:none;');
      document.body.appendChild(iframe);
      window.setTimeout(function() {
        document.body.removeChild(iframe);
        if (!isInstalled) {
          // Uygulama yüklü değil, store linkine yönlendirme yapabilirsiniz
          window.location = IosStoreUrl
        }
      }, 2000);
      window.onblur = function() {
        isInstalled = true;
      };
    } else {
      // iOS 7'den önceki sürümlerde, uygulama kontrolü için canlı test gereklidir.
      window.location.href = uriScheme;
    }
  }
  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {
    if (isAppInstalled(IosDeepUrl)) {
      window.location.href = IosDeepUrl; // Uygulamayı aç
    } else {
      window.location.href = IosStoreUrl; // Store sayfasına yönlendir
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
