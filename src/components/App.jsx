import Layout from "./Layout";
import RestaurantSection from "./RestaurantSection";
import RestaurantPage from "./Restaurant-page";
import { ThemeContextProvider } from "./ThemeContext";
import { AuthorizationContextProvider } from "./UserContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu";
import Reviews from "./Reviews";
import MenuItem from "./MenuItem";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "restaurants",
          element: <RestaurantSection />,
          children: [
            {
              path: ":restaurantId",
              element: <RestaurantPage />,
              children: [
                {
                  path: "menu",
                  element: <Menu />,
                },
                {
                  path: "reviews",
                  element: <Reviews />,
                },
              ],
            },
          ],
        },
        {
          path: "dish/:dishId",
          element: <MenuItem />,
        },
      ],
      errorElement: <div>Not found</div>,
    },
  ]);
  return (
    <Provider store={store}>
      <AuthorizationContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthorizationContextProvider>
    </Provider>
  );
};

export default App;
