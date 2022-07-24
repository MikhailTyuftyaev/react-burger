import React, { useEffect, useMemo } from "react";
import styles from "./feed.module.css"
import OrderCard from "../components/order-card/order-card";
import { useDispatch } from "react-redux";
import { wsFeedConnectionStartAction, wsFeedConnectionClosedAction } from "../services/actions/feed";
import { wsUrl } from "../utils";
import { RootState, useAppSelector } from "../services/types";
import { TfeedItem } from "../services/types";

export function FeedPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsFeedConnectionStartAction(`${wsUrl}/all`))

        return () => {
            dispatch(wsFeedConnectionClosedAction())
        }
    }, [dispatch])

    const feed = useAppSelector((state: RootState) => state.feed);

    const feedInfo = useMemo(() => {
        if (!feed) return null 

        const doneArray = feed.orders && feed.orders.filter((item: TfeedItem)=> item.status === "done").slice(-15);
        const pendingArray = feed.orders && feed.orders.filter((item: TfeedItem)=> item.status === "pending").slice(-15);
        
        return {
            ...feed,
            doneArray,
            pendingArray
        }
    }, [feed]);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.left_section} mt-10`}>
                <p className="text text_type_main-large mb-5">
                    Лента заказов
                </p>
                <div className={`${styles.wrapper_cards} pr-2`}>
                    {feed.orders &&
                        feed.orders.map(function (item: TfeedItem){
                            return (
                                <OrderCard 
                                    id={item._id}
                                    number={item.number}
                                    date={item.createdAt}
                                    name={item.name}
                                    ingredients={item.ingredients}
                                    price={400}
                                    key={item._id}
                                />
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className={`${styles.right_section} mt-25`}>
                    <div className={`${styles.box} mb-15`}>
                        <div className={styles.order_done}>
                            <p className="text text_type_main-medium mb-6">
                                Готовы:
                            </p>
                            <div className={styles.list_done}>
                                {feedInfo && feed.orders && feedInfo.doneArray.map(function(item: TfeedItem, index: number) {
                                    return (
                                        <p className="text text_type_digits-default mb-2" key={index}>{item.number}</p>
                                    )
                                })}
                            </div>
                            

                        </div>
                        <div className={styles.order_work}>
                            <p className="text text_type_main-medium mb-6">
                                В работе:
                            </p>
                            <div className={styles.list_pending}>
                                {feedInfo && feed.orders && feedInfo.pendingArray.map(function(item: TfeedItem, index: number) {
                                    return (
                                        <p className="text text_type_digits-default mb-2" key={index}>{item.number}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="mb-15">
                        <p className="text text_type_main-medium mb-6">
                            Выполнено за все время:
                        </p>
                        <p className={`${styles.main_text} text text_type_digits-large`}>
                            {feed.total}
                        </p>
                    </div>
                    <div className="mb-15">
                        <p className="text text_type_main-medium mb-6">
                            Выполнено за сегодня:
                        </p>
                        <p className={`${styles.main_text} text text_type_digits-large`}>
                            {feed.totalToday}
                        </p>
                    </div>
                </div>
        </div>
    )

}

export default FeedPage;