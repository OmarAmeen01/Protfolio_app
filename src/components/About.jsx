import react, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import profilePic from "../assets/omar ameen blog.jpg";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function About() {
  const [shouldScroll, setShouldScroll] = useState(false);
  const [isMiddle, setIsInMiddle] = useState(false);
  const textBlock = useRef(null);
  const describe =
    "As an ambitious student transforming from the field of business adminstration to software development, my objective is to leverage my analytical skills and passion for technology to solve complex problems. I am eager to apply my knowledge of programming and web development fundamentals to create impactful solutions. My goals is to contribute to the development of web applications as a Front End Developer . utilizing my proficiency in ReactJS , Tailwind CSS responsive desing to ehance user Experience and drive business success.";

  const [scale, setScale] = useState(3);
  const describeArr = describe.split(" ");
  useEffect(() => {
    function handleScaleOnResize() {
      setScale(Math.floor(window.innerWidth / 100));
    }
    handleScaleOnResize();
    window.addEventListener("resize", handleScaleOnResize);
    return () => {
      window.removeEventListener("resize", handleScaleOnResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInMiddle(true);
        } else {
          setIsInMiddle(false);
        }
      });
    };

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (textBlock.current) {
      observer.observe(textBlock.current);
    }
    const scrollHandler = () => {
      // Re-observe the target element when scrolling
      if (textBlock.current) {
        observer.observe(textBlock.current);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup
    return () => {
      if (textBlock.current) {
        observer.unobserve(textBlock.current);
      }
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isMiddle]);

  const isLoaded = useSelector((state) => state.isLoaded);
  const timeline = gsap.timeline({});
  //triggering scroll of hero section on the basis of device width

  useEffect(() => {
    if (window.innerWidth >= 550) {
      setShouldScroll(true);
    } else {
      setShouldScroll(false);
    }
  }, [window.innerWidth]);
  useGSAP(() => {
    if (isLoaded) {
      gsap.to(
        "#imageDiv",

        {
          opacity: 1,
          scale: scale,
        }
      ),
        gsap.to(".name", {
          opacity: 100,
          right: 12,
          delay: 2,
          ease: "power1.inOut",
        });
    }
  }, [isLoaded, scale]);

  // scroll effect for  about section

  useGSAP(() => {
    isMiddle &&
      gsap.to("#textBlock", {
        duration: 2,
        text: describe,
        ease: "power1.inOut",
      });
  }, [isMiddle]);

  useGSAP(() => {
    shouldScroll &&
      gsap.to("#hero", {
        xPercent: 30,
        yPercent: 90,
        scale: 0.4,
        duration: 200,
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom center",
          end: "bottom 90%",
          scrub: 1,
        },
      });
  }, [shouldScroll]);

  return (
    <section id="profile" className="relative ">
      <article
        id="hero"
        className={`w-${innerWidth}px overflow-hidden h-[90vh] relative  rounded-3xl p-8 mx-2 `}
      >
        <div
          id="imageDiv"
          className={`  w-60 scale-[${Number(scale)}] mt-[100px] opacity-0 `}
        >
          <img
            id="image"
            src={profilePic}
            className=" object-cover  
            rounded-lg relative top-8 m-auto  h-50 w-60 sm:scale-[.7]
            sm:top-5 min-[400px]:scale-[.7]
            min-[400px]:top-3 md:scale-[.5]
            md:top-4 sm:ml-8
            xl:scale-x-[.5]
            xl:scale-y-[.4]


            xl:top-3
            xl:ml-8
            "
            alt="hero icon"
          />
        </div>

        <h2 className="text-white font-wSup  tracking-widest absolute  bottom-[90px] text-3xl -right-80 opacity-0 name">
          OMAR AMEEN
        </h2>
        <p className="absolute text-white font-wHev tracking-widest bottom-[60px]  opacity-0 text-2xl -right-80 name">
          Front end developer
        </p>
      </article>

      <article id="Aboutme" className="p-3   mb-[100px]">
        <h2 className="text-white font-wBold text-3xl text-center p-2   mb-2">
          About Me
        </h2>
        <div className="flex gap-4">
          <div id="describe">
            <p
              id="textBlock"
              ref={textBlock}
              className="text-[#94a3b8] font-Mplus text-lg text-left p-2"
            ></p>
          </div>
          {shouldScroll && (
            <div
              id="placeholder"
              className="w-[2500px] md:w-[3000px] p-2"
            ></div>
          )}
        </div>
      </article>
    </section>
  );
}

export default About;
