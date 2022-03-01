import React , { useState , useEffect } from "react";
//Importamos los hooks de redux
import { useDispatch , useSelector } from "react-redux";
//Importar las actions
import{ selectCpuBrand } from '../../actions/index';

//Styles
import './ChooseCpuComponent.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

//Import Assets
import intelLogoAsset from '../../assets/intelLogo.svg';
import amdLogoAsset from '../../assets/amdLogo.svg';

export function ChooseCpuComponent(){

  //Distpach
  const dispatch = useDispatch();

  return(
    <div>
      <h1>Choose Cpu</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay = {{
          delay: 100
        }}

        /*----------------------------------------------------------*/
        onSlideChange={(swiper) => {
          /*swiper.activeIndex es el indice del swiper , en el indice 1
          tenemos el anuncio de scrollear swiper por lo que no haremos nada
          cuando este en dicho index y solo cambiaremos de estado
          cuando este ubicado en el index 0 o 2*/
          switch(swiper.activeIndex){
            //Case 0 es seleccionar Intel
            case 0: {
              dispatch(selectCpuBrand('Intel'));
            }break;
            //Case 1 es no seleccionar nada
            case 1: {
              dispatch(selectCpuBrand(false));
            }break;
            //Case 2 es seleccionar Amd
            case 2: {
              dispatch(selectCpuBrand('Amd'));
            }break;
          }
        }}

        className="swiperChooseCpu"
      >
        <SwiperSlide key={0} className="swiperSlideChooseCpu">
          <img src={intelLogoAsset} alt="" className="chooseCpuLogo"/>
        </SwiperSlide>
        {/*Este Slide estara en el centro , por lo que tendra una clase css distinta*/}
        <SwiperSlide key={1} className="swiperSlideChooseCpuCenter">
          <h2>{'< ChooseCpu >'}</h2>
        </SwiperSlide>
        <SwiperSlide key={2} className="swiperSlideChooseCpu">
          <img src={amdLogoAsset} alt="" className="chooseCpuLogo"/>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default ChooseCpuComponent;