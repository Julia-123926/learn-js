import Title from "./Title";
import Layout from "./Layout";
import RestaurantSection from "./RestaurantSection";
import { ThemeContextProvider } from "./ThemeContext";
import { AuthorizationContextProvider } from "./UserContext";

export const App = () => {
  return (
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
  );
};

export default App;
