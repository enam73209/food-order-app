import React, { useEffect, useState } from "react";
import classes from "./AvailableMeal.module.css";
import MealCard from "./MealCard";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    const response = await fetch(
      "https://food-order-app-a0b24-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      // setIsLoading(false);
      throw new Error("Something went wrong! Please try again later");
    }
    const responseData = await response.json();
    console.log(responseData);
    const loadedMeals = [];
    for (const key in responseData) {
      const meal = responseData[key];
      if (meal) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      } else {
        console.warn(`Meal at index ${key} is null.`);
      }
    }
    setMeals(loadedMeals);
    setIsLoading(false);
    console.log(meals);
  };
  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.mealsLoading}>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p className={classes.mealsError}>{error}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <MealCard>
        <ul>{mealList}</ul>
      </MealCard>
    </section>
  );
};

export default AvailableMeals;
