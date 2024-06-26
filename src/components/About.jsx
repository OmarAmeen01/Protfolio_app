import react, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import profilePic from "../assets/omar ameen blog.jpg";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function About() {

  const textBlock = useRef(null);
  const describe =
    `A Full stack developer who codes for ambition and not to get a job. I love to interact with computers and mess around with them. I want explore every field of computer science  and build super cool projects.In short I want enjoy the Art of computer science
    `;

  // const [scale, setScale] = useState(3);
  // const describeArr = describe.split(" ");
  // useEffect(() => {
  //   function handleScaleOnResize() {
  //     setScale(Math.floor(window.innerWidth / 100));
  //   }
  //   handleScaleOnResize();
  //   window.addEventListener("resize", handleScaleOnResize);
  //   return () => {
  //     window.removeEventListener("resize", handleScaleOnResize);
  //   };
  // }, [window.innerWidth]);

  // useEffect(() => {
  //   const handleIntersection = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsInMiddle(true);
  //       } else {
  //         setIsInMiddle(false);
  //       }
  //     });
  //   };

  //   const options = {
  //     root: null, // Use the viewport as the root
  //     rootMargin: "0px", // No margin
  //     threshold: 0.5, // 50% of the element is visible
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   if (textBlock.current) {
  //     observer.observe(textBlock.current);
  //   }
  //   const scrollHandler = () => {
  //     // Re-observe the target element when scrolling
  //     if (textBlock.current) {
  //       observer.observe(textBlock.current);
  //     }
  //   };

  //   window.addEventListener("scroll", scrollHandler);

  //   // Cleanup
  //   return () => {
  //     if (textBlock.current) {
  //       observer.unobserve(textBlock.current);
  //     }
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, [isMiddle]);

  // const isLoaded = useSelector((state) => state.isLoaded);
  // const timeline = gsap.timeline({});
  // //triggering scroll of hero section on the basis of device width

  // useEffect(() => {
  //   if (window.innerWidth >= 550) {
  //     setShouldScroll(true);
  //   } else {
  //     setShouldScroll(false);
  //   }
  // }, [window.innerWidth]);
  // useGSAP(() => {
  //   if (isLoaded) {
  //     gsap.to(
  //       "#imageDiv",

  //       {
  //         opacity: 1,
  //         scale: scale,
  //       }
  //     ),
  //       gsap.to(".name", {
  //         opacity: 100,
  //         right: 12,
  //         delay: 2,
  //         ease: "power1.inOut",
  //       });
  //   }
  // }, [isLoaded, scale]);

  // // scroll effect for  about section

  // useGSAP(() => {
  //   isMiddle &&
  //     gsap.to("#textBlock", {
  //       duration: 2,
  //       text: describe,
  //       ease: "power1.inOut",
  //     });
  // }, [isMiddle]);

  // // useGSAP(() => {
  // //   shouldScroll &&
  // //     gsap.to("#hero", {
  // //       xPercent: 30,
  // //       yPercent: 90,
  // //       scale: 0.4,
  // //       duration: 200,
  // //       scrollTrigger: {
  // //         trigger: "#hero",
  // //         start: "bottom center",
  // //         end: "bottom 90%",
  // //         scrub: 1,
  // //       },
  // //     });
  // // }, [shouldScroll]);

  return (
    <section id="profile" className="relative mx-8 mt-8 sm:mx-24 sm:mt-10">
     

      <article id="Aboutme" className="p-3 flex gap-20 max-[950px]:flex-col ">
       <div
          id="imageDiv"
          className="flex justify-center"
        >
          <img
            id="image"
            src={profilePic}
            className=" object-cover  
            rounded-lg h-[300px] min-w-[300px] 
            "
            alt="hero icon"
          />
        </div>  
        <div className="flex gap-4">
          <div id="describe">
          <h2
            id="AboutHeader"
            className="text-green-500 text-xl text-left sm:text-3xl tracking-wide p-4 sm:text-center relative "
          >
           I'm Omar Ameen
          <p className="text-white text-lg text-left sm:text-xl  sm:text-center sm:pl-16 font-wMed tracking-widest  ">
          Fullstack developer
        </p>
          </h2>
            <p
              id="textBlock"
              ref={textBlock}
              className="text-[#94a3b8] font-Mplus text-lg text-left p-2 "
            >

              {describe}
            </p>
          </div>

          
        </div>
       
      </article>

    
     
    

    </section>
  );
}

export default About;
