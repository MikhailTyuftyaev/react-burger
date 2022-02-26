import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "./sub-components/constructor-list";
import styles from "./burger-constructor.module.css";
import { Scrollbars } from "react-custom-scrollbars";

const BurgerConstructor = (props) => {
  return (
    <div className="burger_constructor">
      <div className={`${styles.constructor_container} mt-25`}>
        <div className="ml-10 mr-5">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={props.data[0].image_mobile}
          />
        </div>
        <div className={styles.constructor_list}>
          <Scrollbars
            style={{ height: "464px" }}
            renderView={(props) => (
              <div {...props} className={styles.constructor_list} />
            )}
            renderTrackVertical={(props) => (
              <div {...props} className={styles.track1_vertical} />
            )}
            renderThumbVertical={(props) => (
              <div {...props} className={styles.thumb1_vertical} />
            )}
          >
            <ConstructorList data={props.data} />
          </Scrollbars>
        </div>
        <div className="ml-10 mr-5">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={props.data[0].image_mobile}
          />
        </div>
      </div>
      <div className={`${styles.cta_container} mt-10`}>
        <div className={`${styles.price_block} mr-10`}>
          <p className="text text_type_digits-medium mr-2">0</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default BurgerConstructor;
