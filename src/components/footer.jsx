import { useState } from "react";
import Button from "./button";
import Form from "./form";

function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked && (
        <Form
          onClick={() => {
            setIsClicked(false);
          }}
        />
      )}
      <section
        id="contact"
        className="bg-black p-3 mb-20 sm:footerStyle rounded-t-lg flex gap-3  justify-between pb-11"
      >
        <div id="address" className="flex flex-col gap-3">
          <Button
            onClick={() => {
              setIsClicked(true);
            }}
            innerText="Connect"
            className="w-28"
          />
          <p className="text-[#828ead]">
            Jammu and Kashmir, Anantnag, Doonipawa, 192101
          </p>
        </div>

        <ul className="flex gap-1 px-3 items-end max-[550px]:flex-col p- ">
          <li className="text-[#828ead] hover:text-[#c9d4f4]">
            <a href="https://github.com/OmarAmeen01" target="_blank">
              Github
            </a>
          </li>
          <li className="text-[#828ead] hover:text-[#c9d4f4]">
            <a
              href="https://www.linkedin.com/in/omar-ameen-942a93234/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-[#828ead] hover:text-[#c9d4f4] text-left">
            <a href="https://twitter.com/omarAmeen_" target="_blank">
              Twitter
            </a>
          </li>
          <li className="text-[#828ead] hover:text-[#c9d4f4] text-left">
            <a href="https://www.instagram.com/omarameen_dev/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
