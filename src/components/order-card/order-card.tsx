import React, { useMemo } from "react";
import {  CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css"
import { TorderCard, useAppSelector, RootState, TfeedItem } from "../../services/types";
import { useDispatch } from "react-redux";
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import { formatDate } from "../../utils";
import { wsFeedAddCurrentItemAction } from "../../services/actions/feed";
import { TItem } from "../../services/types";

const OrderCard = ({id, number, date, name, status, ingredients}: TorderCard) => {
  const location = useLocation();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const maxIngredietns = 6;

  const data = useAppSelector((state: RootState) => state.ingredients.data)

  const cardInfo = useMemo(() => {

    const ingredientsInfo = ingredients.reduce((acc: TItem[], item: string) => {
      const ingredient = data.find((ing) => ing._id === item);
      if (ingredient) acc.push(ingredient);
      return acc;
    }, [])

    const total = ingredientsInfo.reduce((acc: number, item: TItem) => {
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

    const item: TfeedItem = {
      'createdAt': date,
      'ingredients': ingredients,
      'name': name,
      'number': number,
      'status': status,
      '_id': id,
      'total': cardInfo.total
    }

    function handleClickOrder() {
      dispatch(wsFeedAddCurrentItemAction(item))
    }

    return(
      <Link
        className={styles.link}
        to={{
          pathname: `${path}/${id}`,
          state: { background: location },
        }}
      >
        <div className={`${styles.card} p-6`}
          onClick={() => handleClickOrder()}>
              <div className={`${styles.meta}`}>
                <p className="text text_type_digits-default">#{number}</p>
                <p className="text text_type_main-default text_color_inactive">{cardInfo.orderDate}</p>
              </div>
              <p className="text text_type_main-medium mt-6">
              {name}
              </p>
              {status ? 
              <p className="text text_type_main-default mt-2">
                {status === "done" ? "Выполнен" 
                : status === "pending" ? "В работе"
                : status === "created" ? "Создан" 
                : null}
              </p>
              : null }
              <div className={`${styles.meta} mt-6`}>
                <div className={styles.img_container}>
                {cardInfo.ingredientsToShow.map(function (item: TItem, index: number) {
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