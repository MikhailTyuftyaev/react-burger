import React, {useCallback} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom'; 
import styles from "./login.module.css";

export function LoginPage() {
  const history = useHistory(); 

  const register = useCallback(
    () => {
        history.replace({ pathname: '/register' });
    },
    [history]
  ); 

  const forgot = useCallback(
    () => {
        history.replace({ pathname: '/forgot-password' });
    },
    [history]
  ); 
  return (
      <div className={styles.wrapper}>
        <p className="text text_type_main-medium">Вход</p>
        <Input type={"email"} placeholder={"E-mail"} />
        <Input type={"password"} placeholder={"Пароль"} icon={"ShowIcon"} />
        <Button type="primary" size="medium">
          Войти
        </Button>
        <div className={`${styles.cta} mt-15`}>
          <p className="text text_type_main-default text_color_inactive">
            Вы — новый пользователь?
            <Button type="secondary" size="medium" onClick={register}>
              Зарегестрироваться
            </Button>
          </p>
          <p className="text text_type_main-default text_color_inactive mt-4">
            Забыли пароль?
            <Button type="secondary" size="medium" onClick={forgot}>
                Восстановить пароль
            </Button>
          </p>
        </div>
      </div>
  );
}
