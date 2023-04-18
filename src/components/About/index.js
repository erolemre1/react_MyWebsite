/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import {  isMobileSafari } from 'react-device-detect';

import "./hstyle.scss";

const About = () => {
  const [first, setfirst] = useState("asd");
  useEffect(() => {
    setfirst(navigator.userAgent);
  }, []);

  // const IosDeepUrl = "emlakjetapp://"; // Uygulamanız için belirlediğiniz özel URL şeması
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

    const [appInstalled, setAppInstalled] = useState(false);
   
   
    const handleOpenApp = () => {
      // Replace with your custom URI scheme
      const uriScheme = 'emlakjetapp://';
  
      // Attempt to open the app using the custom URI scheme
        window.location.href = uriScheme;
  
      // If the app is installed, the page will blur and focus events will be fired
      const blurTimeout = setTimeout(() => {
        setAppInstalled(false);
      }, 1000);
  
      window.addEventListener('blur', () => {
        clearTimeout(blurTimeout);
        setAppInstalled(true);
      });
      window.addEventListener('focus', () => {
        clearTimeout(blurTimeout);
        setAppInstalled(true);
      });
  
      // If the app is not installed, redirect to the App Store
      setTimeout(() => {
        if (!appInstalled && confirm('store ile aç')) {
          window.location.href = IosStoreUrl; 
        } else {
          window.location.reload()
        }
      }, 100);
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
