import { useEffect } from "react";
import { useState } from "react";
// import { isMobileSafari } from 'react-device-detect';

import "./hstyle.scss";
// import Imgg from "./me.jpeg"

const IosDeepLink = "emlakjetapp://";
const androidDeepLink = "ejapp://";
const IosStoreUrl =
  "https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334?l=tr";
const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.emlakjet.kurumsal.sekizbit&hl=tr";

const setLink = (deeplink, storeUrl) => {
  // const isChrome = navigator.userAgent.toLowerCase().indexOf("crios") > -1;
  // const isSafari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Version") !== -1;
  // const isSafariAndroid = navigator.userAgent.indexOf("Chrome") === -1 && navigator.userAgent.indexOf("Version") !== -1;
//   if(!isSafari || (deeplink === androidDeepLink && !isSafariAndroid)){
//     window.location = deeplink;
// }

if(deeplink !== androidDeepLink){
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
