import React, { SyntheticEvent, useState} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";
import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../services/types";
import {saveAccountDataRequest, sendLogoutRequest } from "../services/actions/auth";
import { ProtectedRoute } from "../components/protected-route/protected-route";
import { OrdersPage } from "./orders";
import { FeedInfoPage } from "./feed-info";

export function ProfilePage() {
  const { path } = useRouteMatch();

  const auth = useAppSelector((state)=> state.auth.account);

  const [nameValue, setNameValue] = useState(auth ? auth.name : "");
  const [emailValue, setEmailValue] = useState(auth ? auth.email : "");
  const [passValue, setPassValue] = useState("");

  const dispatch = useDispatch();

  const saveAccountData = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(saveAccountDataRequest(nameValue, emailValue));
  }

  const getUserData = (e: SyntheticEvent) => {
    e.preventDefault();
    setNameValue(auth.name)
    setEmailValue(auth.email)
    setPassValue("")
  }

  const logout = () => {
    dispatch(sendLogoutRequest())
  }
  return (
    <>
      <Switch>
          <ProtectedRoute path={`${path}`} exact={true}>
          <div className={styles.wrapper}>
        <div className={`${styles.tabs} mr-15 mt-30`}>
          <NavLink
            exact
            to={path}
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
          <p
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            onClick={()=> logout()}
          >
            Выход
          </p>
          <div className={`${styles.cta} mt-20`}>
            <p className="text text_type_main-default text_color_inactive">
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
        </div>
        
            <form onSubmit={saveAccountData} className={`${styles.tabs_container} mt-30`}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                icon={"EditIcon"}
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
              />
              <Input
                type={"email"}
                placeholder={"E-mail"}
                icon={"EditIcon"}
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
              />
              <Input
                type={"password"}
                placeholder={"Пароль"}
                icon={"EditIcon"}
                onChange={(e) => setPassValue(e.target.value)}
                value={passValue}
              />
              <div className={styles.cta}>
                <Button 
                  type="secondary" 
                  size="medium" 
                  onClick={getUserData}
                  htmlType="reset">
                  Отмена
                </Button>
                <Button 
                  type="primary" 
                  size="medium"
                  htmlType="submit">  
                  Сохранить
                </Button>
              </div>
            </form>
            </div>
          </ProtectedRoute>
          <ProtectedRoute  path={`${path}/orders`} exact={true}>
              <OrdersPage/>
          </ProtectedRoute>
          <ProtectedRoute path={`${path}/orders/:id`} exact={true}>
            <FeedInfoPage />
          </ProtectedRoute>
        </Switch>
      
    </>
  );
}
