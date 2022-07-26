import React, {useMemo, useEffect} from "react";
import styles from "./feed-detail.module.css"
import IngredientItem from "./sub-components/ingredient-item";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/types";
import { formatDate, wsUrl, getCookie } from "../../utils";
import { TItem, Tparams, useDispatch, TorderIngredients } from "../../services/types";
import { useParams, useRouteMatch } from "react-router-dom";
import { wsFeedConnectionStartAction, wsFeedConnectionClosedAction } from "../../services/actions/feed";


const FeedDetails = ({ ...props }) => {
    const { id }: Tparams = useParams();
    const dispatch = useDispatch();
    const { path } = useRouteMatch();

    useEffect(() => {
        if(path === "/feed/:id") {
            dispatch(wsFeedConnectionStartAction(`${wsUrl}/all`))
        } else if (path === "/profile/orders/:id") {
            dispatch(wsFeedConnectionStartAction(`${wsUrl}?token=${getCookie('accessToken')}`))
        } 

        return () => {
            dispatch(wsFeedConnectionClosedAction())
        }
    }, [dispatch])
    const data = useAppSelector((state) => state.ingredients.data)
    const orders = useAppSelector((state) => state.feed.orders)
    const price = useAppSelector((state) => state.feed.modal?.total)
    
    const currentItem = orders.find(({ _id }) => _id === id);
    const arrayOrders = props.ingredients || currentItem?.ingredients;

    const feedInfo = useMemo(() => {
        if(!arrayOrders) return null;
        
        const ingredientsInfo =  arrayOrders.reduce((acc: TItem[], id: TorderIngredients): TItem[] => {
         const ingredient = data.find((ing: TItem) => ing._id === id);
            if (ingredient && !acc.includes(ingredient)) acc.push(ingredient) 
          return acc;
        }, [])

        
        const total = ingredientsInfo.reduce((acc: number, item: TItem) => {
          return acc + item.price
        }, 0)
    
        const orderDate = formatDate(props.date || currentItem?.createdAt)
    
        return {
          ...arrayOrders,
          ingredientsInfo,
          total,
          orderDate
        }

      }, [arrayOrders]);

    return (
        <div className={styles.feed_detail}>
            <p className="text text_type_digits-default">
                #{props.number || currentItem?.number}
            </p>
            <p className="text text_type_main-medium mt-10">
                {props.name || currentItem?.name}
            </p>
            <p className="text text_type_main-default mt-3">
                {props.status || currentItem?.status === "done" ? "Выполнен" 
                : props.status || currentItem?.status === "pending" ? "В работе"
                : props.status || currentItem?.status === "created" ? "Создан" 
                : null}
            </p>
            <p className="text text_type_main-medium mt-15">
                Состав:
            </p>
            <div className={`${styles.container} mt-6 pr-6`}>
                {feedInfo && feedInfo.ingredientsInfo.map(function (item: TItem, index: number) {
                    return (
                <IngredientItem
                    name={item.name}
                    price={item.price}
                    ingredients={arrayOrders}
                    ingredient={item}
                    image_mobile={item.image_mobile}
                    key={index}
                />
                )})}
            </div>
            <div className={`${styles.footer} mt-10`}>
                <p className="text text_type_main-default text_color_inactive">
                    {feedInfo && feedInfo.orderDate}
                </p>
                <div className={`${styles.price} ml-4`}>
                    <p className="text text_type_digits-default mr-2">{price || feedInfo && feedInfo.total}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )

}

export default FeedDetails;