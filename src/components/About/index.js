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
  
    useEffect(() => {
      const checkAppInstalled = () => {
        // Replace with your custom URI scheme
        const uriScheme = 'emlakjetapp://';
  
        const appInstalledTimeout = setTimeout(() => {
          setAppInstalled(false);
        }, 1000);
  
        // Try to open the app with the URI scheme
        window.location.href = uriScheme;
  
        // Listen for app activation events
        window.addEventListener('pagehide', () => {
          clearTimeout(appInstalledTimeout);
          setAppInstalled(true);
        });
        window.addEventListener('pageshow', () => {
          clearTimeout(appInstalledTimeout);
          setAppInstalled(true);
        });
      };

      // Check if the app is already installed
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && navigator.userAgent.match(/AppleWebKit/g)) {
        checkAppInstalled();
      } else {
        setAppInstalled(true);
      }
    }, []);
  

    const handleOpenApp = () => {
      // Replace with your custom URI scheme
      const uriScheme = 'emlakjetapp://';
  
      // Attempt to open the app using the custom URI scheme
      window.location.href = uriScheme;
  
      // If the app is not installed, redirect to the App Store
      setTimeout(() => {
        if (!appInstalled) {
          window.location.href = IosStoreUrl;
        }
      }, 500);
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
