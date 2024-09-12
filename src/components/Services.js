import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from '../assets/srv.png'
const services = [
  {
    name: "Web developement",
    description:
      "I specialize in building dynamic and scalable web applications from front-end to back-end. With expertise in a variety of technologies like React.js, Laravel, Node.js, and databases, I deliver efficient, high-performing solutions tailored to meet the unique needs of each project.",
    link: "show more",
  },
  {
    name: "UI/UX DESIGN",
    description:
      "I create intuitive and visually engaging user interfaces that provide seamless experiences. With a focus on user-centered design, I ensure that every project is functional, aesthetically pleasing, and optimized for the best user interaction across platforms.",
    link: "show more",
  },
  {
    name: "Graphic design",
    description:
      "I offer creative graphic design solutions, including logos, covers, banners, and more, to elevate your brand’s visual identity. With a keen eye for detail, I craft designs that resonate with your audience. Additionally, I provide video editing services, ensuring high-quality visuals for your projects and social media content.",
    link: "show more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bluebg lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-gradient mb-6">What I offer</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a fullstack developer with 3 years of experiences
            </h3>
            <a href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/" className="btn btn-sm py-3">See my work</a>
            <img src={logo} className="w-[500px] mt-20 rounded-3xl" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[230px] mb-[40px]"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/"
                        className="btn w-9 h-9 mb-3 flex justify-center items-center animate-bounce"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/" className="text-gradient text-sm ">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
