import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./item-burger.module.css";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from 'react-dnd';

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

  const [{opacity}, dragRef] = useDrag({
    type: "bun",
    item: {id: props.id},
    collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
    })
  });

  return (
    <>
      <div className={styles.burger_item} onClickCapture={handleClickBurger} style={{opacity}} ref={dragRef}>
        <img src={props.image} />
        {props.count ? <Counter count={props.count} size="default" /> : null}
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

BurgerItem.propTypes = {
  /** Name burger */
  title: PropTypes.string,
  /** Path for image burger */
  image: PropTypes.string,
  /** Price burger */
  price: PropTypes.number,
  /** Path for large image burger */
  imageLarge: PropTypes.string,
  /** Burger calories */
  calories: PropTypes.number,
  /** Burger proteins */
  proteins: PropTypes.number,
  /** Burger fat */
  fat: PropTypes.number,
  /** Burger carbohydrates*/
  carbohydrates: PropTypes.number,
};

export default BurgerItem;
