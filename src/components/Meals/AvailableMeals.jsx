import React from "react";
import classes from "./AvailableMeal.module.css";
import MealCard from "./MealCard";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      description:
        "A healthy salad with grilled chicken, mixed greens, and a light vinaigrette.",
      price: 12.99,
    },
    {
      id: 2,
      name: "Beef Burger",
      description:
        "Juicy beef patty with cheese, lettuce, tomato, and a special sauce on a sesame bun.",
      price: 10.99,
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description:
        "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil.",
      price: 14.99,
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      description:
        "Traditional Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      price: 13.99,
    },
    {
      id: 5,
      name: "Vegetable Stir Fry",
      description:
        "A mix of fresh vegetables stir-fried with soy sauce and served with steamed rice.",
      price: 9.99,
    },
    {
      id: 6,
      name: "Chicken Tacos",
      description:
        "Soft tortillas filled with grilled chicken, lettuce, cheese, and a tangy salsa.",
      price: 8.99,
    },
    {
      id: 7,
      name: "Seafood Paella",
      description:
        "A traditional Spanish dish with rice, saffron, and a mix of seafood like shrimp, mussels, and squid.",
      price: 18.99,
    },
    {
      id: 8,
      name: "Beef Steak",
      description:
        "Grilled beef steak served with mashed potatoes, steamed vegetables, and a rich gravy.",
      price: 19.99,
    },
    {
      id: 9,
      name: "Vegetarian Sushi Platter",
      description:
        "An assortment of vegetarian sushi rolls with avocado, cucumber, and pickled radish.",
      price: 15.99,
    },
    {
      id: 10,
      name: "Lemon Garlic Salmon",
      description:
        "Baked salmon fillet with a lemon garlic sauce, served with quinoa and asparagus.",
      price: 17.99,
    },
  ];

  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <MealCard>
        <ul>{mealList}</ul>
      </MealCard>
    </section>
  );
};

export default AvailableMeals;
