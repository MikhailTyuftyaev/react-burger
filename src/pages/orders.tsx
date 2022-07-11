import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux"
import styles from "./orders.module.css";
import { sendLogoutRequest } from "../services/actions/auth";
import OrderCard from "../components/order-card/order-card";

export function OrdersPage() {
  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(sendLogoutRequest())
  }

  const ingredients = [
    {'id': 0, 'image_mobile': "https://code.s3.yandex.net/react/code/meat-01-mobile.png"},
    {'id': 1, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-02-mobile.png"},
    {'id': 2, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-04-mobile.png"},
    {'id': 3, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-03-mobile.png"},
    {'id': 4, 'image_mobile': "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"},
    {'id': 5, 'image_mobile': "https://code.s3.yandex.net/react/code/core-mobile.png"}
  ]
  return (
    <>
      <div className={`${styles.wrapper} mt-10`}>
      <div className={`${styles.tabs} mr-15 mt-30`}>
          <NavLink
            exact
            to="/profile"
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            activeClassName={styles.active}
          >
            Профиль
          </NavLink>
          <NavLink
            to={`${path}`}
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            activeClassName={styles.active}
          >
            История заказов
          </NavLink>
          <p
            className="text text_type_main-medium text_color_inactive pt-4 pb-4"
            onClick={()=> logout()}
          >
            Выход
          </p>
          <div className={`${styles.cta} mt-20`}>
            <p className="text text_type_main-default text_color_inactive">
              В этом разделе вы можете просмотреть свою историю заказов
            </p>
          </div>
        </div>
      <div className={`${styles.wrapper_cards} mt-10 pr-2`}>
            <OrderCard 
              number="#1234567890"
              date="Сегодня, 16:20 i-GMT+3"
              name="Death Star Starship Main бургер"
              status="Создан"
              ingredients={ingredients}
              price={400}
            />
            <OrderCard 
              number="#1234567890"
              date="Сегодня, 16:20 i-GMT+3"
              name="Death Star Starship Main бургер"
              status="Создан"
              ingredients={ingredients}
              price={400}
            />
            <OrderCard 
              number="#1234567890"
              date="Сегодня, 16:20 i-GMT+3"
              name="Death Star Starship Main бургер"
              status="Создан"
              ingredients={ingredients}
              price={400}
            />
            <OrderCard 
              number="#1234567890"
              date="Сегодня, 16:20 i-GMT+3"
              name="Death Star Starship Main бургер"
              status="Создан"
              ingredients={ingredients}
              price={400}
            />
            <OrderCard 
              number="#1234567890"
              date="Сегодня, 16:20 i-GMT+3"
              name="Death Star Starship Main бургер"
              status="Создан"
              ingredients={ingredients}
              price={400}
            />
      </div>
      </div>
    </>
  );
}
