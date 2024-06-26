import React, { useEffect, useRef, useState } from "react";
import git from "../assets/git.svg";
import css from "../assets/css-3.svg";
import html from "../assets/html-1.svg";
import github from "../assets/github-icon-1.svg";
import reactIcon from "../assets/react-2.svg";
import reduxIcon from "../assets/redux.svg";
import tailwindIcon from "../assets/tailwind-css-2.svg";
import typescriptIcon from "../assets/typescript.svg";
import javsriptIcon from "../assets/logo-javascript.svg";
import gsapIcon from "../assets/gsap-greensock.svg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import "Swiper/styles";
import "swiper/css"
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
const cards = [
  {
    name: "Javascript",
    icon: javsriptIcon,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },

  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Redux",
    icon: reduxIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Git",
    icon: git,
  },

  {
    name: "Typescript",
    icon: typescriptIcon,
  },
  {
    name: "Gsap",
    icon: gsapIcon,
  },
];
function Skills() {
  const [isOpen, setOpen] = useState(false);



  return (
    <section id="skills" className="p-2 ">
       <p className="text-3xl max-[514px]:text-2xl max-[514px]:p-8 tracking-widest font-Mplus text-center p-14 mt-2 text-white font-extrabold  -skew-y-6  underline decoration-green-500 decoration-8 underline-offset-8">
          SKI<span className="text-green-500">LLS</span>       
             </p>
      <article className="relative    overflow-hidden ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      
        }
      
    }

   
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      
        className="mySwiper"
      >
       {cards.map(card=>{
        return <SwiperSlide title={card.name} className="swiper-slide bg-white rounded-2xl shadow-[2px_3px_20px_5px_rgba(0,0,0,.6)] max-h-40 max-w-40"><img className="w-25 " src={card.icon} alt={card.name} />
       </SwiperSlide>
     
       })} 

      </Swiper>
    
        
      </article>
    </section>
  );
}

export default Skills;
