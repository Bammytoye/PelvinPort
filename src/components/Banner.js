import React from "react";
// Images
import Image from "../assets/avatar.svg";

// Icons
import {
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Type Animation
import { TypeAnimation } from "react-type-animation";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

// Social Links Data
const socialLinks = [
  { Icon: FaYoutube, link: "https://youtube.com", label: "YouTube" },
  { Icon: FaGithub, link: "https://github.com", label: "GitHub" },
  { Icon: FaFacebook, link: "https://facebook.com", label: "Facebook" },
  { Icon: FaInstagram, link: "https://instagram.com", label: "Instagram" },
  { Icon: FaTwitter, link: "https://twitter.com", label: "Twitter" },
];

const Banner = ({ roles = ["Developer", "Designer", "Youtuber"] }) => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:items-center lg:gap-x-16">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl lg:text-[110px] font-bold leading-[0.8]"
            >
              Aiden <span className="text-accent">Ben</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={roles.flatMap((role) => [role, 2000])}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am passionate about building creative and functional digital
              solutions that make a difference.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-4 mb-8 max-w-max items-center mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#portfolio" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center lg:justify-start text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {socialLinks.map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                  aria-label={`Visit my ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <motion.img
              src={Image}
              alt="Aiden Ben - Creative Professional"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
