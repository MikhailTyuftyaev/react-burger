import React from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-detail.module.css";
import { useAppSelector } from "../../services/types";

const OrderDetails = ({ ...props }) => {
  const order = useAppSelector((state) => state.ingredients.order);
  return (
    <>
      <p
        className={`${styles.main_text} text text_type_digits-large mt-4 pr-15 pl-15 `}
      >
        {order ? order : "Loading"}
      </p>
      {order && (
        <>
          <p className="text text_type_main-medium mt-8">
            идентификатор заказа
          </p>
          <div className={`${styles.icon} mt-15 mb-15`}>
            <CheckMarkIcon type="primary" />
          </div>
          <p className="text text_type_main-default">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mt-2 mb-10">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </>
  );
};
export default OrderDetails;
