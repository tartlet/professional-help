import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const HomePage = () => {
    const typingRef = useRef(null);
  
    useEffect(() => {
      new TypeIt(typingRef.current, {
        strings: ['<h3>My name is Jinni. :)</h3><p>I am a mechanical engineer</p><br><p>Paragraph 2</p>'],
        speed: 100,
        breakLines: false,
        loop: true,
        html: true,
      }).go();
    }, []);
  
    return <div ref={typingRef}></div>;
  };

export default HomePage;