import React, { useEffect, useState } from "react";
import { ReactComponent as MoreIcon } from './../../assets/catarrow.svg';
import useFadeIn from "./useFadeIn";
import "./projectspage.css"

const ProjectCard = ({ index, project, onClick }) => {
  const [catImage, setCatImage] = useState("");
  // const isImageLoaded = useFadeIn(); // Control the fade-in animation with useFadeIn hook
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image loading

  useEffect(() => {
    fetch("https://cataas.com/cat?width=400&height=300")
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setCatImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
        setCatImage("./meow.jpeg")
      });
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set isImageLoadedState to true when the image is loaded
  };

  return (
    <div
      className={`max-w-sm h-full rounded overflow-hidden shadow-lg ${
        isImageLoaded ? "animate-fade-in" : "opacity-0" // Apply fade-in animation class
      }`}
    >
      {catImage && ( // Only render when the image is loaded
        <>
          <div className={`container w-200`}>
            <img
              className="w-full"
              src={catImage}
              alt="Sunset in the mountains"
              onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
            />
          </div>
          <div className={`mx-2 py-4 h-[200px] ${isImageLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="font-bold text-lg mb-2">{project.title}</div>
            <div className="flex flex-row items-center justify-left text-[10px] text-darktext font-bold mb-2">
              {(project.categories).map((category,index) => (
                <div className="rounded-full py-[2px] px-[2px] mx-[2px] border-[2px] border-borderpink bg-searchpink">
                  {category.name}
                </div>
              ))}
            </div>
            <p className="text-sm h-[40%] overflow-auto">{project.blurb}</p>
          </div>
          <button 
						className={`bg-searchpink hover:bg-barpink relative space-x-2 font-bold m-2 py-2 px-4 rounded border-[1px] inline-flex items-center ${isImageLoaded ? "opacity-100" : "opacity-0"}`} 
						onClick={onClick}>
            
            <span>More</span>
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
