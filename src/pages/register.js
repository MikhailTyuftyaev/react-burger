import React, {useCallback, useState, useEffect} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory, Redirect } from 'react-router-dom'; 
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendRegisterRequest, getUserRequest } from "../services/actions/auth"

export function RegisterPage() {
  const history = useHistory(); 
  const dispatch = useDispatch();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const register = (name, email, pass) => {
    dispatch(sendRegisterRequest(name, email, pass));
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRegistered = useSelector((state) => state.auth.isRegistered);

  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 
  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);
  if (isRegistered) {
    return <Redirect to='/login' />;
  } else if (isLoggedIn) {
    return <Redirect to='/' />;
  } else {
  return (
    <>
      <div className={styles.wrapper}>
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
        <Button type="primary" size="medium" onClick={() => register(nameValue, emailValue, passValue)}>
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
      </div>
    </>
  );
}
}
