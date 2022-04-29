import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";
import styles from "./profile.module.css";

export function ProfilePage() {
  const { path } = useRouteMatch();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.tabs} mr-15`}>
          <NavLink
            exact
            to={`${path}/`}
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            activeClassName={styles.active}
          >
            Профиль
          </NavLink>
          <NavLink
            to={`${path}/orders`}
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            activeClassName={styles.active}
          >
            История заказов
          </NavLink>
          <NavLink
            to={`${path}/exit`}
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            activeClassName={styles.active}
          >
            Выход
          </NavLink>
          <div className={`${styles.cta} mt-20`}>
            <p className="text text_type_main-default text_color_inactive">
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
        </div>
        <Switch>
          <Route path={`${path}/`} exact={true}>
            <div className={styles.tabs_container}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                icon={"EditIcon"}
                value={"Марк"}
                className="text_color_inactive"
              />
              <Input
                type={"email"}
                placeholder={"E-mail"}
                icon={"EditIcon"}
                value={"mail@stellar.burgers"}
              />
              <Input
                type={"password"}
                placeholder={"Пароль"}
                icon={"EditIcon"}
                value={"123123123"}
              />
              <div className={styles.cta}>
                <Button type="secondary" size="medium">
                  Отмена
                </Button>
                <Button type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}
