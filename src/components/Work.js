
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Import Images
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          {/* Text and First Project */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br /> Work.
              </h2>
              <p className='max-w-sm mb-16'>
                A glimpse into some of my recent projects, where creativity meets functionality and clean UI/UX delivers exceptional user experiences.
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>

            {/* Project 1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='Project 1' />
              {/* Pre-title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project One</span>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='Project 2' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Two</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='Project 3' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Graphic Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Three</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;
