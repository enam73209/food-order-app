import React from "react";
import {useContext} from 'react';
import HeaderCartIcon from "./HeaderCartIcon";
import classes from "./HeaderCartBTN.module.css";
import CartContext from "../../store/cart-contex";

const HeaderCartBTN = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <HeaderCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBTN;
