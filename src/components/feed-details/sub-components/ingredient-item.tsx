import React from "react";
import styles from "./ingredient-item.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientItem = ({ ...props}) => {
    const itemCount = props.ingredients.filter((id: string) => id === props.ingredient._id).length;
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.img_item}>
                    <img src={props.image_mobile}></img>
                </div>
                <p className="text text_type_main-default ml-4">
                    {props.name}
                </p>
            </div>
            <div className={`${styles.price} ml-4`}>
                <p className="text text_type_digits-default mr-2">{itemCount} x</p>
                
                <p className="text text_type_digits-default mr-2">{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}

export default IngredientItem;