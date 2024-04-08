import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function MousePosition() {
  useGSAP(() => {
    gsap.fromTo(
      "#cursor",
      {
        duration: 200,
        borderRadius: "8px",
        rotate: 360,
      },
      {
        borderRadius: "50%",
        repeat: -1,
        rotate: 360,
        duration: 3,
        ease: "power4.inOut",
      }
    );
  });
  const [cords, setcords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    setcords({ x: clientX, y: clientY });
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{ left: cords.x, top: cords.y }}
        id="cursor"
        className={`z-[-10] fixed bg-gradient-to-r blur-3xl  pointer-events-none h-80 rounded-full aspect-square  from-indigo-500 via-purple-500 to-pink-500`}
      ></div>
    </>
  );
}

export default MousePosition;
