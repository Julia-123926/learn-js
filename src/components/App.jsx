/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { restaurants } from "../mock";
import Title from "./Title";
import Restaurant from "./Restaurant";
import Layout from "./Layout";
import RestaurantSection from "./RestaurantSection";
import "../stylenull.css";

const App = () => {
  return (
    <div>
      <Layout>
        <Title title="Restaurants" />
        <RestaurantSection />
      </Layout>
    </div>
  );
};

export default App;
