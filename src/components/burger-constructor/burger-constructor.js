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
import { ADD_ITEM, ADD_BUN, INCREASE_ITEM, sendOrderRequest } from "../../services/actions";


const BurgerConstructor = ({ ...props }) => {

  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients.data)
  const buns = useSelector(state => state.ingredients.buns)

  console.log(buns[0])

  const [modal, isModal] = useState({
    visible: false,
  });

  function handleClickBurger() {
    dispatch(sendOrderRequest(orderRequest));
      isModal({
        visible: true,
      });

  }

  function onClose() {
    isModal({
      visible: false,
    });
  } 


  const orderArray = ingredients.filter((item) => item.__v > 0);
  const orderRequest = orderArray.map(function (item) {
    return item._id
  });

  let sum = 0;
  const total = ingredients.map(function (item) {
    if(item.__v > 0) {
      return sum + ((parseInt(item.price, 10)*item.__v));
    } else {
      return 0
    }
  });

  const result = total.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      movePostponedItem(item);
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  });

  const movePostponedItem = (item) => {
    if (item.type === "bun") {
      dispatch({
        type: ADD_BUN,
        item: {...item},
      });
    }else{
      dispatch({
        type: ADD_ITEM,
        item: {...item},
      });
    }
    dispatch({
      type: INCREASE_ITEM,
      item: {...item}
    });
  }

  const border = isHover ? '0px 0px 10px 0px rgba(76, 76, 255, 1)' : 'none';

  return (
    <>
      <div className="burger_constructor">
        <div className={`${styles.constructor_container} mt-25`} ref={dropTarget}>
          <div className="ml-10 mr-4">
          {buns[0] !== null ? 
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${buns.name} (верх)`}
              price={buns.price}
              thumbnail={buns.image_mobile}
            />
            : <p className="text text_type_main-default text_color_inactive">
              Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
              </p>}
          </div>
          <div className={styles.constructor_list} style={{boxShadow: border}}>
            <div className={styles.plus_bg}>+</div>
            <ConstructorList />
          </div>
          <div className="ml-10 mr-4">
          {buns[0] !== null ? 
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${buns.name} (низ)`}
              price={buns.price}
              thumbnail={buns.image_mobile}
            /> : <p className="text text_type_main-default text_color_inactive">
              Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
              </p>}
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
