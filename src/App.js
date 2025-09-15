import React from 'react';
// components
import Banner from './components/Banner';
// import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToolsIUse from './components/ToolsIUse';
// import ResumeDownload from './components/ResumeDownload';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header /> */}
      <Banner />
      <Nav />
      <About />
      <ToolsIUse/>
      <Services />
      <Work />
      {/* <ResumeDownload /> */}
      <Contact />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
