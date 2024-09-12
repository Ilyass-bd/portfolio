import React from "react";

import Image from "../assets/mylogo.png";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] mx-auto font-bold leading-[0.8] lg:text-[80px] lg:flex"
            >
              ILYASS <span className="mx-3">BADREDDINE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Graphic designer",
                  2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mt-10 max-w-lg mx-auto lg:mx-0"
            >
              Passionate fullstack developer and graphic designer, driven by
              creativity and challenges. Let's build something extraordinary
              together.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ilyass4work@example.com&su=Let's%20work%20together!&body=Hi%20Ilyass,"
                className="btn lg:btn-sm text-sm p-3 cursor-pointer"
                target="_blank"
              >
                Contact me
              </a>
              <a
                href="/CV-last-version.pdf"
                download="CV-last-version.pdf"
                className="text-gradient btn-link cursor-pointer"
              >
                Download resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Ilyass-bd">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/">
                <FaLinkedin />
              </a>
              <a href="https://www.behance.net/ilyassc">
                <FaBehance />
              </a>
              <a href="https://www.instagram.com/ilyaass.bd/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/Ilyass_bd">
                <FaTwitter />
              </a>
            </motion.div>
          </div>

          {/* Updated image with animated background */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative flex-1 max-w-[320px] lg:max-w-[482px] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-10 bg-gradient-to-r from-[#171965] via-[#026189] to-[#6165d7] animate-gradient rounded-full mx-auto"></div>
            <img src={Image} alt="Logo" className="relative z-10 mx-auto " />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes animateBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: animateBackground 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
