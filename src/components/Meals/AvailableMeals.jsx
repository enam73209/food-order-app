import React, {useEffect,useState} from "react";
import classes from "./AvailableMeal.module.css";
import MealCard from "./MealCard";
import MealItem from "./MealItem";

const AvailableMeals = () => {
const[meals,setMeals]=useState([]);
  useEffect(()=>{
    const fetchMeals = async()=>{
      const response =await (fetch('https://food-order-app-a0b24-default-rtdb.firebaseio.com/meals.json'));
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];
      for(const key in responseData){
        const meal = responseData[key];
        if(meal){
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description:responseData[key].description,
            price:responseData[key].price
          })
        }
        else{
          console.warn(`Meal at index ${key} is null.`);
        }

      }
      setMeals(loadedMeals);
      console.log(meals)
    }
    fetchMeals();
  },[])
  const mealList = meals.map((meal) => (
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
