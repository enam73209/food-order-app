import React, { Fragment } from "react";
import MealsImg from "../../assets/meal.jpeg";
import classes from "../Layouts/header.module.css";
import HeaderCartBTN from "./HeaderCartBTN";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBTN onClick ={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="meals Img" />
      </div>
    </Fragment>
  );
};

export default Header;
