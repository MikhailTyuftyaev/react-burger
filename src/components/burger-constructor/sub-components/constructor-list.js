import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-list.module.css";

const ConstructorList = ({ ...props }) => {
  return props.data.map(function (item, index) {
    return (
      <div className={styles.constructor_list} key={index}>
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

export default ConstructorList;
