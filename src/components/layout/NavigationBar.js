import { Link } from "react-router-dom";
import {ReactComponent as MenuButton} from './../../assets/menu_button.svg';
import SillyToggle from "./SliderToggle";
import { useEffect, useState } from "react";
import Sidebar from "./Menu";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  useEffect( () => {
    console.log(isToggled);
  });

  return (
    <nav>
      <div className="font-sans font-bold p-5 flex bg-barpink">
        <div className="ml-2 items-center basis-1/4 flex space-x-4 mr-8 text-sm md:text-lg">
          <Sidebar/>
          <div>
            <Link to="/home">Home</Link>
          </div>
        </div>
      <div className="flex basis-1/2 space-x-4 items-center justify-center font-bold text-sm md:text-lg">
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        {/* <Link to="/blog">Blog</Link> */}
        <Link to="/p4">PlaceHolder</Link>
      </div>
      <div className="flex basis-1/4 justify-end items-center">
        <SillyToggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;