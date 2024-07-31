import Title from "./Title";
import Layout from "./Layout";
import RestaurantSection from "./RestaurantSection";
import { ThemeContextProvider } from "./ThemeContext";
import { AuthorizationContextProvider } from "./UserContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthorizationContextProvider>
        <ThemeContextProvider>
          <div>
            <Layout>
              <Title title="Restaurants" />
              <RestaurantSection />
            </Layout>
          </div>
        </ThemeContextProvider>
      </AuthorizationContextProvider>
    </Provider>
  );
};

export default App;
