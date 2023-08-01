import { useState, useEffect } from 'react';
import TypingComponent from './AboutMeTyping.js';
import './aboutme.css';
import myProfilePicture from './../../assets/jingsi.jpg';
import myResume from './../../assets/files/Jingsi_UpdatedResume_May2023.pdf';

const AboutPage = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [line1Complete, setLine1Complete] = useState(false);
  const [line2Complete, setLine2Complete] = useState(false);
  const [line3Complete, setLine3Complete] = useState(false);
	const [line4Complete, setLine4Complete] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
	// const [slideRight, setSlideRight] = useState(false);
	const [expandLeftDiv, setExpandLeftDiv] = useState(false);

  const handleAnimationComplete = () => {
    console.log('TypeIt animation completed!');
    setTypingComplete(true);
  };

  useEffect(() => {
    if (typingComplete) {
      setTimeout(() => {
        setLine1Complete(true);
      }, 800); // Delay before fading in the first line
    }
  }, [typingComplete]);

  useEffect(() => {
    if (line1Complete) {
      setTimeout(() => {
        setLine2Complete(true);
      }, 700); // Delay before fading in the second line
    }
  }, [line1Complete]);

  useEffect(() => {
    if (line2Complete) {
      setTimeout(() => {
        setLine3Complete(true);
      }, 700); // Delay before fading in the third line
    }
  }, [line2Complete]);

  useEffect(() => {
    if (line3Complete) {
      setTimeout(() => {
        setLine4Complete(true);
      }, 700); // Delay before fading in fourth line
    }
  }, [line3Complete]);

	useEffect(() => {
    if (line4Complete) {
      setTimeout(() => {
        setShowNewText(true);
      }, 1000); // Delay before fading in resume text
    }
  }, [line4Complete]);

	useEffect(() => {
    if (showNewText) {
      setTimeout(() => {
        setExpandLeftDiv(true);
				console.log("slid");
      }, 1000); // Delay before sliding
    }
  }, [showNewText]);

return (
	<div className="flex">
		<div className={`fade-in-image ${expandLeftDiv ? 'show' : ''}`}>
			<img src={myProfilePicture} className="pt-6 pl-4 rounded-full"/>
		</div>
		<div className="pr-10">
					{!typingComplete && <TypingComponent onAnimationComplete={handleAnimationComplete} />}
					<div className={`fade-in-text ${line1Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6">Meow.</div>
					</div>
					<div className={`fade-in-text ${line2Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6">Meow.</div>
					</div>
					<div className={`fade-in-text ${line3Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6">Meow.</div>
					</div>
					<div className={`fade-in-text ${line4Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6">Meow</div>
					</div>
					<div className={`fade-in-text ${showNewText ? 'show' : ''}`}>
						<div className="font-mono text-base left pt-10 pl-6">My Resume:</div>
						<div className="pl-8">
								<button className="bg-white hover:bg-pinkycandy font-mono font-bold py-2 px-4 rounded inline-flex items-center">
									<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
									<span><a href={myResume} download="leResume_Jingsi">Download</a></span>
								</button>
						</div>
					</div>
		</div>
	</div>
);
};

export default AboutPage;
