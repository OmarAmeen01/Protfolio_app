import { useEffect, useState, useRef } from "react";
import blogThumb from "../assets/blog.jpg";
import blogSignIn from "../assets/blog sign in.jpg";
import blogAddPost from "../assets/post addition .jpg";
import simmonGame from "../assets/simmon game.jpg";
import TodoThumb from "../assets/toDo app.jpg";
import todoRemove from "../assets/to do remove.jpg";
import todoJelly from "../assets/todo jelly.jpg";
import weatherIcon from "../assets/weather app.jpg";
import weatherGraph from "../assets/weather graph.jpg";
import weatherTimly from "../assets/day and hour service.jpg";

import Button from "./button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectDetails from "./projectDetail";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    id: 0,
    name: "Giga Blog",
    description: `Welcome to our blog website, where users can sign in to create, read, update, and delete (CRUD) their posts. Whether you're a seasoned writer or just starting out, our platform offers a seamless experience for sharing your thoughts, experiences, and expertise with the world.
    Upon signing in, users gain access to a personalized dashboard where they can manage their profile, view their posts, and interact with other users. The intuitive interface makes it easy to compose new posts, edit existing ones, and delete content as needed.`,
    builtWith: [
      "React",
      "Redux",
      "Tinymce",
      "React-hook-form",
      "React Router",
      "Appwrite",
      "Tailwindcss",
    ],
    features: [
      "Post-Deletion",
      "Post-Addition",
      "Post-Updation",
      "User-Authentication",
      "Baas",
    ],
    images: [blogThumb, blogAddPost, blogSignIn],
    link: "https://blog-website-cyan-one.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/Blog-website",
  },
  {
    id: 1,
    name: "Weather App",
    description:
      "This was my Javascript mega project built entirely in javascript which makes api calls to get weather of typed city it also has history feature which enables you to see which cities you have searched for and enables you to revist them. This app integrates chartJs to describe data in graphs and shows weather in hourly and daily basis",
    builtWith: ["Open weather api", "Javascript", "Html", "CSS"],
    features: [
      "Api-Calling",
      "Timly-updates",
      "Pressure-Graph",
      "Rain-Gaph",
      "Temprature-Graph",
      "Humidity-Graph",
    ],
    images: [weatherIcon, weatherGraph, weatherTimly],
    link: "https://weatherom.netlify.app/",
    githubLink: "https://github.com/OmarAmeen01/weather-app",
  },
  {
    id: 2,
    name: "Todo App",
    description:
      "This app let you craft your magical lists be it shoping list or your favourites or it can you your task this app does it all ",
    builtWith: ["React", "Redux", "TailwindCss"],
    features: ["Task Creation", "Task updation", "Task deletion"],
    images: [TodoThumb, todoRemove, todoJelly],
    link: "https://to-do-app-sandy-five.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/To-do-app",
  },
  {
    id: 3,
    name: "Simmon game",
    description:
      "The website offers a digital version of the classic Simon game, where users can test their memory and reflexes by repeating increasingly complex sequences of lights and sounds. Players can challenge themselves to beat their high scores or compete with friends for the top spot on the leaderboard. With intuitive controls and nostalgic gameplay, it provides a fun and engaging experience for all ages.",
    builtWith: ["Jquery", "Javascript", "Html", "CSS"],
    features: [
      "Pattern-Recognization",
      "Pattern-Memorization",
      "Restart-Features",
    ],
    images: [simmonGame],
    link: "https://simon-game-pink.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/simon-game",
  },
];
function Projects() {
  const [getId, setId] = useState("");
  const [isPaused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      "#project",
      {
        x: -200,
        opacity: 0,
        skew: 60,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 200,
        scrollTrigger: {
          trigger: "#project",

          start: "top 40%",
          end: "top 10%",
          scrub: 0.5,
        },
        ease: "sine.in",
      }
    );
  });
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section id="porjects" className="mt-5">
      <p className="text-2xl  tracking-widest font-Mplus text-center p-3 mt-2 text-white font-extrabold ">
        Projects
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        ref={swiperRef}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper relative max-[450px]:h-[450px] h-[400px] mx-5 mb-40 shadow-lg shadow-black  "
        preventClicks={false}
      >
        {projects.map((project) => {
          return (
            <>
              <SwiperSlide
                id={project.id}
                key={project.id}
                className="bg-[#172a46] mb-40 rounded-lg projCard  outline-2  relative  p-2"
              >
                {project.id === getId ? (
                  <SwiperSlide className="absolute z-50 ">
                    <ProjectDetails
                      name={project.name}
                      images={project.images}
                      description={project.description}
                      features={project.features}
                      builtWith={project.builtWith}
                      link={project.link}
                      githubLink={project.githubLink}
                      onClick={() => {
                        setId("");
                        swiperRef.current.autoplay.start();
                      }}
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )}
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="h-[200px] w-full  object-cover object-top bg-[#44669a]  rounded-lg p-2"
                />

                <div className=" border-t-2 border-black ">
                  <h2
                    onClick={() => {
                      setId(project.id);
                    }}
                    className="font-bold text-lg font-Mplus p-2 text-[#c9d4f4]"
                  >
                    {project.name}
                  </h2>
                  <p className="text-md p-2 font-Mplus text-[#828ead]">
                    {project.description.slice(0, 110) + " " + "...."}
                  </p>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setId(project.id);

                    swiperRef.current.autoplay.stop();
                  }}
                  className="mt-3 text-[#828ead] shadow-sm shadow-gray-500"
                  innerText="View more"
                />
              </SwiperSlide>
            </>
          );
        })}
        <div
          className="autoplay-progress absolute right-5 bottom-[10px]  z-10"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span
            ref={progressContent}
            className=" text-3xl text-cyan-500 font-bold font-mPlus "
          ></span>
        </div>
      </Swiper>
    </section>
  );
}

export default Projects;
