import React, {useCallback} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom'; 
import styles from "./login.module.css";

export function RegisterPage() {
  const history = useHistory(); 

  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 
  return (
    <>
      <div className={styles.wrapper}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input type={"text"} placeholder={"Имя"} />
        <Input type={"email"} placeholder={"E-mail"} />
        <Input type={"password"} placeholder={"Пароль"} icon={"ShowIcon"} />
        <Button type="primary" size="medium">
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
