import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ ...props }) => {
  return (
    <>
      <img src={props.image} />
      <p className="text text_type_main-medium mt-4 pl-15 pr-15">
        {props.name}
      </p>
      <div className={`${styles.props_container} mt-8 pl-15 pr-15`}>
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
      </>
  );
};
export default IngredientDetails;

IngredientDetails.propTypes = {
  /** Item src path to image */
  image: PropTypes.string,
  /** Item name */
  name: PropTypes.string,
  /** Item calories */
  calories: PropTypes.number,
  /** Item proteins */
  proteins: PropTypes.number,
  /** Item fat */
  fat: PropTypes.number,
  /** Item carbohydrates */
  carbohydrates: PropTypes.number,
};
