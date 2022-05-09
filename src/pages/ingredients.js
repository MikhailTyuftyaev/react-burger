import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import styles from "./ingredients.module.css";
export function IngredientsPage() {

    const { id } = useParams();
    const ingredients = useSelector((state) => state.ingredients.data);
    const itemsRequest = useSelector((state)=> state.ingredients.itemsRequest)
    const itemsFailed = useSelector((state) => state.ingredients.itemsFailed);
    const currentItem = ingredients.find(({ _id }) => _id === id);

  return (
    <>
      <div className={styles.wrapper}>
      <p className="text text_type_main-large">
        Детали ингредиента
    </p>
      {ingredients.length !== 0 && currentItem && !itemsRequest && !itemsFailed ? 
        <IngredientDetails
            image={currentItem.image_large}
            name={currentItem.name}
            calories={currentItem.calories}
            proteins={currentItem.proteins}
            fat={currentItem.fat}
            carbohydrates={currentItem.carbohydrates}
        />
        : null }
      </div>
    </>
  );
}
