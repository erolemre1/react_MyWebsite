/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { isIOS, isMobileSafari } from 'react-device-detect';

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

    const openApp = () => {
      // Replace with your custom URI scheme
      const uriScheme = IosDeepUrl;
  
      // Attempt to open the app using the custom URI scheme
      window.location.href = uriScheme;
  
      // If the app is not installed, redirect to the App Store
      setTimeout(() => {
        if (!document.webkitHidden && isIOS && isMobileSafari) {
          window.location.href = IosStoreUrl;
        }
      }, 500);
    };
  

  return (
    <div className="container">
      {isMobileSafari ? 'safariii' : 'chrome'}
      {first}
      <button onClick={openApp}>Open mobile app</button>
    </div>
  );
};

export default About;
