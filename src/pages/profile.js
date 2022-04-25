import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import styles from "./profile.module.css";

export function ProfilePage() {
  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        <div className={`${styles.tabs} mr-15`}>
            <p className="text text_type_main-medium pt-4 pb-4">Профиль</p>
            <p className="text text_type_main-medium text_color_inactive pt-4 pb-4">История заказов</p>
            <p className="text text_type_main-medium text_color_inactive pt-4 pb-4">Выход</p>
            <div className={`${styles.cta} mt-20`}>
          <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        </div>
        <div className={styles.tabs_container}>
        <Input type={"text"} placeholder={"Имя"} icon={"EditIcon"} value={"Марк"} className="text_color_inactive"/>
        <Input type={"email"} placeholder={"E-mail"} icon={"EditIcon"} value={"mail@stellar.burgers"}/>
        <Input type={"password"} placeholder={"Пароль"} icon={"EditIcon"} value={"123123123"}/>
        <div className={styles.cta}>
        <Button type="secondary" size="medium">
          Отмена
        </Button>
        <Button type="primary" size="medium">
          Сохранить
        </Button>
        </div>
      </div>
      </div>
    </>
  );
}
