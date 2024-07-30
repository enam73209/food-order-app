import React , {Fragment} from 'react';
import MealsImg from '../../assets/meals.jpg';
import classes from '../Layouts/header.module.css';
import HeaderCartBTN from './HeaderCartBTN';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartBTN/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImg} alt="meals Img"/>
      </div>
    </Fragment>
  );
};

export default Header;