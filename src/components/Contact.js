import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6vazhcm", "template_0yb2qcj", form.current, {
        publicKey: "evvqiP7famUXqLdJd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-12 lg:py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center mx-auto lg:ml-[50px]"
          >
            <div>
              <h4 className="text-xl uppercase text-gradient font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[36px] lg:text-[48px] leading-none mb-8">
                Let's work
                <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-xl flex flex-col gap-y-4 pb-16 p-4 items-start"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="user_name bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="user_email bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all"
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              name="message"
              className="message bg-transparent border-b py-8 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all resize-none mb-8"
              placeholder="Your message"
            ></textarea>
            <input className="btn py-2 text-sm px-5 text-center cursor-pointer rounded-full" value="Send message" type="submit" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
