import { createContext, useContext, useState, useCallback } from "react";
const AuthorizationContext = createContext();

export const useAuthorize = () => useContext(AuthorizationContext);

export const AuthorizationContextProvider = ({ children }) => {
  const [authorize, setAuthorize] = useState("signIn");
  const toggleTheme = useCallback(() => {
    setAuthorize((current) => (current === "signIn" ? "signOut" : "signIn"));
  }, []);
  return (
    <AuthorizationContext.Provider value={{ value: authorize, toggleTheme }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
