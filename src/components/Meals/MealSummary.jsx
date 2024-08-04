import React from "react";
import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Savor Gourmet Flavors, Delivered Fresh to Your Door</h2>
      <p>
        Explore a curated selection of exquisite meals crafted by our expert
        chefs. Enjoy the luxury of restaurant-quality dishes, perfect for lunch
        or dinner, in the comfort of your home.
      </p>
      <p>
        Each meal is prepared with the finest, fresh ingredients, ensuring a
        delightful culinary experience every time.
      </p>
    </section>
  );
};

export default MealSummary;
