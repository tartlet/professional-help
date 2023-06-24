import { Link } from "react-router-dom";
import {ReactComponent as MenuButton} from './../../assets/menu_button.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="font-mono p-5 flex flex-row bg-barpink">
        <div className="basis-1/3 flex space-x-4">
          <div>
            <MenuButton width="20" height="20"/>
          </div>
          <div>
            <Link to="/home">The Bakery</Link>
          </div>
        </div>
      <div className="flex flex-row xs:flex-row gap-8 items-center">
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