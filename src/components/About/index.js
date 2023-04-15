import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])
  function isAppInstalled() {
    // iOS için kontrol
    if (/iP(hone|ad|od)/.test(navigator.platform)) {
      // iOS için URL şemasını oluşturma
      const appUrlScheme = "emlakjetapp://";
      const appStoreLink = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334";
      // URL şemasını kullanarak uygulamayı açma denemesi
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", appUrlScheme);
      iframe.setAttribute("style", "display:none;");
      document.body.appendChild(iframe);
      // Uygulama açılmazsa, App Store sayfasına yönlendirme
      setTimeout(function() {
        document.body.removeChild(iframe);
        window.location.href = appStoreLink;
      }, 2000);
    }
    // Android için kontrol
    else if (/Android/.test(navigator.userAgent)) {
      // Android için URL şemasını oluşturma
      const appUrlScheme = "emlakjetapp://";
      const playStoreLink = "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334";
      // URL şemasını kullanarak uygulamayı açma denemesi
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", appUrlScheme);
      iframe.setAttribute("style", "display:none;");
      document.body.appendChild(iframe);
      // Uygulama açılmazsa, Play Store sayfasına yönlendirme
      setTimeout(function() {
        document.body.removeChild(iframe);
        window.location.href = playStoreLink;
      }, 3000);
    }
    // Diğer cihazlarda kontrol yapmama gerek yok
    else {
      return false;
    }
  }
  

  return (
    <div className="container" >
      {first}
      <button
        onClick={() => {
          setTimeout(() => {
            isAppInstalled();
          }, 500);
        }}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
