/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import "./hstyle.scss";

const About = () => {
  const [first, setfirst] = useState("asd");
  useEffect(() => {
    setfirst(navigator.userAgent);
  }, []);

  const IosDeepLink = 'emlakjetapp://'; // Uygulamanız için belirlediğiniz özel URL şeması
  const androidDeepLink = 'ejapp://'; // Uygulamanız için belirlediğiniz özel URL şeması
  const IosStoreUrl = 'https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr'; // Uygulamanızın App Store veya Google Play Store bağlantısı
  const androidStoreUrl = 'intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end';
  
const setLink = (deeplink, storeUrl) => {
  window.location = deeplink;

  setTimeout(() => {
    // eslint-disable-next-line eqeqeq
    if (navigator.userAgent.toLowerCase().includes('chrome') === false) {
      if (confirm('App Store ile aç')) {
        window.location.href = deeplink;
      } else {
        window.location.reload();
      }
    } else {
      window.location.href = storeUrl;
    }
  }, 500);
};

const openApp = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('android') > -1) {
    setLink(androidDeepLink, androidStoreUrl);
  } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) {
    setLink(IosDeepLink, IosStoreUrl);
  }
};

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
