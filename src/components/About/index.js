/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";

import "./hstyle.scss";

const About = () => {
  const [first, setfirst] = useState("asd");
  useEffect(() => {
    setfirst(navigator.userAgent);
  }, []);
  // emlakjet apps deeplinks
  const IosDeepLink = 'emlakjetapp://';
  const androidDeepLink = 'ejapp://';
  const IosStoreUrl = 'https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr';
  const androidStoreUrl = 'intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end';

  const setLink = (deeplink, storeUrl) => {
    const isChrome = navigator.userAgent.toLowerCase().indexOf('crios') > -1;
    if (deeplink === androidDeepLink || (deeplink === IosDeepLink && isChrome)) {
      window.location = deeplink;
    }
    setTimeout(() => {
      window.location.href = storeUrl;
    }, 500);
  };

  const openApp = () => {
    if (/android/i.test(navigator.userAgent)) {
      setLink(androidDeepLink, androidStoreUrl);
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setLink(IosDeepLink, IosStoreUrl);
    }
  };

  // const closeBanner = () => {
  //   const now = new Date().getTime();
  //   localStorage.setItem('smartBannerTime', JSON.stringify(now));
  // };


  return (
    <div className="container">

      {first}
      <button onClick={() => openApp()}>
        Open mobile app
      </button>
    </div>
  );
};

export default About;
