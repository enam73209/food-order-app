import React from "react";
import classes from "./MealCard.module.css";
import PropTypes from "prop-types";

const MealCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
MealCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MealCard;
