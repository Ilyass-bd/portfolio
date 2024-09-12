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
    <section className="py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-2xl uppercase text-gradient font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
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
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="user_name bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all
            "
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="user_email bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all
            "
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              name="message"
              className="message bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all resize-none mb-12
            "
              placeholder="Your message"
            ></textarea>
            <input className="btn py-2 px-6 text-center cursor-pointer rounded-full" value="send message" type="submit" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
