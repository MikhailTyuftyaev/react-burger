import React, { useCallback, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { sendForgotPasswordRequest } from '../services/actions/auth'
import styles from "./login.module.css";

export function ForgotPage() {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState("");

  const dispatch = useDispatch();

  const sendRequest = (emailValue) => {
    dispatch(sendForgotPasswordRequest(emailValue));
  };

  const login = useCallback(() => {
    history.replace({ pathname: "/login" });
  }, [history]);
  return (
    <div className={styles.wrapper}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <Input
        type={"email"}
        placeholder={"Укажите e-mail"}
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
      />
      <Button
        type="primary"
        size="medium"
        onClick={() => sendRequest(emailValue)}
      >
        Восстановить
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
  );
}
