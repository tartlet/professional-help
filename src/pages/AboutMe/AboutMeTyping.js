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
        speed: 0,
        cursor: true,
        breakLines: false,
        loop: false,
        lifeLike: true,
      })
        .type('Hello stranger!')
        .type('<br>')
        .type('<br>')
        .pause(800)
        .type('My name is meow!')
        .pause(2000)
        .delete(1)
        .pause(500)
        .delete(1)
        .pause(700)
        .delete(1)
        .pause(400)
        .delete(1)
        .pause(700)
        .type('.')
        .pause(800)
        .type('.')
        .pause(200)
        .type('.')
        .pause(1000)
        .type(":3")
        .pause(2000)
        .delete(53)
        .pause(1000)
        .go();

      isRenderedRef.current = true; // Mark component as rendered
    }
  }, [onAnimationComplete]);

  return <div className="font-mono text-3xl pt-10 pl-6" ref={typingRef}></div>;
};

export default TypingComponent;
