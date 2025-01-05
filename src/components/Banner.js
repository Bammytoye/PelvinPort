import React from "react";
// images profile
import Image from "../assets/avatar.svg";

// icons
import {
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// type animation
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants"; 

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:items-center lg:gap-x-16">
          {/* text section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-[110px] font-bold leading-[0.8] text-[55px]">
              Ben <span className="text-accent">Aiden</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                  "",
                  1000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg max-auto lg:max-0">
              Lorem Ipsum is dummy text widely used in the printing and
              typesetting industry since the 1500s.
            </p>
            <div className="flex gap-4 mb-8 max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

            {/* socials */}
            <div className="flex justify-center lg:justify-start text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#" className="hover:text-accent">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-accent">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-accent">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-accent">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-accent">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* image section */}
          <div className="flex-1">
            <motion.img
              src={Image}
              alt="Avatar of Ben Aiden"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
