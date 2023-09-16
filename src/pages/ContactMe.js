import React from "react";
import Form from "../components/Form";
import { Slide, Fade } from "react-awesome-reveal";

const ContactMe = () => {
  return (
    <div>
      <div className="lg:container pb-16 max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 mx-auto">
        <section className="pt-11 md:pt-20 lg:pt-24 pb-14">
          <div className="max-w-xl mx-auto">
          <Fade delay={100} triggerOnce='true'>
            <h2 className="mb-5 text-4xl font-semibold text-center text-sc_color md:text-6xl">
              Get In Touch
            </h2>
          </Fade>
          <Fade delay={300} triggerOnce='true'>
            <p className="text-lg text-center text-text md:text-xl">
              Got a brilliant idea you're itching to share? Let's chat! Whether
              it's about your next big project or just a friendly hello. Reach
              out to me via any of the links below, or simply drop me an email
              by filling out the form. I'm all ears for your fantastic ideas and
              ready to make some web magic happen together!
            </p>
          </Fade>
          </div>
        </section>
        <Slide direction="up" triggerOnce="true" delay={200} >
            <Form />
        </Slide>
      </div>
    </div>
  );
};

export default ContactMe;
