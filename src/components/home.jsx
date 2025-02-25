import React from 'react';

function Home({ homeId }) {
  return (
    <>
      <div className='w-full h-screen flex text-white' id={homeId}>
        <div className='w-[50%] h-full flex items-center'>
          <div className='w-full h-1/3 flex items-center flex-col'>
            <p className='w-[60%] text-2xl'>Hello,</p>
            <h1 className='w-[60%] text-5xl font-bold mb-2'>I'm Ryan Jake Daz</h1>
            <p className='w-[60%] text-2xl'>a <span className='font-bold'>Frond-End Developer</span> in the Philippines</p>
          </div>
        </div>
        <div className='w-[50%] h-full'></div>
      </div>
    </>
  );
}

export default Home;