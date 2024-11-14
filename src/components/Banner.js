import React from "react";
import Image from "../assets/mylogo.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[10vh] flex items-center lg:mb-20" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-8 mt-10 lg:ml-10">
          <div className="flex-1 text-center font-primary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[25px] font-bold leading-[0.8] lg:text-[45px] mb-3"
            >
              <img src={Image} className="lg:hidden w-[100px]  mb-6 rounded-full mx-auto"/>
              ILYASS <span className="md:text-[40px]">BADREDDINE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[18px] lg:text-[35px] font-secondary font-semibold"
            >
              <span className="text-white mr-2">I am a</span>
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
              className="mb-6 mt-6 max-w-md mx-auto lg:mx-0 text-sm"
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
              className="flex gap-x-4 items-center mb-8 mx-auto lg:mx-0"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ilyass4work@example.com&su=Let's%20work%20together!&body=Hi%20Ilyass,"
                className="btn text-xs p-2 cursor-pointer"
                target="_blank"
              >
                Contact me
              </a>
              <a
                href="/Academic_CV.pdf"
                download="Academic_CV.pdf"
                className="text-lg lg:font-primary px-5 text-[#84bff4] btn-link cursor-pointer border-2 border-[#84bff4] rounded-lg hover:text-[#57ece7] hover:border-[#57ece7] duration-300"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[16px] gap-x-4 mx-auto lg:mx-0"
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

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:block lg:relative flex-1 max-w-[200px] lg:max-w-[300px] flex items-center justify-center m-[70px]" // Reduced max-width here
          >
            <div className="lg:absolute inset-8 bg-gradient-to-r from-[#171965] via-[#026189] to-[#6165d7] animate-gradient rounded-full mx-auto"></div>
            <img
              src={Image}
              alt="Logo"
              className="hidden md:block lg:relative z-10 mx-auto w-full h-auto"
            />
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
