import React from "react";
import { motion } from "framer-motion";
// images
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import img4 from "../assets/portfolio-img4.png";
import img5 from "../assets/portfolio-img5.png";
import img6 from "../assets/portfolio-img6.png";

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
const ProjectCard = ({ image, preTitle, title }) => {
  return (
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
  );
};

const Work = () => {
  const projects = [
    { image: img1, preTitle: "UI/UX Designer", title: "Project One" },
    { image: img2, preTitle: "Web Developer", title: "Project Two" },
    { image: img3, preTitle: "Graphic Designer", title: "Project Three" },
    { image: img4, preTitle: "App Designer", title: "Project Four" },
    { image: img5, preTitle: "Brand Strategist", title: "Project Five" },
    { image: img6, preTitle: "Full-Stack Developer", title: "Project Six" },
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
                Lorem Ipsum is dummy text widely used in the printing and
                typesetting industry since the 1500s.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* Highlighted Project */}
            <ProjectCard
              image={projects[0].image}
              preTitle={projects[0].preTitle}
              title={projects[0].title}
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
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
