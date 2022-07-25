import React, {useEffect} from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux"
import styles from "./orders.module.css";
import { sendLogoutRequest } from "../services/actions/auth";
import OrderCard from "../components/order-card/order-card";
import { getCookie, wsUrl } from "../utils";
import { RootState, useAppSelector, TfeedItem } from "../services/types";
import { wsFeedConnectionStartAction, wsFeedConnectionClosedAction } from "../services/actions/feed";
export function OrdersPage() {
  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsFeedConnectionStartAction(`${wsUrl}?token=${getCookie('accessToken')}`));

    return () => {
        dispatch(wsFeedConnectionClosedAction())
    }
}, [dispatch])

  const ordersArray = useAppSelector((state) => state.feed);

  const logout = () => {
    dispatch(sendLogoutRequest())
  }

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
        {ordersArray.orders && ordersArray.orders.map(function(item: TfeedItem, index: number){
          return (
            <OrderCard 
              id={item._id}
              number={item.number}
              date={item.createdAt}
              name={item.name}
              status={item.status}
              ingredients={item.ingredients}
              key={index}
            />
          )
        })}
            
      </div>
      </div>
    </>
  );
}
