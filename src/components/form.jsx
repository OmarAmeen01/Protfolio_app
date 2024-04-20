import Button from "./button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
function Form({ onClick }) {
  useGSAP(() => {
    gsap.fromTo(
      "#form",
      {
        height: 0,
        opacity: 0.5,
        borderRadius: "100%",
        duration: 200,
      },
      {
        height: 515,
        opacity: 1,
        borderRadius: "8px",
      }
    );
    gsap.fromTo(
      ".Text",
      {
        x: -200,
        opacity: 0,

        borderRadius: "100%",
        duration: 200,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        borderRadius: "8px",
        stagger: {
          amount: 0.8,
          axis: "x",
        },
      }
    );
    gsap.fromTo(
      ".btn",
      {
        y: 200,
        opacity: 0,

        borderRadius: "100%",
        duration: 200,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.5,
        borderRadius: "8px",
        stagger: {
          amount: 0.5,
          axis: "x",
        },
      }
    );
  });
  return (
    <div className=" bg-[rgba(0,0,0,.5)] w-full h-[100vh]  flex item-end fixed  top-0 left-0 z-10 justify-center items-center">
      <form
        action="https://public.herotofu.com/v1/fcedf5f0-f246-11ee-96b6-0d5b8cafec4b"
        method="post"
        accept-charset="UTF-8"
        id="form"
        className="bg-[#172a46] w-auto p-5 rounded-lg  max-h-[420px] -mt-4 max-[650px]:mb-20  "
      >
        <div>
          <label
            htmlFor="name"
            className="text-[#c9d4f4] Text  font-bold font-mPlus p-2 "
          >
            Your Name
          </label>
          <input
            name="Name"
            id="name"
            type="text"
            required
            placeholder="Enter your name "
            className="p-2 rounded-md Text mt-1 font-mPlus w-full outline-2 outline-green-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-[#c9d4f4] Text font-bold font-mPlus p-2 "
          >
            Your Email
          </label>
          <input
            name="Email"
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="p-2 rounded-md Text mt-1 font-mPlus w-full outline-2 outline-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-[#c9d4f4] Text font-bold font-mPlus p-2 "
          >
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="What's your message?"
            className="p-2 rounded-md Text mt-1 font-mPlus  outline-2 w-full outline-green-500"
          ></textarea>
        </div>
        <div className="flex justify-between btn p-3 ">
          <div className="border border-green-500  relative group overflow-hidden rounded-lg">
            <input
              type="submit"
              value="Submit"
skills
              className="text-[#828ead] bg-transparent btn font-semibold rounded-lg inline-block peer font-mPlus hover:text-[#c9d4f4] p-2 "
main
            />
            <span
              className="w-28 h-12 bg-green-500 absolute transiton-all duration-200 ease-in-out 
           top-0 -left-40
           group-hover:left-0 z-[-1]"
            ></span>
          </div>
          <Button onClick={onClick} innerText="Close" className="btn " />
        </div>
      </form>
    </div>
  );
}

export default Form;
