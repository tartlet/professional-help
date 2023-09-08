import { useState } from "react";
import {ReactComponent as MenuButton} from './../../assets/menu_button.svg';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-base text-black cursor-pointer absolute mb-1 -ml-2 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <MenuButton onClick={() => setShowSidebar(!showSidebar)}
        className="absolute top-6 left-4 w-[20px] h-[20px] flex items-center cursor-pointer" />
      )}

      <div
        className={`top-0 -left-[33%] w-[30%] pl-12 pt-10 bg-pinkycandy text-black fixed h-full z-20 ease-in-out duration-300 ${
          showSidebar ? "translate-x-full " : "translate-x-0"
        }`}
      >
        <div className="mt-6 text-2xl font-semibold text-darktext">
          Other Fun Stuff!
        </div>
        <div className="mt-4">
          Coming soon... 
        </div>
      </div>
    </>
  );
};

export default Sidebar;