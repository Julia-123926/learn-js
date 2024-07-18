/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { restaurants } from "../mock";
import Title from "./Title";
import Restaurant from "./Restaurant";
import Layout from "./Layout";
import RestaurantSection from "./RestaurantSection";

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

{
  /* <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({ name, menu, reviews }) => {
          return (
            <li>
              <h2>{name}</h2>
              <h3>Menu</h3>
              <div>
                {menu
                  .reduce((acc, { name }) => {
                    acc.push(name);
                    return acc;
                  }, [])
                  .join(", ")}
              </div>
              <h3>Reviews</h3>
              <div>
                {reviews
                  .reduce((acc, { text }) => {
                    acc.push(text);
                    return acc;
                  }, [])
                  .join(", ")}
              </div>
            </li>
          );
        })}
      </ul> */
}
