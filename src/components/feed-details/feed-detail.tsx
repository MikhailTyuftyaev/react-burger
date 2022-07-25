import React, {useMemo} from "react";
import styles from "./feed-detail.module.css"
import IngredientItem from "./sub-components/ingredient-item";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/types";
import { formatDate } from "../../utils";
import { TItem } from "../../services/types";


const FeedDetails = ({ ...props }) => {
    const data = useAppSelector((state) => state.ingredients.data)

    const feedInfo = useMemo(() => {
        if(!props.ingredients) return null;
        
        const ingredientsInfo =  props.ingredients.reduce((acc: TItem[], id: string)=> {
         const ingredient = data.find((ing) => ing._id === id);
            if (ingredient && !acc.includes(ingredient)) acc.push(ingredient) 
          return acc;
        }, [])
        
        const total = ingredientsInfo.reduce((acc: number, item: TItem) => {
          return acc + item.price
        }, 0)
    
        const orderDate = formatDate(props.date)
    
        return {
          ...props.ingredients,
          ingredientsInfo,
          total,
          orderDate
        }

      }, [props.ingredients]);

    return (
        <div className={styles.feed_detail}>
            <p className="text text_type_digits-default">
                #{props.number}
            </p>
            <p className="text text_type_main-medium mt-10">
                {props.name}
            </p>
            <p className="text text_type_main-default mt-3">
                {props.status === "done" ? "Выполнен" 
                : props.status === "pending" ? "В работе"
                : props.status === "created" ? "Создан" 
                : null}
            </p>
            <p className="text text_type_main-medium mt-15">
                Состав:
            </p>
            <div className={`${styles.container} mt-6 pr-6`}>
                {feedInfo.ingredientsInfo.map(function (item: TItem, index: number) {
                    return (
                <IngredientItem
                    name={item.name}
                    price={item.price}
                    ingredients={props.ingredients}
                    ingredient={item}
                    image_mobile={item.image_mobile}
                    key={index}
                />
                )})}
            </div>
            <div className={`${styles.footer} mt-10`}>
                <p className="text text_type_main-default text_color_inactive">
                    {feedInfo.orderDate}
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