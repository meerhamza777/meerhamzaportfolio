import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Contact = () => {


  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 lg:mb-0'
          >
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's Work <br /> Together
            </h2>
          </motion.div>

          {/* Form Box */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div className='bg-[#1f1f1f] p-8 rounded-2xl shadow-lg'>
              <form className='flex flex-col gap-y-6'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                />
                <textarea
                  placeholder='Your Message'
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent resize-none mb-6 transition-all'
                  rows='5'
                />
                <button className='btn btn-lg self-start'>Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
