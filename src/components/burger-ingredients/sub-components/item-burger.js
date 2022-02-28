import React, { useState, useRef } from "react";
import styles from "./item-burger.module.css";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerItem = ({ ...props }) => {
  const [modal, isModal] = useState({
    visible: false,
  });

  function handleClickBurger() {
    isModal({
      visible: true,
    });
  }

  function onClose() {
    isModal({
      visible: false,
    });
  }

  return (
    <>
      <div className={styles.burger_item} onClickCapture={handleClickBurger}>
        <img src={props.image} />
        {props.count ? <Counter count={1} size="default" /> : null}
        <div className={`${styles.burger_price} mt-2`}>
          <p className="text text_type_digits-default mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className="text text_type_main-default  mt-2 mb-6">{props.title}</p>
      </div>
      <IngredientDetails
        header="Детали ингредиента"
        isModal={modal}
        onClose={onClose}
        image={props.imageLarge}
        name={props.title}
        calories={props.calories}
        proteins={props.proteins}
        fat={props.fat}
        carbohydrates={props.carbohydrates}
      />
    </>
  );
};
export default BurgerItem;
