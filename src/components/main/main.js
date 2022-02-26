import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import data from "../utils/data.js";
import styles from "./main.module.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    );
  }
}

export default Main;
