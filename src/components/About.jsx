import { useRef } from "react";
import profilePic from "../assets/omar ameen blog.jpg";


function About() {

  const textBlock = useRef(null);
 const about = {
  describe:`I am a passionate Full Stack Developer driven by ambition rather than just employment. My enthusiasm lies in interacting with computers and exploring their vast potential. I thrive on the diversity within computer science and refuse to confine myself to a single specialization.`,
    role:"Full stack developer"
 }

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
         {about.role}
        </p>
          </h2>
            <p
              id="textBlock"
              ref={textBlock}
              className="text-[#94a3b8] font-Mplus text-lg text-left p-2 "
            >

              {about.describe}

            </p>
          </div>

          
        </div>
       
      </article>

    
     
    

    </section>
  );
}

export default About;
