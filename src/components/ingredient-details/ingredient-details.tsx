import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, RootState, Tparams } from '../../utils/types';
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ ...props }) => {

  const { id }: Tparams = useParams();
    const ingredients = useAppSelector((state: RootState) => state.ingredients.data);
    const currentItem = ingredients.find(({ _id }) => _id === id);

  return (
    <>
      <img src={props.image || currentItem ? currentItem?.image_large : ""} />
      <p className="text text_type_main-medium mt-4 pl-15 pr-15">
        {props.name || currentItem ? currentItem?.name : ""}
      </p>
      <div className={`${styles.props_container} mt-8 pl-15 pr-15`}>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.calories || currentItem ? currentItem?.calories : ""}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.proteins || currentItem ? currentItem?.proteins : ""}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.fat || currentItem ? currentItem?.fat : ""}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive mt-2">
            {props.carbohydrates || currentItem ? currentItem?.carbohydrates : ""}
          </p>
        </div>
      </div>
      </>
  );
};
export default IngredientDetails;
