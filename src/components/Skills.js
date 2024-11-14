import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  BsDatabase,
  BsCodeSquare,
  BsLaptop,
  BsSignal,
  BsPeople,
  BsPersonAdd,
  BsCameraVideo,
  BsPhone,
  BsMusicNote,
  BsBookmarkCheck
} from "react-icons/bs";

function Skills() {
  return (
    <section className="skills section flex flex-col" id="skills">
        <h1 className="text-gradient text-3xl text-center text-[#57ece7] mb-20">My skills</h1>
      <div className="skills__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto ">
        {/* Frontend Skills */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="skills__content border-2 border-[#57ece7] rounded-2xl md:p-8 w-[90%] lg:w-full mx-auto"
        >
          <h3 className="skills__title text-gradient text-lg my-5 text-[#57ece7] text-center">
            Frontend Development
          </h3>

          <div className="skills__box lg:flex lg:flex-wrap gap-6 grid grid-cols-2 mx-auto lg:w-full w-[90%] sm:mx-auto ml-[12%] lg:space-x-20">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">HTML</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">CSS</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">JavaScript</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">Bootstrap</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">Git</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">React</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">Tailwind</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data mb-6">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsCodeSquare className="text-[#57ece7] lg:text-md text-sm" />
                    <h3 className="skills__name">Angular</h3>
                  </span>
                  <span className="skills__level text-sm">Junior</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="skills__content border-2 border-[#84bff4] rounded-2xl md:p-8 w-[90%] lg:w-full mx-auto"
        >
          <h3 className="skills__title text-gradient my-5 text-[#84bff4] text-center">
            Backend Development
          </h3>

          <div className="skills__box lg:flex lg:flex-wrap gap-6 grid grid-cols-2 mx-auto lg:w-full w-[90%] sm:mx-auto ml-[12%] lg:space-x-20">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">Laravel</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">Node JS</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">Python</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">MySQL</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group mb-5">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">PHP</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">Next</h3>
                  </span>
                  <span className="skills__level text-sm">Junior</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">MongoDB</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsDatabase className="text-[#84bff4]" />
                    <h3 className="skills__name">Java</h3>
                  </span>
                  <span className="skills__level text-sm">Junior</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Backend Skills */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="skills__content border-2 border-[#df41ff] rounded-2xl md:p-8 w-[95%] lg:w-full mx-auto"
        >
          <h3 className="skills__title text-gradient my-5 text-[#df41ff] text-center">
            Other Skills
          </h3>

          <div className="skills__box lg:flex lg:flex-wrap gap-6 grid grid-cols-2 mx-auto lg:w-full w-[95%] sm:mx-auto ">
            <div className="skills__group ml-4">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsPhone className="text-[#df41ff]" />
                    <h3 className="skills__name">UI/UX</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsLaptop className="text-[#df41ff]" />
                    <h3 className="skills__name">Graphic Design</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsSignal className="text-[#df41ff]" />
                    <h3 className="skills__name">Docker</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsPeople className="text-[#df41ff]" />
                    <h3 className="skills__name">Scrum</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group mb-5 ">
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsPersonAdd className="text-[#df41ff]" />
                    <h3 className="skills__name">UML</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center lg:space-x-2">
                    <BsCameraVideo className="text-[#df41ff]" />
                    <h3 className="skills__name">Video editing</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="">
                  <span className="flex items-center lg:space-x-2">
                    <BsMusicNote className="text-[#df41ff]" />
                    <h3 className="skills__name">Song writing</h3>
                  </span>
                  <span className="skills__level text-sm">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <div>
                  <span className="flex items-center space-x-2">
                    <BsBookmarkCheck className="text-[#df41ff]" />
                    <h3 className="skills__name">XML</h3>
                  </span>
                  <span className="skills__level text-sm">Advanced</span>
                </div>
              </div>
            </div>
          </div>
            <div className="skills__data lg:hidden w-[70%] ml-20 mb-2">
              <div className="">
                <span className="flex items-center space-x-1 ">
                  <BsPhone className="text-[#df41ff]" />
                  <h3 className="skills__name">Content Creating</h3>
                </span>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
