import React from 'react';
import Marquee from 'react-fast-marquee';

// Image imports
import img1 from '../../src/assets/Html.png';
import img2 from '../../src/assets/Css.png';
import img3 from '../../src/assets/Boostrape.png';
import img4 from '../../src/assets/Tailwind.png';
import img5 from '../../src/assets/Js.png';
import img6 from '../../src/assets/React.png';
import img7 from '../../src/assets/Next.png';
import img8 from '../../src/assets/MangoDB.png';
import img9 from '../../src/assets/Nodejs.png';
import img10 from '../../src/assets/VsCode.png';
import img11 from '../../src/assets/Github.png';

const tools = [
  { img: img1, title: 'HTML' },
  { img: img2, title: 'CSS' },
  { img: img3, title: 'Bootstrap' },
  { img: img4, title: 'Tailwind CSS' },
  { img: img5, title: 'JavaScript' },
  { img: img6, title: 'React.js' },
  { img: img7, title: 'Next.js' },
  { img: img8, title: 'MongoDB' },
  { img: img9, title: 'Node.js' },
  { img: img10, title: 'VS Code' },
  { img: img11, title: 'GitHub' },
];

export default function ToolsIUse() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">
          <span className="text-indigo-500">|</span> Tools I Use
        </h2>

        <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[15, 23, 42]}>
          <div className="flex items-center space-x-10 px-2">
            {tools.map((tool) => (
              <div key={tool.title} className="flex flex-col items-center w-24 md:w-28">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white p-2 md:p-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                  <img
                    src={tool.img}
                    alt={tool.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-sm md:text-base text-gray-300 hover:text-white transition duration-200">
                  {tool.title}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
