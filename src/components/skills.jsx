import React, { useEffect, useRef, useState } from "react";
import git from "../assets/git.svg";
import css from "../assets/css-3.svg";
import html from "../assets/html-1.svg";
import github from "../assets/github-icon-1.svg";
import reactIcon from "../assets/react-2.svg";
import reduxIcon from "../assets/redux.svg";
import tailwindIcon from "../assets/tailwind-css-2.svg";
import arrowUp from "../assets/arrowhead-up-svgrepo-com.svg";
import arrowDown from "../assets/arrowhead-down-svgrepo-com.svg";
import typescriptIcon from "../assets/typescript.svg";
import javsriptIcon from "../assets/logo-javascript.svg";
import gsapIcon from "../assets/gsap-greensock.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
];
const cards2 = [
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
  const cardRef = useRef(null);
  const cardRef2 = useRef(null);

  useGSAP(() => {
    const cardsArr1 = gsap.utils.toArray(cardRef.current.children);

    const cardsArr2 = gsap.utils.toArray(cardRef2.current.children);
    cardsArr1.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          transform: `translate3d(${index * 140}px,0px,-${(index + 1) * 30}px)`,
          rotateY: 6,
          zIndex: -index,

          ease: "power1.inOut",
        },
        {
          transform: `translate3d(${index * 30}px,0px,-${(index + 1) * 16}px)`,
          rotateY: 6,
          zIndex: -index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",

            end: "bottom center",

            scrub: true,
          },

          ease: "power1.inOut",
        }
      );
    });

    cardsArr2.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          transform: `translate3d(-${index * 110}px,0px,-${
            (index + 1) * 10
          }px)`,
          rotateY: 6,
          repeat: -1,
          zIndex: -index,
        },
        {
          transform: `translate3d(-${index * 10}px,0px,-${(index + 1) * 16}px)`,
          rotateY: 6,

          zIndex: -index,
          scrollTrigger: {
            trigger: card,

            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="  p-2 ">
      <p className="text-2xl  tracking-widest font-Mplus text-center p-3 mt-2 text-white font-extrabold ">
        SKILLS
      </p>
      <article className="relative h-[50vh] min-[910px]:h-[40vh] max-[400px]:h-[40vh] border  overflow-hidden flex flex-col justify-center  ">
        <div id="cards" className=" justify-center flex max-[900px]:flex-col ">
          <div
            ref={cardRef}
            className="cards1 flex gap-3  flex-row-reverse  perspective-400 perspective-origin-left  py-2 "
          >
            {cards.map((card) => {
              return (
                <div
                  key={card.name}
                  className={`card shrink grow
               grid place-items-center bg-white rounded-lg p-3 border max-[400px]:p-1 shadow-xl shadow-black`}
                >
                  <img
                    src={card.icon}
                    alt={card.name}
                    className="max-[400px]:w-8 min-[400px]:w-9 lg:w-14 xl:w-16  min-[900px]:w-14"
                  />

                  <div id="iconName">
                    <p className="  font-bold tracking-wider font-Mplus text-center p-1 mt-2 text-sm   lg:text-xl xl:text-2xl  min-[900px]:text-lg">
                      {card.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            ref={cardRef2}
            className="card2 flex gap-3 px-2 
           perspective-400 perspective-origin-left "
          >
            {cards2.map((card) => {
              return (
                <div
                  key={card.name}
                  className={`card shrink grow
                  grid place-items-center bg-white rounded-lg p-3 border  shadow-xl shadow-black max-[400px]:p-1`}
                >
                  <img
                    src={card.icon}
                    alt={card.name}
                    className="max-[400px]:w-8 min-[400px]:w-9 lg:w-14 xl:w-16  min-[900px]:w-14"
                  />

                  <div id="iconName">
                    <p className="text-sm font-bold tracking-wider font-Mplus text-center p-1 mt-2 max-[400px]:text-sm lg:text-xl xl:text-2xl  min-[900px]:text-lg">
                      {card.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Skills;
