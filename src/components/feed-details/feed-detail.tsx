import React from "react";
import styles from "./feed-detail.module.css"
import IngredientItem from "./sub-components/ingredient-item";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const FeedDetails = ({ ...props }) => {
    return (
        <div className={styles.feed_detail}>
            <p className="text text_type_digits-default">
                #{props.number}
            </p>
            <p className="text text_type_main-medium mt-10">
                {props.name}
            </p>
            <p className="text text_type_main-default mt-3">
                {props.status}
            </p>
            <p className="text text_type_main-medium mt-15">
                Состав:
            </p>
            <div className={`${styles.container} mt-6 pr-6`}>
                {props.ingredients.map(function (item: any) {
                    return (
                <IngredientItem
                    name={item.name}
                    price={item.price}
                    __v={item.__v}
                    image_mobile={item.image_mobile}
                />
                )})}
            </div>
            <div className={`${styles.footer} mt-10`}>
                <p className="text text_type_main-default text_color_inactive">
                    {props.date}
                </p>
                <div className={`${styles.price} ml-4`}>
                    <p className="text text_type_digits-default mr-2">{props.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )

}

export default FeedDetails;