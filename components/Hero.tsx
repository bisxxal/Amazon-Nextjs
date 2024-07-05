"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroCard from "./HeroCard";

function Hero() {
  return (
<div className=" relative">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 40000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true, 
      }}

      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-screen overflow-hidden"
      >
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b1.jpg' width={100000} height={130000}  alt="" /></SwiperSlide>
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b2.jpg' width={100000} height={130000} alt="" /></SwiperSlide>
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b3.jpg' width={100000} height={130000} alt="" /></SwiperSlide>
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b4.jpg' width={100000} height={130000} alt="" /></SwiperSlide>
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b5.jpg' width={100000} height={130000} alt="" /></SwiperSlide>
    <SwiperSlide className=' relative flex justify-center items-center'><Image className=' rounded-md h-full object-center' src='/b6.jpg' width={100000} height={130000} alt="" /></SwiperSlide>
    </Swiper>

    <div className=" flex w-full justify-between  absolute z-[2] bottom-[-10px] px-7">
    <HeroCard/>
    <HeroCard/>
    <HeroCard/>
    <HeroCard/>
    </div>
</div>
  )
}

export default Hero