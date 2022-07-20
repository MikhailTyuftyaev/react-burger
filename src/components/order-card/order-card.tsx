import React, { useMemo } from "react";
import {  CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css"
import { TorderCard, useAppSelector, RootState } from "../../services/types";
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import { formatDate } from "../../utils";

const OrderCard = ({id, number, date, name, status, ingredients, price}: TorderCard) => {
  const location = useLocation();
  const { path } = useRouteMatch();

  const maxIngredietns = 6;

  const data = useAppSelector((state: RootState) => state.ingredients.data)

  const cardInfo = useMemo(() => {
    if(!data.length) return null;

    const ingredientsInfo = ingredients.reduce((acc: any, item: any) => {
      const ingredient = data.find((ing) => ing._id === item);
      if (ingredient) acc.push(ingredient);
      return acc;
    }, [])

    const total = ingredientsInfo.reduce((acc: any, item: any) => {
      return acc + item.price
    }, 0)

    const orderDate = formatDate(date)

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredietns);

    const remains = 
    ingredientsInfo.length > maxIngredietns
    ? ingredientsInfo.length - maxIngredietns
    : null;

    return {
      ...ingredients,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      orderDate
    }
  }, [ingredients, data]);

    return(
      <Link
        className={styles.link}
        to={{
          pathname: `${path}/${id}`,
          state: { background: location },
        }}
      >
        <div className={`${styles.card} p-6`}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#{number}</p>
                <p className="text text_type_main-default text_color_inactive">{cardInfo.orderDate}</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              {name}
              </p>
              {status ? 
              <p className="text text_type_main-default mt-2">
                {status}
              </p>
              : null }
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                {cardInfo.ingredientsToShow.map(function (item: any, index: number) {
                  return (
                    <div 
                      key={index}
                      className={styles.img_item}>
                    <img src={item.image_mobile} alt={item.name} style={{
                      opacity:
                        cardInfo.remains && maxIngredietns === index + 1
                        ? "0.5"
                        : "1",
                    }}/>
                    {maxIngredietns === index + 1 ? (
                      <span className={`text text_type_digits-default ${styles.remains}`}>
                        {cardInfo.remains > 0 ? `+${cardInfo.remains}` : null}
                      </span>
                    ) : null}
                  </div>
                  );
                })}
                </div>
                <div className={styles.price}>
                  <p className="text text_type_digits-default mr-2">{cardInfo.total}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
        </Link>
    )
}

export default OrderCard;