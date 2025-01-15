import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Frontend Development",
    description:
      "I create visually stunning, user-centric interfaces using HTML5, React, CSS, TailwindCSS, and JavaScript. With a focus on seamless user experiences and modern design trends, I bring your vision to life.",
    link: "https://www.upwork.com/freelancers/~0142215c58984c7a2e?mp_source=share",
  },
  {
    name: "Backend Development",
    description:
      "I build robust and scalable server-side solutions using Node.js, Express.js, and PHP. From database integration to API development, I ensure secure, efficient, and reliable backend architectures tailored to your needs",
    link: "https://www.upwork.com/freelancers/~0142215c58984c7a2e?mp_source=share",
  },
  {
    name: "Fullstack Development",
    description:
      "I provide end-to-end web solutions, combining intuitive front-end designs with robust back-end architectures. From user interfaces to server-side functionalities, I deliver seamless, impactful, and fully integrated digital experiences.",
    link: "https://www.upwork.com/freelancers/~0142215c58984c7a2e?mp_source=share",
  },
  {
    name: "UI/UX Designer",
    description:
      "I craft visually compelling and user-focused designs that align with your brand identity. From wireframes to polished interfaces, I ensure every element enhances usability and creates an engaging experience.",
    link: "https://www.upwork.com/freelancers/~0142215c58984c7a2e?mp_source=share",
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
              The services I offer encompass a comprehensive range, catering to
              diverse needs.
            </h3>
            <a href="#work">
              {" "}
              <button className="btn btn-sm"> See my works </button>{" "}
            </a>
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
              <div
                className="border-b border-white/20 h-[146px] mb-[38px] flex"
                key={name}
              >
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                    {name}
                  </h4>
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
                  <a
                    href={
                      "https://www.upwork.com/freelancers/~0142215c58984c7a2e?mp_source=share"
                    }
                    className="text-gradient text-sm"
                  >
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
