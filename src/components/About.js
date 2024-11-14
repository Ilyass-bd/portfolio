import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from '../assets/Profile2.png'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12 h-screen">
          <div className="rounded-xl overflow-hidden mx-32">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 lg:bg-about bg-contain bg-no-repeat h-[200px] w-[200px] border-r-4 border-t-4 rounded-xl border-cyan-400  mix-blend-lighten bg-top"
            />
          </div>
          <img src={logo} className="lg:hidden w-[40%] rounded-2xl mx-auto mb-10 border-y-8 border-[#70c9ef]"/>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-gradient text-lg mb-4">About me</h2>
            <h3 className="text-sm lg:text-lg mb-3 lg:font-primary">
              I’m a Full-Stack Developer and Graphic Designer passionate about
              creating innovative web applications and visuals. I blend
              creativity and analytical skills to consistently deliver
              high-quality results.
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
                  {inView ? <CountUp start={0} end={15} duration={8} /> : null}+
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[28px] font-tertiary text-gradient mb-1">
                  {inView ? <CountUp start={0} end={15} duration={8} /> : null}+
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 items-center">
              <a
                className="btn lg:btn-xs text-xs p-2 cursor-pointer hover:duration-300"
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ilyass4work@example.com&su=Let's%20work%20together!&body=Hi%20Ilyass,"
              >
                Contact me
              </a>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/"
                className="text-gradient px-5 py-1 text-blue-400 border-2 border-blue-400 rounded-lg text-sm hover:text-[#57ece7] hover:border-[#57ece7] duration-300"
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
