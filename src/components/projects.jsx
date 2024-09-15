import { useState,} from "react";
import blogThumb from "../assets/blog.jpg";
import simmonGame from "../assets/simmon game.jpg"
import blogNation from "../assets/blogPreview.png"
import weatherIcon from "../assets/weather app.jpg";
import exterlink from "../assets/icons8-external-link.svg";
const projects = [
    {
    id: 0,
    name: "BlogNation",
    description:
      "full stack blog app  that has all the features of social media from user profiles, comments likes and rich text editor",
    builtWith: ["React", "TailwindCss","Hono js","Cloudflare worker","prisma","postgreSQl","Editorjs", "Full Stack"],
    image:blogNation,
    link: "https://blog-nation-three.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/Blog_nation",
  },
  {
    id: 1,
    name: "Giga Blog",
    description: `This is the blog app with all the CRUD features built with`,
    builtWith: [
      "React",
      "Tinymce",
      "Appwrite","Tailwindcss"
    ],
    image:blogThumb,
    link: "https://blog-website-cyan-one.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/Blog-website",
  },
  {
    id: 2,
    name: "Weather App",
    description:
      "Checkout the weather of any location using this web app built with",
    builtWith: ["Open weather api", "Javascript", "Html", "CSS"],
    image:weatherIcon,
    link: "https://weatherom.netlify.app/",
    githubLink: "https://github.com/OmarAmeen01/weather-app",
  },

  {
    id: 3,
    name: "Simmon game",
    description:
      "Play the classic simon game build using following technologies",
    builtWith: ["Jquery", "Javascript", "Html", "CSS","Audio API"],
    image:simmonGame,
    link: "https://simon-game-pink.vercel.app/",
    githubLink: "https://github.com/OmarAmeen01/simon-game",
  },
];
function Projects() {
  const [getId, setId] = useState("");

  return (
    <section id="porjects" className="my-5 py-3">
      <p className="text-3xl max-[514px]:text-2xl max-[514px]:p-8 tracking-widest font-Mplus text-center p-14 mt-2 text-white font-extrabold  -skew-y-6  underline decoration-green-500 decoration-8 underline-offset-8">
          CASE <span className="text-green-500">STUDIES</span>       
             </p>
      <div  className="grid mt-6 grid-cols-1 sm:SmStyle lg:lgStyle  flex-wrap gap-6 mx-5">
       {projects.map(project=>{
       return(
       <a href={project.link} target="_blank"> 
         <div className="bg-[#1d294a] sm:min-h-[500px] max-h-[530px] sm:smCard flex flex-col p-6 transition-all duration-500 ease-in-out  hover:scale-105 rounded-xl shadow-md shadow-gray-900">
           <img src={project.image} alt={project.title} className="w-full object-cover rounded-lg shadow-sm shadow-black"/>
           <h2 className="text-white flex gap-3 text-lg py-3">{project.name}<img
                src={exterlink}
                alt=""
                className="w-8  transition-all duration-200 ease-in-out hover:scale-105"
              /></h2>
           <p className="text-[#808dad] text-lg py-2">{project.description}</p>
           <div className="flex flex-wrap gap-3">
           {project.builtWith.map(tech=>{
           return  <span className="bg-[#808dad] text-white text-sm font-sans p-2 text-center rounded-lg">{tech}</span>
           })}</div>
          
          </div>
      </a>)
       })}
      </div>
    
    </section>
  );
}

export default Projects;
