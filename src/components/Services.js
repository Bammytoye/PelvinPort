import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Designer",
    description: "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",
    link: "/ui-ux-designer",
  },
  {
    name: "Development",
    description: "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",
    link: "/development",
  },
  {
    name: "YouTuber",
    description: "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",
    link: "/youtuber",
  },
  {
    name: "Digital Marketer",
    description: "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",
    link: "/digital-marketer",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text and image */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Deliver</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.
            </h3>
            <button className="btn btn-sm">See my works</button>
          </motion.div>
          {/* Services list */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {services.map(({ name, description, link }, index) => (
              <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={name}>
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                  <p className="font-secondary leading-tight">{description}</p>
                </div>
                <div className="flex flex-col flex-1 items-end">
                  <a
                    href={link}
                    className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    aria-label={`Learn more about ${name}`}
                  >
                    <BsArrowUpRight className="text-2xl text-accent" />
                  </a>
                  <a href={link} className="text-gradient text-sm">
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
