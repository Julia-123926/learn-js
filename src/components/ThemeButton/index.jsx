import { useTheme } from "../ThemeContext";

const ThemeButton = () => {
  const { value, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {value === "light" ? "switch to dark" : "switch to light"}
    </button>
  );
};

export default ThemeButton;
