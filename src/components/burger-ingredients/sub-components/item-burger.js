import React from "react";
import styles from "./item-burger.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerItem = (props) => {
  return (
    <div className={styles.burger_item}>
      <img src={props.image} />
      {props.count ? <Counter count={1} size="default" /> : null}
      <div className={`${styles.burger_price} mt-2`}>
        <p className="text text_type_digits-default mr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className="text text_type_main-default  mt-2 mb-6">{props.title}</p>
    </div>
  );
};
export default BurgerItem;
