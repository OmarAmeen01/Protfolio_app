import { useEffect, useId, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useDispatch } from "react-redux";
import { setLoaded as loadfn } from "../store/portSlice";
import gsap from "gsap";
function Overlay() {
  const [loader, setLoader] = useState(0);
  const dispatch = useDispatch();
  // making the bars for preloader
  const windowWidth = window.innerWidth;
  const noOfBars = windowWidth / 176;
  const barArr = [];

  for (let i = 0; i <= noOfBars; i++) {
    barArr.push(i);
  }

  useEffect(() => {
    if (loader <= 98) {
      setTimeout(() => {
        setLoader((prev) => prev + 2);
      }, 25);
    }
    if (loader === 98) {
      dispatch(loadfn(true));
    }
  }, [loader]);

  // animation
  const timeline = gsap.timeline({ zIndex: -20 });
  useGSAP(() => {
    if (loader === 98) {
      gsap.to(".loader", {
        x: 100,
        opacity: 0,
        zIndex: -20,
      });
      gsap.to(".bar", {
        height: 0,
        stagger: 0.2,
        onComplete: () => {
          timeline.play();
        },
      });
      timeline.to("#overlay", {
        zIndex: -20,
      });
    }
  }, [loader]);

  const id = useId();
  return (
    <div id="overlay" className="fixed top-0 z-50 left-0  w-[100vw] h-[100vh]">
      <div className="h-[100vh] flex">
        {barArr.map((item) => {
          return <div key={id} className="bar bg-white w-44 h-[100vh]  "></div>;
        })}
      </div>
      <p className="absolute loader bottom-10 right-3 p-3 font-wHev text-[80px] z-[1]">
        {loader}%
      </p>
    </div>
  );
}

export default Overlay;
