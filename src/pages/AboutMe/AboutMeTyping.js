import { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const TypingComponent = ({ onAnimationComplete }) => {
  const typingRef = useRef(null);
  const isRenderedRef = useRef(false); // Track whether component is already rendered

  useEffect(() => {
    if (!isRenderedRef.current) {
      const typeItInstance = new TypeIt(typingRef.current, {
        afterComplete: () => {
          typeItInstance.destroy(true);
          onAnimationComplete();
        },
        speed: 50,
        cursor: true,
        breakLines: false,
        loop: false,
        lifeLike: true,
      })
        .type('Hello stranger!')
        .type('<br>')
        .type('<br>')
        .pause(800)
        .type('My name is Jinni!')
        .pause(800)
        .delete(53)
        .pause(1000)
        .go();

      isRenderedRef.current = true; // Mark component as rendered
    }
  }, [onAnimationComplete]);

  return <div className="font-mono text-xl pt-10 pl-6" ref={typingRef}></div>;
};

export default TypingComponent;
