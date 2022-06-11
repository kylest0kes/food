import React, { Fragment } from 'react';

import meal  from '../../../assets/meals.jpg';
import HeaderButton from '../HeaderButton/HeaderButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Order Up</h1>
            <HeaderButton />
        </header>
        <div className={classes['main-image']}>
            <img src={meal} alt='header-img'/>
        </div>
    </Fragment>
  )
}

export default Header;