import { useState } from "react";
import {ReactComponent as MenuButton} from './../../assets/menu_button.svg';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-base text-black cursor-pointer absolute mb-1 mr-2 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <MenuButton onClick={() => setShowSidebar(!showSidebar)}
        className="absolute top-6 left-4 w-[20px] h-[20px] flex items-center cursor-pointer" />
      )}

      <div
        className={`top-0 -left-[18rem] w-[35vw] bg-pinkycandy p-10 pr-20 text-black fixed h-full z-20 ease-in-out duration-300 ${
          showSidebar ? "translate-x-full " : "translate-x-0"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-darktext">
          I am a sidebar
        </h3>
      </div>
    </>
  );
};

export default Sidebar;