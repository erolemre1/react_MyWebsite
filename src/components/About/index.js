import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])

  const appUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const storeUrl = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  
  // Kullanıcının cihazında uygulama yüklü mü diye kontrol edin
  function isAppInstalled() {
    let isInstalled = false;
  
    // Özel URL şemasını kullanarak kontrol edin
    window.location.href = appUrl;
  
    // Kullanıcı uygulamayı açmaya çalışırsa isInstalled değişkeni true olur
    setTimeout(function () {
      if (!isInstalled) {
        isInstalled = false;
      }
    }, 1000);
  
    // Kullanıcının cihazına geri yönlendirin
    window.location.href = "http://www.example.com";
  
    return isInstalled;
  }
  
  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  const openApp = () => {

    if (isAppInstalled()) {
      window.location.href = appUrl;
    } else {
      window.location.href = storeUrl;
    }
    
  }

// if (getMobileOperatingSystem() === "iOS") {
//   appLink = "emlakjetapp://";
// } else if (getMobileOperatingSystem() === "Android") {
//   appLink = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
// }

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
