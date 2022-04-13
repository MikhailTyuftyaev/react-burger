import React from "react";
import Modal from "../modal/modal";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-detail.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const OrderDetails = ({ ...props }) => {
  const order = useSelector((state) => state.ingredients.order);
  return (
    <Modal
      header={props.header}
      isModal={props.isModal}
      onClose={props.onClose}
    >
      <p
        className={`${styles.main_text} text text_type_digits-large mt-4 pr-15 pl-15 `}
      >
        {order ? order : "ERROR"}
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
    </Modal>
  );
};
export default OrderDetails;

OrderDetails.propTypes = {
  /** Main text in header in modal window*/
  header: PropTypes.string,
  /** State for open/close modal window*/
  isModal: PropTypes.object.isRequired,
  /** Function for close modal window*/
  onClose: PropTypes.func.isRequired,
};
