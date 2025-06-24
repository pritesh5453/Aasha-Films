import React from "react";
import ProjectCard from "./ProjectCard";
import BolBachhan from "../assets/bol-bachchan.png";
import Chennai from "../assets/chennai-express.png";
import Golmaal from "../assets/golmaal-returns.png";
import GAgain from "../assets/golmaal-again.png";
import Simmba from "../assets/simmba.png";

const projects = [
  {
    title: "BOL BACHCHAN",
    desc: "A Glimpse Behind the Screen",
    image: BolBachhan,
  },
  {
    title: "CHENNAI EXPRESS",
    desc: "A Glimpse Behind the Screen",
    image: Chennai,
  },
  {
    title: "GOLMAAL RETURNS",
    desc: "A Glimpse Behind the Screen",
    image: Golmaal,
  },
  {
    title: "GOLMAAL AGAIN",
    desc: "A Glimpse Behind the Screen",
    image: GAgain,
  },
  {
    title: "SIMMBA",
    desc: "A Glimpse Behind the Screen",
    image: Simmba,
  },
];

export default function Projects() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-playfair text-[#8B3C68] font-bold mb-6 flex items-center">
        <span className="mr-2">
          <img src="./src/assets/arrow.png" alt="arrow" className="h-8" />
        </span>
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            image={proj.image}
            title={proj.title}
            desc={proj.desc}
          />
        ))}
      </div>
    </div>
  );
}
