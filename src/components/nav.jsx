import profile from "../assets/profile-svgrepo-com.svg";
import skill from "../assets/pie-chart-svgrepo-com.svg";
import project from "../assets/stack-svgrepo-com.svg";
import contact from "../assets/contacts-svgrepo-com.svg";

import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  const isLoaded = useSelector((state) => state.isLoaded);

  useGSAP(() => {
    if (isLoaded) {
      gsap.fromTo(
        "#nav",
        {
          bottom: -350,
        },
        {
          duration: 2,
          ease: "bounce.in",
          bottom: 0,
        }
      );
    }
  }, [isLoaded]);

  const navItems = [
    {
      name: "Profile",
      link: "#profile",
      icon: profile,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: skill,
    },
    {
      name: "Projects",
      link: "#porjects",
      icon: project,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: contact,
    },
  ];
  const location = useLocation();

  return (
    <nav
      id="nav"
      className=" bg-white w-full fixed bottom-[-350px] sm:sidenav rounded-t-lg min-h-20 max-h-20 z-10"
    >
      <div className=" flex justify-between sm:navDiv   p-2">
        {navItems.map((item) => {
          return (
            <HashLink
              smooth
              key={item.name}
              to={item.link}
              className={`cursor-pointer flex flex-col place-items-center gap-1 sm:hashLink group ${
                location.hash === item.link ? "max-[650px]:active" : ""
              }
            `}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="transition-all  duration-500 ease-in-out sm:navImg"
              />

              <span
                className={`text-sm font-wMed  text-center tracking-widest  sm:navLabel 
      `}
              >
                {item.name}
              </span>
            </HashLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
