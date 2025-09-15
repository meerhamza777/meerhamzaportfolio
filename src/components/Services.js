import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Creating clean, user-focused interfaces that offer seamless, intuitive, and engaging experiences across web and mobile platforms.',
    link: 'Learn More'
  },
  {
    name: 'Web Development',
    description: 'Developing fast, responsive, and secure websites with modern technologies, optimized for performance and great user experience.',
    link: 'Learn More'
  },
  {
    name: 'Graphic Designing',
    description: 'Designing eye-catching visuals including logos, banners, and posts to reflect your brand identity and attract your audience.',
    link: 'Learn More'
  },
  
];

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* Left Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 mb-6 text-accent'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Front-end Developer with 1+ years of experience in building clean, responsive, and modern websites.
            </h3>
            <button className='btn btn-sm'>Explore Services</button>
          </motion.div>

          {/* Services List */}
          <div className='flex-1'>
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <motion.div
                  variants={fadeIn('left', 0.3 + index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='h4 text-[20px] tracking-wider font-bold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-sm'>{link}</a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
