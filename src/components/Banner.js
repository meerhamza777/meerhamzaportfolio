import React from 'react';
// Image

import Image from '../assets/avatar.svg';
// Icons
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa'



// Type Animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// Varients
import { fadeIn } from '../variants'
import TextPressure from './TextPressure';


const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              <span><TextPressure text='Meer Hamza' /></span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
              <span className='mr-4 text-white '>I' am a</span>
              <TypeAnimation sequence={[
                'Developer',
                4000,
                'UI & UX Designer',
                2000,
                'Freelancer',
                3000,
                //  '',
                // 2000,
              ]}
                speed={30}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Passionate front-end developer creating interactive and user-friendly web experiences.</motion.p>
            <motion.div variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="https://wa.me/923293774310" target="_blank" rel="noopener noreferrer"><button className='btn btn-lg'>Contact Me</button></a>


              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div >
            {/* Social */}
            <motion.div variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.facebook.com/meerhamza77777/' target='_blank' rel='noopener noreferrer'>
                <FaFacebook />
              </a>
              <a href='https://www.linkedin.com/in/meerhamza77' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
              <a href='https://github.com/meerhamza777' target='_blank' rel='noopener noreferrer' git>
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/meer.hamza77/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
              </a>

            </motion.div>
          </div>
          {/* Image */}
          < motion.div variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"

            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </ motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
