import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Cart from "../Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};

export default Layout;
