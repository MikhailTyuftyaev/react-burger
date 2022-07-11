import React from "react";
import {
  Input,
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";
import styles from "./orders.module.css";

export function OrdersPage() {
  const { path } = useRouteMatch();

  
  return (
    <>
      <div className={`${styles.wrapper} mt-10`}>
            <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default mt-2">
                Создан
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-04-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-03-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/core-mobile.png"></img>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">400</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
            <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default mt-2">
                Создан
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-04-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-03-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/core-mobile.png"></img>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">400</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
            <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default mt-2">
                Создан
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-04-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-03-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/core-mobile.png"></img>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">400</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
            <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default mt-2">
                Создан
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-04-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-03-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/core-mobile.png"></img>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">400</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
            <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default mt-2">
                Создан
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-04-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/sauce-03-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"></img>
                  </div>
                  <div className={styles.img_item}>
                    <img src="https://code.s3.yandex.net/react/code/core-mobile.png"></img>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">400</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
      </div>
    </>
  );
}
