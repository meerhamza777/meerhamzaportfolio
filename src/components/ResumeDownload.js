import React from 'react';
import { FaDownload } from 'react-icons/fa';

function ResumeDownload() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <a
        href="https://drive.google.com/uc?export=download&id=1Osc9lXoyW7tZOf1mlts6nkbahITNXzaL"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300"
      >
        <FaDownload className="text-white text-xl" />
        Download Resume
      </a>
    </section>
  );
}

export default ResumeDownload;
