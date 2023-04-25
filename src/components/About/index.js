import { useEffect } from "react";
import { useState } from "react";
import "./hstyle.scss";
// import Imgg from "./me.jpeg"

const IosDeepLink = "emlakjetapp://";
const androidDeepLink = "ejapp://";
const IosStoreUrl =
  "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr";
const androidStoreUrl =
  "intent://android_app/#Intent;scheme=android_app;package=com.emlakjet.kurumsal.sekizbit;end";

const setLink = (deeplink, storeUrl) => {
  // const isChrome = navigator.userAgent.toLowerCase().indexOf("crios") > -1;
  const userAgent = navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('chrome') > -1 || userAgent.indexOf('firefox') > -1){
    window.location = deeplink;

  }
  // if (deeplink === androidDeepLink || (deeplink === IosDeepLink && isChrome)) {
  //   window.location = deeplink;
  // }
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

const About = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    setDevice(navigator.userAgent);
  }, []);
  return (
    <div className="container">
      {device}
      <button onClick={openApp}>Uygulama aç</button>
    </div>
  );
};

export default About;
