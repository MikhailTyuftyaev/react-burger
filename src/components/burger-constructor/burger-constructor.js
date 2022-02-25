import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "./sub-components/constructor-list";
import data from "../utils/data";
import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  return (
    <div className="burger_constructor">
      <div className={`${styles.constructor_container} mt-25`}>
        <div className="ml-10 mr-5">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={data[0].image_mobile}
          />
        </div>
        <div className={styles.constructor_list}>
          <ConstructorList data={data} />
        </div>
        <div className="ml-10 mr-5">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={data[0].image_mobile}
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerConstructor;
