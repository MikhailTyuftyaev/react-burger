import React from "react";
import {  CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css"
import { TorderCard, TorderIngredients } from "../../services/types";
import { Link, useLocation, useRouteMatch } from "react-router-dom"

const OrderCard = ({number, date, name, status, ingredients, price}: TorderCard) => {
  const location = useLocation();
  const { path } = useRouteMatch();
    return(
      <Link
        className={styles.link}
        to={{
          pathname: `${path}/${number}`,
          state: { background: location },
        }}
      >
        <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">{number}</p>
                <p className="text text_type_main-default text_color_inactive">{date}</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              {name}
              </p>
              <p className="text text_type_main-default mt-2">
                {status}
              </p>
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                {ingredients.map(function (item: TorderIngredients, index: number) {
                  return (
                    <div 
                      className={styles.img_item}>
                    <img src={item.image_mobile}></img>
                  </div>
                  );
                })}
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">{price}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
        </Link>
    )
}

export default OrderCard;