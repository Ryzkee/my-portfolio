import React from 'react';

function Contacts({ contactsId }) {
  return (
    <>
      <div className='w-full h-screen bg-yellow-200' id={contactsId}></div>
    </>
  );
}

export default Contacts;