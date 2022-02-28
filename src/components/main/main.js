import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./main.module.css";

const Main = ({ ...props }) => {
  return (
    <main>
      <BurgerIngredients data={props.data} {...props} />
      <BurgerConstructor data={props.data} {...props} />
    </main>
  );
};

export default Main;
