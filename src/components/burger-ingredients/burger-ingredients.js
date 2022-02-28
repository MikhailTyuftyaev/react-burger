import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "./sub-components/burger-list";
import styles from "./burger-ingredients.module.css";
import { Scrollbars } from "react-custom-scrollbars";

const BurgerIngredients = ({ ...props }) => {
  const [current, setCurrent] = React.useState("bun");
  let bunes = [];
  let sauces = [];
  let mains = [];

  bunes = props.data.filter((item) => item.type === "bun");
  sauces = props.data.filter((item) => item.type === "sauce");
  mains = props.data.filter((item) => item.type === "main");

  return (
    <div className="burger_container">
      <p className="text text_type_main-large mt-10 mb-4">Соберите бургер</p>
      <div className="tab-container">
        <div className={styles.tab_container}>
          <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab
            value="filling"
            active={current === "filling"}
            onClick={setCurrent}
          >
            Начинки
          </Tab>
        </div>
      </div>
      <div className={styles.product_container}>
        <Scrollbars
          renderTrackVertical={(props) => (
            <div {...props} className={`${styles.track_vertical} mt-10`} />
          )}
          renderThumbVertical={(props) => (
            <div {...props} className={styles.thumb_vertical} />
          )}
        >
          <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
          <section className={styles.product_section}>
            <BurgerList data={bunes} />
          </section>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <section className={styles.product_section}>
            <BurgerList data={sauces} />
          </section>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <section className={styles.product_section}>
            <BurgerList data={mains} />
          </section>
        </Scrollbars>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default BurgerIngredients;
