/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import RestaurantSection from "../RestaurantSection";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
