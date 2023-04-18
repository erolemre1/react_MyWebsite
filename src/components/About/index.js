/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import {  isMobileSafari } from 'react-device-detect';

import "./hstyle.scss";

const About = () => {
  const [first, setfirst] = useState("asd");
  useEffect(() => {
    setfirst(navigator.userAgent);
  }, []);

  const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  // const androidDeepUrl = "ejapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl =
    "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr"; // Uygulamanızın App Store veya Google Play Store bağlantısı
  // const androidStoreUrl = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";

  // Kullanıcının cihazında uygulama yüklüyse uygulamayı açın, değilse uygulama mağazasına yönlendirin
  // const openApp = () => {
  //   console.log("navigator.userAgent", navigator);
  //   window.location = IosDeepUrl;
  //   setTimeout(() => {
  //     if (confirm("App Store ile aç")) {
  //       window.location.href = IosStoreUrl;
  //       // Kullanıcı "Tamam" düğmesine tıkladı
  //     } else {
  //       // Kullanıcı "İptal" düğmesine tıkladı
  //       window.location.reload();
  //     }
  //   }, 10);
  // };

  useEffect(() => {
    window.addEventListener('blur', function() {
      console.log('Mobil uygulama açık değil');
    });
    
    window.addEventListener('focus', function() {
      console.log('Mobil uygulama açık');
    });
  }, [])
  
   
   
  const handleOpenApp = () => {
      window.location.href = IosDeepUrl;

    setTimeout(() => {
      window.addEventListener('focus', function() {
        window.location.href = IosDeepUrl;
        window.location.href = IosStoreUrl; 
      });
      }, 10);
    };
    
  

  return (
    <div className="container">
     <p>

    {isMobileSafari ? 'safariii' : 'chrome'}
      </p>

      



      
      {first}
      <button onClick={handleOpenApp}>Open mobile app</button>
    </div>
  );
};

export default About;
