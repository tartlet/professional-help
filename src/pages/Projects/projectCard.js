import React, { useEffect, useState } from "react";
import { ReactComponent as MoreIcon } from './../../assets/catarrow.svg';
import useFadeIn from "./useFadeIn";
import "./projectspage.css"

const ProjectCard = ({ index, title, description, onClick }) => {
  const [catImage, setCatImage] = useState("");
  const isImageLoaded = useFadeIn(); // Control the fade-in animation with useFadeIn hook
  const [isImageLoadedState, setIsImageLoaded] = useState(false); // State to track image loading

  useEffect(() => {
    fetch("https://cataas.com/cat?width=400&height=300")
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setCatImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set isImageLoadedState to true when the image is loaded
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        isImageLoaded ? "animate-fade-in" : "opacity-0" // Apply fade-in animation class
      }`}
    >
      {catImage && ( // Only render when the image is loaded
        <>
          <div className={`container w-200 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}>
            <img
              className="w-full"
              src={catImage}
              alt="Sunset in the mountains"
              onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
            />
          </div>
          <div className={`px-6 py-4 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <button 
						className={`bg-searchpink hover:bg-barpink space-x-2 font-bold m-2 py-2 px-4 rounded border-[1px] inline-flex items-center ${isImageLoaded ? "opacity-100" : "opacity-0"}`} 
						onClick={onClick}>
            <MoreIcon />
            <span>More!</span>
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
