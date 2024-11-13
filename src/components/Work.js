import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/academy.png";
import Img2 from "../assets/ticket.png";
import Img3 from "../assets/gym.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-6">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8 mb-8 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-gradient text-lg">My latest work</h2>
              <p className="max-w-sm mb-12 text-sm">
                Crafting innovative, responsive websites and applications with a
                focus on performance, functionality, and user experience.
              </p>
              <a
                className="btn btn-sm py-2 px-4 text-xs"
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/"
              >
                View all projects
              </a>
            </div>
            <div className="group relative overflow-hidden rounded-xl mt-6 cursor-pointer">
              <img
                src={Img1}
                className="group-hover:scale-105 group-hover:blur-sm transition-all duration-500 h-48 w-3/4 rounded-lg cursor-pointer"
              />

              <div className="absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">Web development</span>
              </div>

              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl text-white">e-learning Academy</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/urn:li:fsd_profileProject:(ACoAAEJeDl8Bq63_iMJUNVygdytMWJxDtgwMSdk,2137572438)/treasury/"
                className="btn btn-sm opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-white text-xs font-semibold z-50 rounded-none transition-all duration-500 w-32 backdrop-blur-md"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            <div className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={Img2}
                className="group-hover:scale-105 group-hover:blur-sm transition-all duration-500 h-48 w-3/4 rounded-lg cursor-pointer"
              />
              <div className="absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">Web development</span>
              </div>
              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl text-white">Ticket Zone</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/urn:li:fsd_profileProject:(ACoAAEJeDl8Bq63_iMJUNVygdytMWJxDtgwMSdk,2137254573)/treasury/"
                className="btn btn-sm opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-white text-xs font-semibold z-50 rounded-none transition-all duration-500 w-32 backdrop-blur-md"
              >
                Visit Project
              </a>
            </div>
            <div className="group relative overflow-hidden rounded-xl cursor-pointer sm:w-full">
              <img
                src={Img3}
                className="group-hover:scale-105 group-hover:blur-sm transition-all duration-500 h-48 w-3/4 rounded-lg cursor-pointer"
              />
              <div className="absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">Web development</span>
              </div>
              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl text-black">DailyGym</span>
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7162030800350224384/"
                className="btn btn-sm opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-white text-xs font-semibold z-50 rounded-none transition-all duration-500 w-32 backdrop-blur-md"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
