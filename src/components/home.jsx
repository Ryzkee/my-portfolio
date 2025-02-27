import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import dp from '../image/dp.png'

function Home({ homeId }) {
  return (
    <>
      <div className='w-full h-screen flex text-white' id={homeId}>
        <div className='w-[50%] h-full flex items-center'>
          <div className='w-full h-1/3 flex items-center flex-col'>
            <p className='w-[60%] text-2xl'>Hello,</p>
            <h1 className='w-[60%] text-5xl font-bold mb-2'>I'm Ryan Jake Daz</h1>
            <p className='w-[60%] text-[15pt]'>a <span className='text-[#3674B5] font-bold'>Frond-End Developer</span> based in the Philippines</p>
            <div className='w-[60%] flex mt-5 '>
              <button className='w-auto border mr-[5%] bg-[#3674B5] rounded-sm px-2 py-1 hover:bg-transparent'><FaFacebookF /></button>
              <button className='w-auto border bg-[#3674B5] rounded-sm px-2 py-1 hover:bg-transparent'><FaInstagram/></button>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center'>
          <div className='relative flex justify-center w-[60%] h-[60%] rounded-[50%] mt-[10%] border-15 border-[#3674B5] shadow-2xl shadow-white'>
            <video src=""></video>
            <img src={dp} alt="" className='absolute mt-[-10%]' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;