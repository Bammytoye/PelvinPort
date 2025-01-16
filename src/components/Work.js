import React from "react";
import { motion } from "framer-motion";
// images
import img1 from "../assets/payne-img1.PNG";
const img2 = require("../assets/portfolio-img2.PNG");
const img3 = require("../assets/portfolio-img34.PNG");
const img4 = require("../assets/portfolio-img4.PNG");
const img5 = require("../assets/portfolio-img5.PNG");
const img6 = require("../assets/portfolio-img6.PNG");

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };
};

// Reusable ProjectCard Component
const ProjectCard = ({ image, preTitle, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        className="group relative overflow-hidden cursor-pointer border-2 border-white border-white/50 rounded-xl"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        {/* Overlay */}
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        {/* Image */}
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={image}
          alt={title}
        />
        {/* Pretitle */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient">{preTitle}</span>
        </div>
        {/* Title */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-3xl text-white">{title}</span>
        </div>
      </motion.div>
    </a>
  );
};

const Work = () => {
  const projects = [
    {
      image: img1,
      preTitle: "PayPanel",
      title: "Visit Project",
      link: "https://www.paypanel.ng",
    },
    {
      image: img2,
      preTitle: "Astro",
      title: "Visit Project",
      link: "https://astrofx.pro",
    },
    {
      image: img3,
      preTitle: "Algo Trade",
      title: "Visit Project",
      link: "https://pelvindreams.github.io/algotrades/about.html",
    },
    {
      image: img4,
      preTitle: "Shopify",
      title: "Visit Project",
      link: "https://pelvindreams.github.io/Ecom",
    },
    {
      image: img5,
      preTitle: "Growth Saver",
      title: "Visit Project",
      link: "https://pelvindreams.github.io/GrowthSaver",
    },
    {
      image: img6,
      preTitle: "Capital TDX",
      title: "Visit Project",
      link: "https://capitaltdx.in/",
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* Left Section */}
          <motion.div
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br /> work.
              </h2>
              <p className="max-w-sm mb-16">
                Recently, I’ve completed client projects customized to their
                needs and optimized for marketability. These showcase my
                expertise in delivering bespoke solutions across frontend,
                backend, and full-stack development.
              </p>
              <button className="btn btn-sm">Few projects</button>
            </div>
            {/* Highlighted Project */}
            <ProjectCard
              image={projects[0].image}
              preTitle={projects[0].preTitle}
              title={projects[0].title}
              link={projects[0].link}
            />
          </motion.div>
          {/* Right Section */}
          <motion.div
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            {projects.slice(1).map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                preTitle={project.preTitle}
                title={project.title}
                link={project.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
