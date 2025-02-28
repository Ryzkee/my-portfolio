import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import dp from '../image/dp.png'

function Home({ homeId }) {
  const socialIcons = [
    {icon: FaFacebookF, name: "Facebook", color: "#3674B5"}, 
    {icon: FaInstagram, name: "Instagram", color: "#E1306C"}
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div className='w-full h-screen flex text-white' id={homeId}>
        <div className='w-[50%] h-full flex items-center'>
          <div className='w-full h-1/3 flex items-center flex-col'>
            <p className='w-[60%] text-2xl'>Hello,</p>
            <h1 className='w-[60%] text-5xl font-bold mb-2'>I'm Ryan Jake Daz</h1>
            <p className='w-[60%] text-[15pt]'>a <span className='text-[#3674B5] font-bold'>Frond-End Developer</span> based in the Philippines</p>
            <div className='w-[60%] flex items-center mt-5 ml-10  h-[12%]'>
              {socialIcons.map(({ icon: Icon, name, color}, index) =>(
                <button 
                  key={index} 
                  className={`h-[98%] w-auto mr-[5%] rounded-sm px-2 py-1 border-none`}
                  style={{
                    backgroundColor: hoveredIndex === index ? 'transparent' : color,
                    border: hoveredIndex === index ? `1px solid ${color}` : 'none',
                    animation: hoveredIndex === index ? '5s infinite' : 'none',
                    transition: '0.5s ease-in-out',
                  }
                }
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  ><a href="">
                    {hoveredIndex === index ? (<p className='text-[8pt]'>{name}</p>) : <Icon />}
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center'>
          <div className='relative bg-[#161a30] flex justify-center w-[70%] h-[70%] rounded-[50%] mt-[10%] border-15 border-[#3674B5] shadow-2xl shadow-white'>
            <img src={dp} alt="" className='absolute mt-[-10%]' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;