import React, {useCallback} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import { useHistory } from 'react-router-dom';
import styles from "./login.module.css";

export function ResetPage() {
  const history = useHistory(); 

  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 
  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          icon={"ShowIcon"}
        />
        <Input type={"text"} placeholder={"Введите код из письма"} />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
        <div className={`${styles.cta} mt-15`}>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?
            <Button type="secondary" size="medium" onClick={login}>
              Войти
            </Button>
          </p>
        </div>
      </div>
    </>
  );
}
