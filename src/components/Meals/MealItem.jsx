import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-contex";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;
  const AddtoMealHandler = amount=>{
        CartCtx.addItem({
          id:props.meal.id,
          name:props.meal.name,
          amount:amount,
          price:props.meal.price

        });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddtoCart={AddtoMealHandler}/>
        </div>
    </li>
  );
};
export default MealItem;
