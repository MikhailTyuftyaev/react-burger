import React from "react";
import Modal from "../modal/modal";
import PropTypes from "prop-types";

const IngredientDetails = ({ ...props }) => {
  return (
    <Modal
      header={props.header}
      isModal={props.isModal}
      onClose={props.onClose}
    >
      <img src={props.image} />
      <p className="text text_type_main-medium mt-4 pl-15 pr-15">
        {props.name}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gridColumnGap: "20px",
        }}
        className="mt-8 pl-15 pr-15"
      >
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.calories}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.proteins}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.fat}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.carbohydrates}
          </p>
        </div>
      </div>
    </Modal>
  );
};
export default IngredientDetails;

IngredientDetails.propTypes = {
  /** Main text in header in modal window*/
  header: PropTypes.string,
  /** State for open/close modal window*/
  isModal: PropTypes.object,
  /** Function for close modal window*/
  onClose: PropTypes.func,
};
