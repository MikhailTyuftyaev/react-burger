import React from "react";
import PropTypes from "prop-types";
import styles from "./item-burger.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  ADD_CURRENT_ITEM,
  OPEN_MODAL,
} from "../../../services/actions/modal";

const BurgerItem = ({ item, ...props }) => {
  const dispatch = useDispatch();


  function handleClickBurger(item) {
    dispatch({
      type: ADD_CURRENT_ITEM,
      item,
    });
    dispatch({
      type: OPEN_MODAL,
      ingredientModal: true,
    });
  }

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <>
      <div
        className={styles.burger_item}
        onClick={() => handleClickBurger(props)}
        style={{ opacity }}
        ref={dragRef}
      >
        <img src={props.image} />
        {props.count ? <Counter count={props.count} size="default" /> : null}
        <div className={`${styles.burger_price} mt-2`}>
          <p className="text text_type_digits-default mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className="text text_type_main-default  mt-2 mb-6">{props.title}</p>
      </div>
    </>
  );
};

BurgerItem.propTypes = {
  /** Name burger */
  title: PropTypes.string.isRequired,
  /** Item _id */
  id: PropTypes.string.isRequired,
  /** Item parameters */
  item: PropTypes.object.isRequired,
  /** Path for image burger */
  image: PropTypes.string.isRequired,
  /** Price burger */
  price: PropTypes.number.isRequired,
  /** Path for large image burger */
  imageLarge: PropTypes.string.isRequired,
  /** Burger calories */
  calories: PropTypes.number.isRequired,
  /** Burger proteins */
  proteins: PropTypes.number.isRequired,
  /** Burger fat */
  fat: PropTypes.number.isRequired,
  /** Burger count */
  count: PropTypes.number.isRequired,
  /** Burger carbohydrates*/
  carbohydrates: PropTypes.number.isRequired,
};

export default BurgerItem;
