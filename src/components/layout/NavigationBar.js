import { Link } from "react-router-dom";
import {ReactComponent as MenuButton} from './../../assets/menu_button.svg';

const Navbar = () => {

  return (
    <nav>
      <div className="font-mono p-5 flex flex-row bg-barpink">
        <div className="basis-1/4 flex space-x-4 mr-8">
          <div>
            <MenuButton width="20" height="20"/>
          </div>
          <div>
            <Link to="/home">The Bakery</Link>
          </div>
        </div>
      <div className="flex basis-2/3 flex-nowrap space-x-6 items-center text-base md:text-md">
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">My Blog</Link>
        <Link to="/p4">PlaceHolder!</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;