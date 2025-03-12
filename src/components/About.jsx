import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.webp";
import sql from "../assets/skills/sql server.png";
import mongo from "../assets/skills/mongo.svg";
import figma from "../assets/skills/figma.png";
import canva from "../assets/skills/canva.webp";
import tailwind from "../assets/skills/tailwind.png";
import github from "../assets/skills/github.webp";

const About = () => {
  return (
    <>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">ABOUT</p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <p className="mt-5 mb-2 text-xs md:text-base text-secondary tracking-wide">
            Hello! I’m  <span className="text-primary">Ambika Jaiswal</span>,
            a developer with a passion for bridging the gap between design and development. With a BTech in
            <span className="text-primary"> Computer Science Engineering </span> from <span className="text-primary">Banasthali Vidyapith</span>, I’ve built a strong foundation in technology, but I’m also driven by creativity. I specialize in creating intuitive, user-friendly websites and applications, ensuring that both form and function are seamlessly integrated.</p>

          <p className="mt-5 mb-2 text-xs md:text-base text-secondary tracking-wide">
            I’m always eager to take on new challenges that allow me to push boundaries,
            whether through refining user interfaces, solving complex coding problems,
            or collaborating with teams to create innovative solutions.
            I’m looking for opportunities where I can grow, contribute,
            and continue to learn while working on exciting and impactful projects.
          </p>

          <p className="mt-5 mb-2 text-xs md:text-base text-secondary tracking-wide">
          Outside of coding, I’m passionate about graphic design, reading, 
          and spending time outdoors, which helps me stay inspired and energized.
          </p>
          <p className="mt-5 mb-2 text-xs md:text-base italic tracking-wide opacity-60" style={{ color: '#F5EFFF' }}>
            If you're looking for someone who brings both technical expertise and a creative mindset
            to the table, let's connect! I’m excited to explore new opportunities that foster
            growth and innovation.
          </p>
        </div>
        <div className="ml-0 lg:ml-8">
          <p className="my-2 mt-2 lg:mt-5 text-xs md:text-base text-secondary tracking-wide">
            Here are a few tools and technologies I've been working with
            recently:
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={html}
                alt="html"
                className="w-7 md:w-15 h-8 md:h-8 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                HTML
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={css}
                alt="css"
                className=" w-7 md:w-15 h-7 md:h-8 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                CSS
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img src={js} alt="js" className=" w-7 md:w-15 h-7 md:h-8 m-1" />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                JS
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={react}
                alt="react"
                className=" w-9 md:w-15 h-7 md:h-8 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                React
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={node}
                alt="node"
                className=" w-8 md:w-15 h-7 md:h9
                 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Node
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={express}
                alt="express"
                className=" w-8 md:w-15 h-7 md:h9
                 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Express
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={sql}
                alt="sql"
                className=" w-8 md:w-15 h-7 md:h9
               m-1"
              />
              <p className="text-[0.5rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                SQL Server
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={mongo}
                alt="mongo"
                className=" w-8 md:w-15 h-7 md:h-10 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                MongoDB
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={tailwind}
                alt="tailwind"
                className="w-8 md:w-12 h-6 md:h-8 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide pt-3">
                Tailwind
              </p>
            </div>
 
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={github}
                alt="github"
                className=" w-8 md:w-15 h-7 md:h-10 m-1 rounded-md"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                GitHub
              </p>
            </div>

            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={canva}
                alt="canva"
                className=" w-8 md:w-15 h-7 md:h-9
                 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Canva
              </p>
            </div>

            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={figma}
                alt="figma"
                className=" w-5 md:w-15 h-7 md:h-9 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Figma
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
