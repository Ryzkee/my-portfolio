import React from 'react';
import { TbWorldWww, TbDeviceDesktopCode} from 'react-icons/tb'

function About({ aboutId }) {
    window.addEventListener('scroll', function() {
      const content = document.querySelector('#prov');
      const contentPosition = content.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 2.3;

        if(contentPosition < screenPosition) {
          content.style.transition = '3s';
          content.style.left = '5%';
        }else{
          content.style.left = '-60%';
        }
    });
  return (
    <>
      <div className=' relative w-full h-screen bg-[#161a30]' id={aboutId}>
        <div className='absolute w-[50%] h-[50%] bg-white rounded-lg top-[-40%] left-[-60%]' id='prov'>
          <div className='w-full h-1/6 flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-[#161a30]'>What am I capable of provide?</h1>
          </div>
          <div className='w-full h-5/6 flex '>
            <div className='w-[50%] h-full flex flex-col items-center'>
              <div className='w-full h-1/6 flex justify-center items-center text-5xl text-[#3674B5]'><TbWorldWww /></div>
              <h1 className='font-bold text-[14pt] mt-1.5 mb-1.5 text-[#3674B5]'>Frond-End Development</h1>
              <p className=' w-[50%] flex text-center'>I can design a front-end for a website utilizing HTML, CSS, TailwindCSS, and the JavaScript framework, particularly React.JS.</p>
            </div>
            <div className='w-[50%] h-full flex flex-col items-center'>
              <div className='w-full h-1/6 flex justify-center items-center text-5xl text-[#3674B5]'><TbDeviceDesktopCode /></div>
                <h1 className='font-bold text-[14pt] mt-1.5 mb-1.5 text-[#3674B5]'>Web & Responsive Design</h1>
                <p className='w-[50%] flex text-center'>I can create a responsive design for a website that can be viewed on any device.</p>
            </div>
          </div>
          {/* <h1 className='text-5xl text-[#3fe745] font-bold'>About Me</h1>
          <p className='text-[#3fe745] text-[15pt]'>I am a Front-End Developer based in the Philippines. I have a passion for web development and love to create new and exciting projects. I am always looking to learn new technologies and improve my skills.</p> */}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default About;