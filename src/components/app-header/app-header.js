import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a
            href="#"
            className={`${
              styles.icon_button_1 + " text text_type_main-default"
            }`}
          >
            <BurgerIcon type="primary" />
            Конструктор
          </a>
          <a
            href="#"
            className={`${
              styles.icon_button_2 + " text text_type_main-default"
            }`}
          >
            <ListIcon type="secondary" />
            Лента заказов
          </a>
          <a href="#" className={styles.logo}>
            <Logo />
          </a>
          <a
            href="#"
            className={`${
              styles.icon_button_2 + " text text_type_main-default"
            }`}
          >
            <ProfileIcon type="secondary" />
            Личный кабинет
          </a>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
