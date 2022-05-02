import React, {useCallback, useState} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { sendResetPasswordRequest } from "../services/actions/auth";
import styles from "./login.module.css";

export function ResetPage() {
  const history = useHistory(); 
  const dispatch = useDispatch();

  const [passValue, setPassValue] = useState("");
  const [tokenValue, setTokenValue] = useState("");
  
  const reset = (passValue, tokenValue) => {
    dispatch(sendResetPasswordRequest(passValue, tokenValue))
  }

  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 
  return (
    <>
      <div className={styles.wrapper}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          icon={"ShowIcon"}
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
        />
        <Input 
          type={"text"} 
          placeholder={"Введите код из письма"} 
          onChange={(e) => setTokenValue(e.target.value)}
          value={tokenValue}
          />
        <Button type="primary" size="medium" onClick={() => reset(passValue, tokenValue)}>
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
