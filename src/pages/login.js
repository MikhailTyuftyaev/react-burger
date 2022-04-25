import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import styles from "./login.module.css";

export function LoginPage() {
  return (
    <>
      <AppHeader />
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
            <Button type="secondary" size="medium">
              Зарегестрироваться
            </Button>
          </p>
          <p className="text text_type_main-default text_color_inactive mt-4">
            Забыли пароль?
            <Button type="secondary" size="medium">
                Восстановить пароль
            </Button>
          </p>
        </div>
      </div>
    </>
  );
}
