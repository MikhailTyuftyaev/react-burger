import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import styles from "./ingredients.module.css";
import { getItemsRequest } from "../services/actions";

export function IngredientsPage() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getItemsRequest());
    }, [dispatch])

    const { id } = useParams();
    const ingredients = useSelector((state) => state.ingredients.data);
    const currentItem = ingredients.find(({ _id }) => _id === id);
    console.log(currentItem)
    

  return (
    <>
      <div className={styles.wrapper}>
      <p className="text text_type_main-large">
        Детали ингредиента
    </p>
      {currentItem ? 
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