import React from 'react';

function Home({ homeId }) {
  return (
    <>
      <div className='w-full h-screen bg-amber-200 flex' id={homeId}>
        <div className='w-[60%] h-full bg-amber-800 flex items-center'>
          <div className='w-full h-1/3 bg-amber-400'>

          </div>
        </div>
        <div className='w-[40%] h-full bg-blue-400'></div>
      </div>
    </>
  );
}

export default Home;