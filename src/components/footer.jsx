import { useState } from "react";
import Button from "./button";
import Form from "./form";

function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="p-3 mb-20 sm:footerStyle rounded-t-lg flex gap-3 mx-14 justify-evenly pb-11 max-[760px]:con-sec max-[350px]:mx-0"
      >
        <div id="address" className="flex flex-col  gap-8 mr-10">
          <h2 className="text-white text-3xl max-[380px]:text-2xl tracking-wide ">
            Connect with me
          </h2>
          <div className="address flex gap-3">
            <ion-icon name="location-outline"></ion-icon>
            <p className="text-[#828ead] text-lg">Planet Earth 🌍</p>
          </div>

          <a
            href="mailto:omarameenlone@gmail.com"
            className="address cursor-pointer flex gap-3"
          >
            <ion-icon name="mail-outline"></ion-icon>
            <p className="text-[#828ead] text-lg hover:text-green-500 ">
              omarameenlone@gmail.com
            </p>
          </a>

          <ul className="flex gap-6  ">
            <li className="text-[#828ead] hover:text-[#c9d4f4]">
              <a
                href="https://github.com/OmarAmeen01"
                target="_blank"
                title="Github"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li className="text-[#828ead] hover:text-[#c9d4f4]">
              <a
                href="https://www.linkedin.com/in/omar-ameen-942a93234/"
                target="_blank"
                title="LinkedIn"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="text-[#828ead] hover:text-[#c9d4f4] text-left">
              <a
                href="https://twitter.com/omarAmeen_"
                target="_blank"
                title="Twitter"
              >
                <ion-icon name="logo-xing"></ion-icon>
              </a>
            </li>
            <li className="text-[#828ead] hover:text-[#c9d4f4] text-left">
              <a
                href="https://www.instagram.com/omarameen_dev/"
                target="_blank"
                title="Instgram"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <form
          action="https://public.herotofu.com/v1/fcedf5f0-f246-11ee-96b6-0d5b8cafec4b"
          method="post"
          accept-charset="UTF-8"
          id="form"
          className=" max-w-[600px] w-full mb-20 rounded-lg  max-h-[420px] -mt-4 max-[650px]:mb-20   "
        >
          <h2
            id="formHeader"
            className="text-green-500 text-3xl tracking-wide p-4 text-center relative "
          >
            Contact me
          </h2>

          <input
            name="Name"
            id="name"
            type="text"
            required
            placeholder="Enter Full Name"
            className="bg-[#171f38] text-white rounded-lg Text text-xl mt-1 font-mPlus w-full outline-1 outline-green-500 mb-2 p-4"
          />

          <input
            name="Email"
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mb-2 text-white p-4 bg-[#171f38] rounded-lg Text text-xl mt-1 font-mPlus w-full outline-1 outline-green-500 "
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="What's your message?"
            className="mb-2 p-4 bg-[#171f38] rounded-lg Text text-xl mt-1 font-mPlus w-full outline-1 
            text-white outline-green-500"
          ></textarea>

          <input
            type="submit"
            value="Send message"
            className=" bg-blue-500 btn  rounded-lg inline-block peer text-xl text-center font-mPlus text-[#c9d4f4] p-2 w-full hover:opacity-80 "
          />
        </form>
      </section>
    </>
  );
}

export default Footer;
