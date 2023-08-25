import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const HomePage = () => {
    // const typingRef = useRef(null);
  
    // useEffect(() => {
    //   new TypeIt(typingRef.current, {
    //     strings: ['<h3>My name is Jinni. :)</h3><p>I am a mechanical engineer</p><br><p>Paragraph 2</p>'],
    //     speed: 100,
    //     breakLines: false,
    //     loop: true,
    //     html: true,
    //   }).go();
    // }, []);
  
    return (
      <div className='font-mono'>
        <div className='text-center text-3xl ml-[30px] mt-4 mb-2'>
          Hello & welcome to my little bakery!
        </div>
        <div className='text-center text-xl ml-[60px] mb-6'>
          (... where I cook.)
        </div>
        <div className='text-xl ml-[90px] mb-2 mx-6'>
          This is where I showcase myself and sell my soul to industry!
        </div>
        <div className='text-xl ml-[120px] mb-10 mx-6'>
          This is where I discuss topics that I normally wont discuss in public!
        </div>
        <div className='flex'>
          <img src="https://media.tenor.com/I6ey27w6fpcAAAAC/let-him-cook.gif" alt="gif of a guy burning himself tossing veggies into a pan" className="mx-auto object-cover" />
        </div>
      </div>
    );
  };

export default HomePage;