import { useState, useEffect } from 'react';
import TypingComponent from './AboutMeTyping.js';
import './aboutme.css';
import myProfilePicture from './../../assets/jingsi.jpg';

const AboutPage = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [line1Complete, setLine1Complete] = useState(false);
  const [line2Complete, setLine2Complete] = useState(false);
  const [line3Complete, setLine3Complete] = useState(false);
	const [line4Complete, setLine4Complete] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
	// const [slideRight, setSlideRight] = useState(false);
	const [expandLeftDiv, setExpandLeftDiv] = useState(false);
	const [showPicture, setShowPicture] = useState(false);
	const [positionPermanent, setPositionPermanent] = useState(false);

  const handleAnimationComplete = () => {
    console.log('TypeIt animation completed!');
    setTypingComplete(true);
  };

  useEffect(() => {
    if (typingComplete) {
      setTimeout(() => {
        setLine1Complete(true);
      }, 1000); // Delay before fading in the first line
    }
  }, [typingComplete]);

  useEffect(() => {
    if (line1Complete) {
      setTimeout(() => {
        setLine2Complete(true);
      }, 1000); // Delay before fading in the second line
    }
  }, [line1Complete]);

  useEffect(() => {
    if (line2Complete) {
      setTimeout(() => {
        setLine3Complete(true);
      }, 1000); // Delay before fading in the third line
    }
  }, [line2Complete]);

  useEffect(() => {
    if (line3Complete) {
      setTimeout(() => {
        setLine4Complete(true);
      }, 1000); // Delay before fading in the new text
    }
  }, [line3Complete]);

	useEffect(() => {
    if (line4Complete) {
      setTimeout(() => {
        setShowNewText(true);
      }, 1000); // Delay before fading in the new text
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

	// useEffect(() => {
  //   if (slideRight) {
  //     setTimeout(() => {
  //       setPositionPermanent(true);
	// 			setSlideRight(false);
	// 			setShowPicture(true);
  //     }, 2000); // Delay setting position
  //   }
  // }, [slideRight]);

	// useEffect(() => {
  //   if (slideRight) {
  //     setTimeout(() => {
  //       setShowPicture(true);
  //     }, 3000); // Delay before fading in the new text
  //   }
  // }, [slideRight]);

//   return (
// 		<div className="flex">
// 			<div>
// 				{showPicture && <img src={myProfilePicture} className="flex-auto pt-6 pl-4 rounded-full fade-in-image"/>}
// 			</div>
// 			<div className="flex w-2/3 pr-10">
// 				<div className={`slide-text-right ${slideRight ? 'show' : ''}`}>
// 					<div className={`postion-text ${positionPermanent ? 'show' : ''}`}>
// 						{!typingComplete && <TypingComponent onAnimationComplete={handleAnimationComplete} />}
// 						<div className={`fade-in-text ${line1Complete ? 'show' : ''}`}>
// 							<div className="font-mono text-xl pt-10 pl-6">Meow.</div>
// 						</div>
// 						<div className={`fade-in-text ${line2Complete ? 'show' : ''}`}>
// 							<div className="font-mono text-xl pt-10 pl-6 delayed">Meow.</div>
// 						</div>
// 						<div className={`fade-in-text ${line3Complete ? 'show' : ''}`}>
// 							<div className="font-mono text-xl pt-10 pl-6 delayed2">Meow.</div>
// 						</div>
// 						<div className={`fade-in-text ${line4Complete ? 'show' : ''}`}>
// 							<div className="font-mono text-xl pt-10 pl-6 delayed3">Meow</div>
// 						</div>
// 						<div className={`fade-in-text ${showNewText ? 'show' : ''}`}>
// 							<div className="font-mono text-base left pt-10 pl-6 delayed3">My Resume:</div>
// 							<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
// 								<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
// 								<span>Download</span>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   );
// };

// export default AboutPage;

return (
	<div className="flex">
		<div className={`fade-in-image ${expandLeftDiv ? 'show' : ''}`}>
			<img src={myProfilePicture} className="pt-6 pl-4 rounded-full"/>
		</div>
		<div className="pr-10">
				{/* <div className={`postion-text ${positionPermanent ? 'show' : ''}`}> */}
					{!typingComplete && <TypingComponent onAnimationComplete={handleAnimationComplete} />}
					<div className={`fade-in-text ${line1Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6">Meow.</div>
					</div>
					<div className={`fade-in-text ${line2Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6 delayed">Meow.</div>
					</div>
					<div className={`fade-in-text ${line3Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6 delayed2">Meow.</div>
					</div>
					<div className={`fade-in-text ${line4Complete ? 'show' : ''}`}>
						<div className="font-mono text-xl pt-10 pl-6 delayed3">Meow</div>
					</div>
					<div className={`fade-in-text ${showNewText ? 'show' : ''}`}>
						<div className="font-mono text-base left pt-10 pl-6 delayed3">My Resume:</div>
						<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
							<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
							<span>Download</span>
						</button>
					{/* </div> */}
			</div>
		</div>
	</div>
);
};

export default AboutPage;
