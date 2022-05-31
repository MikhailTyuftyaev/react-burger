import React from "react";
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
import { TBurgerItem, TItem } from "../../utils/types";
import { Link, useLocation } from "react-router-dom"

const BurgerItem = ({ item, ...props }: TBurgerItem) => {
  const dispatch = useDispatch();
  const location = useLocation();


  function handleClickBurger(item: TItem) {
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
    <Link
      to={{
        pathname: `/ingredients/${props.id}`,
        state: { background: location },
      }}
    >
      <div
        className={styles.burger_item}
        onClick={() => handleClickBurger(item)}
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
    </Link>
  );
};

export default BurgerItem;
