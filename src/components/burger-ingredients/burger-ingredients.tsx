import React, { useState, useEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "./sub-components/burger-list";
import styles from "./burger-ingredients.module.css";
import Section from "./sub-components/section";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../services/types";

const BurgerIngredients = ({ ...props }) => {
  const ingredients = useAppSelector((state) => state.ingredients.data);

  const [current, setCurrent] = useState("bun");
  let buns = [];
  let sauces = [];
  let mains = [];

  buns = ingredients.filter((item) => item.type === "bun");
  sauces = ingredients.filter((item) => item.type === "sauce");
  mains = ingredients.filter((item) => item.type === "main");

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0,
  })
  const [mainsRef, inViewFilling] = useInView({
    threshold: 0,
  })
  const [saucesRef, inViewSauces] = useInView({
    threshold: 0,
  })


  useEffect(() => {
    if(inViewBuns){
      setCurrent("bun")
    }else if (inViewFilling){
      setCurrent("sauce")
    }else if (inViewSauces){
      setCurrent("filling")
    }
  })

  return (
    <>
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
        <Section id="bun" sectionRef={bunsRef}>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <section className={styles.product_section}>
            <BurgerList data={buns} />
          </section>
        </Section>
        <Section id="sauce" sectionRef={mainsRef}>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <section className={styles.product_section}>
            <BurgerList data={sauces} />
          </section>
        </Section>
        <Section id="filling" sectionRef={saucesRef}>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <section className={styles.product_section}>
            <BurgerList data={mains} />
          </section>
        </Section>
      </div>
    </div>
    </>
  );
};

export default BurgerIngredients;
