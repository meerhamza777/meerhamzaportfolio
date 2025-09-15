import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelancer & Front-end Developer with over 1+ years of experience
            </h3>
            <p className="mb-6">
              I'm a Front-end Developer with 1+ years of experience in building
              clean, responsive, and modern websites. I love turning ideas into
              real, functional designs using React and Tailwind CSS. My goal is
              to create smooth user experiences that leave a lasting impression.
            </p>

            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>

            {/* Only Resume + Portfolio Buttons */}
           <div className="flex gap-6 flex-wrap items-center">
  <a
    href="https://drive.google.com/uc?export=download&id=1Osc9lXoyW7tZOf1mlts6nkbahITNXzaL"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base
               bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
               hover:from-pink-600 hover:to-blue-600
               transition duration-300 shadow-md text-center"
  >
    Download Resume
  </a>

  <a
    href="#"
    className="text-sm sm:text-base text-gradient hover:underline font-semibold"
  >
    My Portfolio
  </a>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
