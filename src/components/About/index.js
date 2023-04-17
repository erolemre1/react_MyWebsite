/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
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
  //   console.log("navigator.userAgent",(navigator.userAgent.toLowerCase().includes("chrome"))=== false)
  //   window.location = IosDeepUrl

  //  setTimeout(() => {
  //   // eslint-disable-next-line eqeqeq
  //   if (navigator.userAgent.toLowerCase().includes("chrome")=== false) {
  //     if (confirm("App Store ile aç")) {
  //       window.location.href = IosStoreUrl;
  //     } else {
  //       window.location.reload();
  //     }
  // } else {
  //   window.location.href = IosStoreUrl;
  // }
  //  }, 500);

   if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      if (registrations.length > 0) {
        window.location = IosDeepUrl
      } else {
        window.location.href = IosStoreUrl;
      }
    });
  } else {
    console.log('Servis işçileri desteklenmiyor.');
    window.location.href = 'www.google.com';
  }
     
  };

  // if (getMobileOperatingSystem() === "iOS") {
  //   appLink = "emlakjetapp://";
  // } else if (getMobileOperatingSystem() === "Android") {
  //   appLink = "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";
  // }

  return (
    <div className="container">
      <head>
        <title>Test</title>
        <meta charset="UTF-8" />
        <meta
          name="apple-itunes-app"
          content="app-id=1194656334, app-argument=myURL"
        />
      </head>
      {first}
      <button onClick={openApp}>
        Open mobile app
      </button>
    </div>
  );
};

export default About;
