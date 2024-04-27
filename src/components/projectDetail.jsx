import { useEffect, useRef, useState } from "react";
import Button from "./button";
import exterlink from "../assets/icons8-external-link.svg";
import github from "../assets/github-icon-1 copy.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function ProjectDetails({
  name,
  description,
  images,
  link,
  features,
  builtWith,
  className,
  onClick,
  ref,
  githubLink,
  ...props
}) {
  const [isClicked, setIsClicked] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".galeryImg",
      {
        y: -100,
        duration: 20,

        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: {
          amount: 0.5,
          axis: "x",
        },
        ease: "sine.inOut",
      }
    );

    gsap.fromTo(
      "#galeryText",
      {
        y: -100,
        duration: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.5,
          axis: "x",
        },
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#featureText",
      {
        y: -100,
        duration: 20,
        delay: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.5,
          axis: "y",
        },
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      ".feature-box",
      {
        y: -100,
        duration: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: {
          amount: 0.8,
          axis: "x",
        },
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#builtText",
      {
        y: -100,
        duration: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.8,
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      ".built-box",
      {
        y: -100,

        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.8,
        stagger: {
          amount: 0.5,
          axis: "x",
        },
        ease: "sine.inOut",
      }
    );
  });
  return (
    <div
      id="main"
      className=" p-3 flex flex-col bg-[#172a46] min-w-[16rem] bottom-[20rem] max-h-[28rem] rounded-lg  mt-[20rem] overflow-y-scroll  max-[380px]:min-h-[30rem] relative z-20 pb-16"
    >
      <h2
        id="galeryText"
        className="p-2 text-md font-bold Text font-Mplus text-[#c9d4f4] "
      >
        Gallery
      </h2>
      <div className="flex  shrink gap-2 p-3 justify-center max-[650px]:grid max-[650px]:grid-cols-2  ">
        {images.map((image) => {
          return (
            <img
              src={image}
              alt={name}
              className="galeryImg shrink w-48   p-2 object-top  object-contain bg-[#44669a] rounded-lg   "
              onClick={() => setIsClicked(true)}
            />
          );
        })}
      </div>
      <div id="features" className="flex flex-col py-2">
        <div className="flex flex-col p-2">
          <h2
            id="featureText"
            className="p-1  text-md font-bold font-mplus text-[#c9d4f4]"
          >
            Features
          </h2>
          <ul className="grid grid-cols-3 gap-2 sm:flex  max-[450px]:grid-cols-2">
            {features.map((feature) => {
              return (
                <li className="border feature-box  flex-shrink border-green-500 py-2 text-sm font-Mplus rounded-lg px-2  text-[rgb(157,169,199)]">
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-2 flex flex-col">
          <h2
            id="builtText"
            className="p-1 text-md font-bold font-mplus  text-[#c9d4f4]"
          >
            Built with
          </h2>
          <ul className="grid grid-cols-3 gap-3 sm:flex max-[450px]:grid-cols-2 ">
            {builtWith.map((tech) => {
              return (
                <li className="flex-shrink border border-green-500 built-box py-2  text-sm font-Mplus rounded-lg px-1 text-[rgb(157,169,199)]">
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex">
        <div id="title" className="py-2">
          <h2 className="p-2 text-md font-bold  font-Mplus text-[#c9d4f4] ">
            {name}
          </h2>
          <div id="links" className="flex  p-2 w-[100px] h-[50px]">
            <a
              href={link}
              target="_blank"
              className="block w-[9rem] hover:text-black p-2  underline text-md font-Mplus font-bold group relative"
            >
              <img
                src={exterlink}
                alt=""
                className="w-8  transition-all duration-200 ease-in-out hover:scale-105"
              />
              <p className="bg-black text-white font-Mplus text-sm p-2 rounded-md  absolute top-14 opacity-0 group-hover:opacity-100 hover left-0">
                Site
              </p>
            </a>
            <a
              href={githubLink}
              target="_blank"
              className="block w-[9rem] hover:text-black p-2  underline text-md font-Mplus font-bold text-green-500 relative group "
            >
              <img
                src={github}
                alt=""
                className="w-8 h-20 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-85 "
              />
              <p className="bg-black text-white font-Mplus text-sm p-2 rounded-md  absolute top-14 opacity-0 group-hover:opacity-100 hover left-0">
                Github
              </p>
            </a>
          </div>
          <p className=" text-md font-Mplus p-2 text-left text-[rgb(157,169,199)] ">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={onClick}
        className=" text-4xl top-0 right-5 sm:right-16 group  rounded-full w-[35px] h-[35px]  aspect-square hover:opacity-95 font-bold absolute text-white "
      >
        <p className=" absolute top-10 right-0 p-2 rounded-md text-sm  bg-black text-white group-hover:opacity-100 opacity-0">
          close
        </p>
        <ion-icon name="close-circle"></ion-icon>
      </button>
    </div>
  );
}

export default ProjectDetails;
