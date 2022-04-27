import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import AppHeader from "../components/app-header/app-header";
import styles from "./login.module.css";
import { getItemsRequest } from "../services/actions";

export function IngredientsPage() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getItemsRequest());
    }, [dispatch])

    const { id } = useParams();
    const ingredients = useSelector((state) => state.ingredients.data);
    const currentItem = ingredients.find(({ _id }) => _id === id);
    

  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        <IngredientDetails
            image={currentItem.image}
            name={currentItem.name}
            calories={currentItem.calories}
            proteins={currentItem.proteins}
            fat={currentItem.fat}
            carbohydrates={currentItem.carbohydrates}
        />
      </div>
    </>
  );
}
