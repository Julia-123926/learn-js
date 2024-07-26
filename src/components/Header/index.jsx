import ThemeButton from "../ThemeButton";
import AuthorizeButton from "../AuthorizeButton";

const Header = () => {
  return (
    <div>
      <ThemeButton />
      <AuthorizeButton />
      <header>Restaurants</header>
    </div>
  );
};

export default Header;
