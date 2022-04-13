import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./item-burger.module.css";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CURRENT_ITEM,
  DELETE_CURRENT_ITEM,
} from "../../../services/actions/modal";
import Modal from "../../modal/modal";

const BurgerItem = ({ item, ...props }) => {
  const dispatch = useDispatch();
  const modalItem = useSelector((state) => state.modal.currentItem);

  const [modal, isModal] = useState({
    visible: false,
  });

  function handleClickBurger(item) {
    dispatch({
      type: ADD_CURRENT_ITEM,
      item,
    });
    isModal({
      visible: true,
    });
  }

  function onClose(item) {
    dispatch({
      type: DELETE_CURRENT_ITEM,
      item,
    });
    isModal({
      visible: false,
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
      <Modal
        header="Детали ингредиента"
        onClose={onClose}
        isModal={modal}
      >
        <IngredientDetails
          image={modalItem.imageLarge}
          name={modalItem.title}
          calories={modalItem.calories}
          proteins={modalItem.proteins}
          fat={modalItem.fat}
          carbohydrates={modalItem.carbohydrates}
        />
      </Modal>
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
