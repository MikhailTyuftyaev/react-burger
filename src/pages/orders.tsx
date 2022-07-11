import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";
import styles from "./profile.module.css";

export function OrdersPage() {
  const { path } = useRouteMatch();

  
  return (
    <>
      <div className={styles.wrapper}>
            История заказов
      </div>
    </>
  );
}
