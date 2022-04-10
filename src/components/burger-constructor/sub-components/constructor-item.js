import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { useDispatch} from "react-redux";
import { DELETE_ITEM, DECREASE_ITEM, MOVE_ITEM } from "../../../services/actions";

const ConstructorItem = ({ index, id, ...props }) => {
    const dispatch = useDispatch();

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

    return(
        <div className={styles.constructor_list}>
        <div className={`${styles.icon_box} ml-2 `}>
          <DragIcon type="primary" />
        </div>

        <div className={`${styles.element_box} ml-2 pr-2 `}>
          <ConstructorElement
            text={props.name}
            price={props.price}
            thumbnail={props.thumbnail}
            handleClose={() => deleteItem(id, index)}
          />
        </div>
      </div>
    );
};

ConstructorItem.propTypes = {
    /** Item index */
    index: PropTypes.number,
    /** Item _id */
    id: PropTypes.string,
  };
  
export default ConstructorItem;