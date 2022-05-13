import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from 'react-router-dom';
import styles from "./app-header.module.css";


function AppHeader() {
  return (
    <header>
      <nav>
        <NavLink
          exact 
          to={{ pathname: `/` }}
          className={`${styles.icon_button + " text text_type_main-default"}`}
          activeClassName={styles.active}
        >
          <BurgerIcon type="secondary" />
          Конструктор
        </NavLink>
        <NavLink
          to={{ pathname: `/order-list` }}
          className={`${styles.icon_button + " text text_type_main-default"}`}
          activeClassName={styles.active}
        >
          <ListIcon type="secondary" />
          Лента заказов
        </NavLink>
        <NavLink 
            exact 
            to={{ pathname: `/` }} 
            className={styles.logo}>
          <Logo />
        </NavLink>
        <NavLink
          to={{ pathname: `/profile` }}
          className={`${styles.icon_button + " text text_type_main-default"}`}
          activeClassName={styles.active}
        >
          <ProfileIcon type="secondary" />
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
