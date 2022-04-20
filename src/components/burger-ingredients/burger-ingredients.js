import React, {createRef, useRef, useState, useEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "./sub-components/burger-list";
import styles from "./burger-ingredients.module.css";
import Section from "./sub-components/section";
import { useInView } from "react-intersection-observer";
import {
  CLOSE_MODAL,
  DELETE_CURRENT_ITEM,
} from "../../services/actions/modal";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";

const BurgerIngredients = ({ ...props }) => {
  const ingredients = useSelector((state) => state.ingredients.data);
  const modalItem = useSelector((state) => state.modal.currentItem);
  const modal = useSelector((state) => state.modal.ingredientModal);
  const dispatch = useDispatch();

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


  function onClose() {
    dispatch({
      type: DELETE_CURRENT_ITEM
    });
    dispatch({
      type: CLOSE_MODAL,
      ingredientModal: false,
    });
  }

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
    <Modal
        header="Детали ингредиента"
        onClose={onClose}
        isModal={modal}
      >
        <IngredientDetails
          image={modalItem.imageLarge}
          name={modalItem.title}
          calories={modalItem.calories}
          proteins={modalItem.proteins}
          fat={modalItem.fat}
          carbohydrates={modalItem.carbohydrates}
        />
      </Modal>
    </>
  );
};

export default BurgerIngredients;
