import React from 'react'
import './hstyle.scss'
import Imgg from "./me.jpeg"

const About = () => {
  return (
    <div className="container" >
      <div className="imgdiv">
        <img src={Imgg} alt="" />
        <h2 className="heading-big">Erol Emre Güleç</h2>
        <p className="p1">| Front End Developer |</p>
      </div>
      <p>  asd
        üniversitede c# ve unity ile yazılım ile tanışmış ve ilk oyunumu yapmıştım.
        Üniversiteden mezun olduktan sonra yazılıma bir süre ara verdim ve farklı alanlar
        üzerine çalışmaya başladım ama düşüncelerimde her zaman yazılım
        vardı bir süre farklı alanlarda çalıştıktan sonra Web tasarım ve mobil uygulamalar ilgimi
        çekmeye başladı ve react-native ile mobil projeler geliştirmeye başladım. Mobil uygulamalar yapıyordum ama bunların
        web tarafıda olmalıydı bu sebebten dolayı web tasarım tarafınıda öğrenmek istiyordum ilk olarak html,css ve JavaScript
        ile ilgili udemyden kurslar alarak front-end geliştirmeler yaptım.Şu anda ise react ile web ve mobil uygulamalar
        üzerine çalışmaktayım kariyer hedeflerimde bu alan üzerine yoğunlaşmak ve uzmanlaşmaktır.</p>
      <hr />
    </div>
  )
};

export default About
