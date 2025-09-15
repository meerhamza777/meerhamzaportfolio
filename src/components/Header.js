import React from 'react';

// Image
import Logo from '../assets/logo.svg'
const Header = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt='' className="w-24 h-auto"/>
          </a>
          {/* Button */}
          <button className='btn btn-sm'>Work With Me</button>
        </div>
      </div>
    </div>
  )
};

export default Header;
