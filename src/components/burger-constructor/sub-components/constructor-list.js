import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-list.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { DELETE_ITEM, DECREASE_ITEM } from "../../../services/actions";

const ConstructorList = ({ ...props }) => {
  const dispatch = useDispatch();

  const constructorItems = useSelector(
    (state) => state.ingredients.ingredients
  );

  const deleteItem = (item, index) => {
    dispatch({
      type: DELETE_ITEM,
      index,
    });
    dispatch({
      type: DECREASE_ITEM,
      id: item,
    });
  };

  return constructorItems.map(function (item, index) {
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
            handleClose={() => deleteItem(item._id, index)}
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
