import React from 'react';
import HeaderCartIcon from './HeaderCartIcon';
import classes from './HeaderCartBTN.module.css'

const HeaderCartBTN = () => {
  return (
    <button className = {classes.button}>
      <span className={classes.icon}>
        <HeaderCartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartBTN;