import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "./sub-components/constructor-list";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-detail";
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ADD_ITEM, INCREASE_ITEM } from "../../services/actions";


const BurgerConstructor = ({ ...props }) => {

  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients)

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

  let sum = 0;
  const total = ingredients.data.map(function (item) {
    return sum + parseInt(item.price, 10);
  });

  const result = total.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  const [{isHover}, dropTarget] = useDrop({
    accept: "bun",
    drop(item) {
      movePostponedItem(item);
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  });

  const movePostponedItem = (item) => {
    dispatch({
      type: ADD_ITEM,
      ...item
    });
    dispatch({
      type: INCREASE_ITEM,
      ...item
    });
  }

  const border = isHover ? '0px 0px 10px 0px rgba(76, 76, 255, 1)' : 'none';

  return (
    <>
      <div className="burger_constructor">
        <div className={`${styles.constructor_container} mt-25`} ref={dropTarget}>
          <div className="ml-10 mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${ingredients.data[0].name} (верх)`}
              price={ingredients.data[0].price}
              thumbnail={ingredients.data[0].image_mobile}
            />
          </div>
          <div className={styles.constructor_list} style={{boxShadow: border}}>
            <div className={styles.plus_bg}>+</div>
            <ConstructorList />
          </div>
          <div className="ml-10 mr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${ingredients.data[0].name} (низ)`}
              price={ingredients.data[0].price}
              thumbnail={ingredients.data[0].image_mobile}
            />
          </div>
        </div>
        <div className={`${styles.cta_container} mt-10`}>
          <div className={`${styles.price_block} mr-10`}>
            <p className="text text_type_digits-medium mr-2">
              {result ? result : "0"}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={handleClickBurger}>
            Оформить заказ
          </Button>
        </div>
        <OrderDetails isModal={modal} onClose={onClose} />
      </div>
    </>
  );
};

BurgerConstructor.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default BurgerConstructor;
