import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";

// motion
import { motion } from "framer-motion";

// Variant
import { fadeIn } from "../variants";

// Services

const services = [
  {
    name: "UI/UX Designer",

    description:
      "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",

    link: "Learn more",
  },
  {
    name: "Development",

    description:
      "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",

    link: "Learn more",
  },
  {
    name: "YouTuber",

    description:
      "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",

    link: "Learn more",
  },
  {
    name: "Digital Marketer",

    description:
      "Lorem Ipsum is dummy text widely used in the printing and typesetting industry since the 1500s.",

    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="conatiner mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text and image */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Deliver</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem Ipsum is dummy text widely used in the printing and
              typesetting industry since the 1500s.
            </h3>

            <button className="btn btn-sm">See my works</button>
          </div>
          {/* services */}
          <div className="flex-1">
            {/* services list */}
            <div>
              {services.map((services, index) => {
                {
                  /* destruscture service */
                }

                const { name, description, link } = services;

                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div>links</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
