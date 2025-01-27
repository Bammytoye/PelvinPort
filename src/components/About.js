import React from "react";
// count up
import CountUp from "react-countup";

// interesting observers  book
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        {/* className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top" */}
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=""
          ></motion.div>
        </div>

        <div>
          {/* itext */}
          <div className="flex-1">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h2 text-accent"
            >
              About me
            </motion.h2>
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h3 mb-2"
            >
              I'm Precious, a skilled web developer with expertise in React,
              <br />
              Node.js, C# .NET CORE and modern technologies. Since 2019, I've been creating
              <br />
              innovative, user-centric solutions that blend creativity, logic,
              <br />
              and functionality to deliver impactful results.
            </motion.h3>

            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2"
            >
              Developer crafting innovative web solutions since 2019.
            </motion.p>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}{" "}
                  +
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={83} duration={3} /> : null}{" "}
                  +
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={25} duration={3} /> : null}{" "}
                  +
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Client
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"></button>
              <a href="#work" className=" text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
