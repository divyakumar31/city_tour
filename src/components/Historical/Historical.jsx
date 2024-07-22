import React from 'react';
import "./Historical.css";
import Adalaj from "../../assets/Adalaj.png";
import BhadraFort from "../../assets/BhadraFort.png";
import DadaHarirNiVav from "../../assets/DadaHarirNiVav.png";
import JhultaMinar from "../../assets/JhultaMinar.png";
import RaniKiVav from "../../assets/RaniKiVav.png";
import Sabarmati from "../../assets/Sabarmati.png";
import SarkhejRoza from "../../assets/SarkhejRoza.png";
import TeenDarwaza from "../../assets/TeenDarwaza.png";

const Historical = () => {
  return (
    <>
      <div className="title title-font font">Historical Places</div>

      <div className='main-div'>
          <div>
            <img className='card-pic' src={Adalaj} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={BhadraFort} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={DadaHarirNiVav} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={JhultaMinar} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={RaniKiVav} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={Sabarmati} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={SarkhejRoza} alt="photo" />
          </div>
          <div>
            <img className='card-pic' src={TeenDarwaza} alt="photo" />
          </div>
      </div>
    </>
  )
}

export default Historical