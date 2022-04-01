import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-list.module.css";
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid'

const ConstructorList = ({ ...props }) => {
  const constructorItems = useSelector(state => state.ingredients.constructorItems)

  const newData = constructorItems.filter((item) => item.type !== "bun");
  console.log(constructorItems)
  return newData.map(function (item, index) {
    return (
      <div className={styles.constructor_list} key={nanoid()}>
        <div className={`${styles.icon_box} ml-2 `}>
          <DragIcon type="primary" />
        </div>

        <div className={`${styles.element_box} ml-2 pr-2 `}>
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
          />
        </div>
      </div>
    );
  });
};

ConstructorList.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default ConstructorList;
