import React, { useEffect, useState } from 'react'
import './hstyle.scss'


const About = () => {
  const [first, setfirst] = useState('asd')
  useEffect(() => {
    setfirst(navigator.userAgent)
  }, [])
  
  
  const handleDeeplinkClick = () => {

    window.location.href = "emlakjetapp://";
    setTimeout(function () {
      window.location.href = 'https://apps.apple.com/tr/app/emlakjet-emlak-ara-i-lan-ver/id1194656334';
    }, 25);
  }


  return (
    <div className="container" >
      {first}
      <button
        onClick={() => {
          setTimeout(() => {
            handleDeeplinkClick();
          }, 500);
        }}
      >
        Open mobile app
      </button>
    </div>
  )
};

export default About
