import React, {createRef, useRef, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "./sub-components/burger-list";
import styles from "./burger-ingredients.module.css";
import { useSelector } from "react-redux";
import Section from "./sub-components/section";

const BurgerIngredients = ({ ...props }) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const [current, setCurrent] = React.useState("bun");
  let buns = [];
  let sauces = [];
  let mains = [];

  buns = ingredients.filter((item) => item.type === "bun");
  sauces = ingredients.filter((item) => item.type === "sauce");
  mains = ingredients.filter((item) => item.type === "main");

  const refs = [];
  const tabRefs = [];

  // create and track refs for later use
  const newRef = () => {
    const ref = createRef();

    refs.push(ref);

    return ref;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          // if 90% of the section is visible
          if (entry.isIntersecting) {
            // update the active state to the visible section
            setCurrent(entry.target.id);
          }
        }
      },
      {
        threshold: 0.5
      }
    );
    
    refs.forEach((ref) =>
      // observe the refs that were applied to the sections
      observer.observe(ref.current)
    );

    return () => {
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  //console.log("current", current);

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
        <Section id="bun" ref={newRef()}>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <section className={styles.product_section}>
            <BurgerList data={buns} />
          </section>
        </Section>
        <Section id="sauce" ref={newRef()}>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <section className={styles.product_section}>
            <BurgerList data={sauces} />
          </section>
        </Section>
        <Section id="filling" ref={newRef()}>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <section className={styles.product_section}>
            <BurgerList data={mains} />
          </section>
        </Section>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default BurgerIngredients;
