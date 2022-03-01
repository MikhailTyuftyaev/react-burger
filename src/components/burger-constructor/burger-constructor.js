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

const BurgerConstructor = ({ ...props }) => {
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
      <div className="burger_constructor">
        <div className={`${styles.constructor_container} mt-25`}>
          <div className="ml-10 mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
            />
          </div>
          <div className={styles.constructor_list}>
            <ConstructorList data={props.data} />
          </div>
          <div className="ml-10 mr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
            />
          </div>
        </div>
        <div className={`${styles.cta_container} mt-10`}>
          <div className={`${styles.price_block} mr-10`}>
            <p className="text text_type_digits-medium mr-2">0</p>
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
