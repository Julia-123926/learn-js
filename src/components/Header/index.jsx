import ThemeButton from "../ThemeButton";
import AuthorizeButton from "../AuthorizeButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ThemeButton />
      <AuthorizeButton />
      <header>
        <Link to={"/restaurants"}>{name}Restaurants</Link>
      </header>
    </div>
  );
};

export default Header;
