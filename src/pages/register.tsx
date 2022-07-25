import React, {SyntheticEvent, useCallback, useState} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory, Redirect } from 'react-router-dom'; 
import styles from "./login.module.css";
import { useAppSelector, useDispatch } from "../services/types";
import { sendRegisterRequest } from "../services/actions/auth"

export function RegisterPage() {
  const history = useHistory(); 
  const dispatch = useDispatch();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const register = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(sendRegisterRequest(nameValue, emailValue, passValue));
  }

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isRegistered = useAppSelector((state) => state.auth.isRegistered);

  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 
  if (isRegistered) {
    return <Redirect to='/login' />;
  } else if (isLoggedIn) {
    return <Redirect to='/' />;
  } else {
  return (
    <>
      <form onSubmit={register} className={styles.wrapper}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input 
          type={"text"} 
          placeholder={"Имя"} 
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          />
        <Input 
          type={"email"} 
          placeholder={"E-mail"} 
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          />
        <Input 
          type={"password"} 
          placeholder={"Пароль"} 
          icon={"ShowIcon"} 
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
          />
        <Button type="primary" size="medium" onClick={register}>
          Зарегистрироваться
        </Button>
        <div className={`${styles.cta} mt-15`}>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
            <Button type="secondary" size="medium" onClick={login}>
              Войти
            </Button>
          </p>
        </div>
      </form>
    </>
  );
}
}
