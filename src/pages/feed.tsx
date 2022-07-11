import React from "react";
import styles from "./feed.module.css"
import OrderCard from "../components/order-card/order-card";

export function FeedPage() {

    const ingredients = [
        {'id': 0, 'image_mobile': "https://code.s3.yandex.net/react/code/meat-01-mobile.png"},
        {'id': 1, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-02-mobile.png"},
        {'id': 2, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-04-mobile.png"},
        {'id': 3, 'image_mobile': "https://code.s3.yandex.net/react/code/sauce-03-mobile.png"},
        {'id': 4, 'image_mobile': "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"},
        {'id': 5, 'image_mobile': "https://code.s3.yandex.net/react/code/core-mobile.png"}
      ]

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.left_section} mt-10`}>
                <p className="text text_type_main-large mb-5">
                    Лента заказов
                </p>
                <div className={`${styles.wrapper_cards} pr-2`}>
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                    <OrderCard 
                        number="#1234567890"
                        date="Сегодня, 16:20 i-GMT+3"
                        name="Death Star Starship Main бургер"
                        status="Создан"
                        ingredients={ingredients}
                        price={400}
                    />
                </div>
            </div>
            <div className={`${styles.right_section} mt-25`}>
                    <div className={`${styles.box} mb-15`}>
                        <div className={styles.order_done}>
                            <p className="text text_type_main-medium mb-6">
                                Готовы:
                            </p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                        </div>
                        <div className={styles.order_work}>
                            <p className="text text_type_main-medium mb-6">
                                В работе:
                            </p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                            <p className="text text_type_digits-default mb-2">123456</p>
                        </div>
                    </div>
                    <div className="mb-15">
                        <p className="text text_type_main-medium mb-6">
                            Выполнено за все время:
                        </p>
                        <p className={`${styles.main_text} text text_type_digits-large`}>
                            28 752
                        </p>
                    </div>
                    <div className="mb-15">
                        <p className="text text_type_main-medium mb-6">
                            Выполнено за сегодня:
                        </p>
                        <p className={`${styles.main_text} text text_type_digits-large`}>
                            28 752
                        </p>
                    </div>
                </div>
        </div>
    )

}

export default FeedPage;