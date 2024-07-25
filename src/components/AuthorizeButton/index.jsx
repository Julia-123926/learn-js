import { useAuthorize } from "../UserContext";

const AuthorizeButton = () => {
  const { value, toggleTheme } = useAuthorize();
  return (
    <div>
      {value === "signIn" ? (
        <button onClick={toggleTheme}>Войти</button>
      ) : (
        <div>
          <button>Иван</button> <button onClick={toggleTheme}>Выйти</button>
        </div>
      )}
    </div>
  );
};

export default AuthorizeButton;
