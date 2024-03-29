import React from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import ConstructorList from "./sub-components/constructor-list";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-detail";
import { useAppSelector, TItem, useDispatch } from "../../services/types";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import {
  sendOrderRequest,
} from "../../services/actions";
import {
  increaseItemAction,
  addBunAction,
  addItemAction,
  clearOrderNumberAction
} from "../../services/actions"
import {
  openModalAction,
  closeModalAction
} from "../../services/actions/modal"
import { useHistory } from 'react-router-dom';

const BurgerConstructor = ({ ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ingredients = useAppSelector((state) => state.ingredients.data);
  const constructorItems = useAppSelector(
    (state) => state.ingredients.ingredients
  );
  const buns = useAppSelector((state) => state.ingredients.buns);
  const modal = useAppSelector((state) => state.modal.orderModal);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  function handleClickBurger() {
    if (!isLoggedIn) {
      history.push({ pathname: '/login', state: { prevPathname: history.location.pathname } });
      return;
    }
    dispatch(sendOrderRequest(orderRequest));
    dispatch(openModalAction());
  }

  function onClose() {
    dispatch(closeModalAction());
    dispatch(clearOrderNumberAction())
  }

  const orderArray = ingredients.filter((item) => item.__v > 0);
  const orderRequest = orderArray.map(function (item) {
    return item._id;
  });

  let sum = 0;
  const total = ingredients.map(function (item) {
    if (item.__v > 0) {
      return sum + item.price * item.__v;
    } else {
      return 0;
    }
  });

  const result = total.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: TItem) {
      movePostponedItem(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const movePostponedItem = (item: TItem) => {
    const uuid = uuidv4();
    if (item.type === "bun") {
      dispatch(addBunAction({ ...item, uuid: uuid }));
    } else {
      dispatch(addItemAction({ ...item, uuid: uuid }));
    }
    dispatch(increaseItemAction({ ...item, uuid: uuid }));
  };

  const border = isHover ? "0px 0px 10px 0px rgba(76, 76, 255, 1)" : "none";

  return (
    <>
      <div className="burger_constructor">
        <div
          className={`${styles.constructor_container} mt-25`}
          ref={dropTarget}
        > 
          <div className="ml-10 mr-4">
            {buns !== null ? (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${buns.name} (верх)`}
                price={buns.price}
                thumbnail={buns.image_mobile}
              />
            ) : (
              <p className="text text_type_main-default text_color_inactive">
                Пожалуйста, перенесите сюда булку и ингредиенты для создания
                заказа
              </p>
            )}
          </div>
          <div
            className={styles.constructor_list}
            style={{ boxShadow: border }}
          >
            <div className={styles.plus_bg}>+</div>
            <ConstructorList />
          </div>
          <div className="ml-10 mr-4">
            {buns !== null ? (
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${buns.name} (низ)`}
                price={buns.price}
                thumbnail={buns.image_mobile}
              />
            ) : (
              <p className="text text_type_main-default text_color_inactive">
                Пожалуйста, перенесите сюда булку и ингредиенты для создания
                заказа
              </p>
            )}
          </div>
        </div>
        <div className={`${styles.cta_container} mt-10`}>
          <div className={`${styles.price_block} mr-10`}>
            <p className="text text_type_digits-medium mr-2">
              {result ? result : "0"}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleClickBurger}
            disabled={buns === null || constructorItems.length === 0}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      <Modal isModal={modal} onClose={onClose}>
        <OrderDetails />
      </Modal>
    </>
  );
};

export default BurgerConstructor;
