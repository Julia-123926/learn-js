/* eslint-disable no-unused-vars */
import React from "react";
import Review from "../Review";
import CounterContainer from "../Counter/CounterContainer";
import MenuItem from "../MenuItem";

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>Menu</h3>
      <div>
        {menu.map(({ name }) => (
          <MenuItem name={name} />
        ))}
      </div>
      <h3>Reviews</h3>
      <div>
        {reviews?.length && reviews.map(({ text }) => <Review text={text} />)}
      </div>
    </div>
  );
};

export default Restaurant;
