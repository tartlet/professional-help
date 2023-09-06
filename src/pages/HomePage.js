import React, { useEffect, useRef } from 'react';
import ReactLogo from "./../assets/react.png";
import HygraphLogo from "./../assets/hygraph.png";
import ProcreateLogo from "./../assets/procreate.png";
import TailwindLogo from "./../assets/tailwind.png";
import GithubLogo from "./../assets/github.png";
import GHPagesLogo from "./../assets/ghpages.png";

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
      <div className='font-sans'>
        {/* <div className='text-center text-3xl ml-[30px] mt-4 mb-2'>
          Hello & welcome to my little bakery!
        </div>
        <div className='text-center text-xl ml-[60px] mb-6'>
          (... where I cook.)
        </div>
        <div className='text-xl mb-2 mx-6'>
          This is where I showcase myself and sell my soul to industry!
        </div>
        <div className='text-xl mb-10 mx-6'>
          This is where I discuss topics that I normally wont discuss in public!
        </div>
        <div className='flex'>
          <img src="https://media.tenor.com/I6ey27w6fpcAAAAC/let-him-cook.gif" alt="gif of a guy burning himself tossing veggies into a pan" className="mx-auto object-cover" />
        </div> */}
        <div className='mt-10 text-center font-sans text-2xl mx-2'>
          Jingsi's Portfolio + Future Project Hub :)
        </div>
        <div className="object-center mt-10">
          <div className="text-center mb-4">
            This website was created with	&#x1F49F; using:
          </div>
          <div className="grid gap-4 grid-cols-3 text-sm w-[380px] mx-auto mb-[50px]">
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              React.js
              <a href="https://react.dev/" target="_blank">
              <img src={ReactLogo} alt="meow" className="w-16 h-16 object-contain mx-auto mt-2"/>
              </a>
            </div>
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              Tailwind CSS
              <a href="https://tailwindcss.com/" target="_blank">
              <img src={TailwindLogo} alt="meow" className="w-16 h-16 object-contain mx-auto"/>
              </a>
            </div>
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              Procreate
              <a href="https://procreate.com/" target="_blank">
              <img src={ProcreateLogo} alt="meow" className="w-16 h-16 object-cover mx-auto mt-2"/>
              </a>
            </div>
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              Hygraph GraphQL CMS
              <a href="https://hygraph.com/" target="_blank">
              <img src={HygraphLogo} alt="meow" className="w-14 h-16 object-contain mx-auto"/>
              </a>
            </div>
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              Github
              <a href="https://github.com/" target="_blank">
              <img src={GithubLogo} alt="meow" className="w-14 h-16 object-contain mx-auto"/>
              </a>
            </div>
            <div className="border-[1px] border-borderpink h-28 w-28 rounded-lg p-2 text-center hover:shadow-lg">
              Github Pages
              <a href="https://pages.github.com/" target="_blank">
              <img src={GHPagesLogo} alt="meow" className="w-14 h-16 object-contain mx-auto"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default HomePage;