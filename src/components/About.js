import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[280px] mix-blend-lighten bg-top" // Reduced image size
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-gradient text-lg mb-4">About me</h2>
            <h3 className="text-sm lg:text-lg mb-3 lg:font-tertiary">
              I’m a Full-Stack Developer and Graphic Designer passionate about creating innovative web applications and visuals. I blend creativity and analytical skills to consistently deliver high-quality results.
            </h3>
            <div className="flex gap-x-4 lg:gap-x-6 mb-6 mt-5">
              <div>
                <div className="text-[28px] font-tertiary text-gradient mb-1">
                  {inView ? <CountUp start={0} end={3} duration={10} /> : null}
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[28px] font-tertiary text-gradient mb-1">
                  {inView ? <CountUp start={0} end={20} duration={10} /> : null}+ 
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[28px] font-tertiary text-gradient mb-1">
                  {inView ? <CountUp start={0} end={20} duration={10} /> : null}+ 
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 items-center">
              <button className="btn btn-sm py-2 px-4">Contact me</button>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/"
                className="text-gradient text-sm"
              >
                Show more
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
