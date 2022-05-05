import React, {useState} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Switch, NavLink, useRouteMatch, Redirect } from "react-router-dom";
import styles from "./profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getUserRequest, saveAccountDataRequest, sendLogoutRequest } from "../services/actions/auth";

export function ProfilePage() {
  const { path } = useRouteMatch();

  const auth = useSelector((state)=> state.auth.account);
  const isLoggedOut = useSelector((state) => state.auth.isLoggedOut)

  const [nameValue, setNameValue] = useState(auth ? auth.name : "");
  const [emailValue, setEmailValue] = useState(auth ? auth.email : "");
  const [passValue, setPassValue] = useState("");

  const dispatch = useDispatch();

  const saveAccountData = (name, email, pass) => {
    dispatch(saveAccountDataRequest(name, email, pass));
  }

  const getUserData = () => {
    dispatch(getUserRequest())
    setNameValue(auth.name)
    setEmailValue(auth.email)
    setPassValue("")
  }

  const logout = () => {
    dispatch(sendLogoutRequest())
  }
  if (isLoggedOut) {
    return <Redirect to='/login' />;
  }
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
        <Switch>
          <Route path={`${path}/`} exact={true}>
            <div className={styles.tabs_container}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                icon={"EditIcon"}
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
                className="text_color_inactive"
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
                <Button type="secondary" size="medium" onClick={()=> getUserData()}>
                  Отмена
                </Button>
                <Button 
                  type="primary" 
                  size="medium"
                  onClick={() => saveAccountData(nameValue, emailValue, passValue)}>
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
