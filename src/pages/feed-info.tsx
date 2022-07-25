import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAppSelector, Tparams, TfeedItem } from '../services/types';
import FeedDetails from '../components/feed-details/feed-detail';
import styles from './ingredients.module.css'
import { wsFeedConnectionStartAction, wsFeedConnectionClosedAction } from '../services/actions/feed';
import { wsUrl, getCookie } from '../utils';
import { useRouteMatch } from 'react-router-dom';

export function FeedInfoPage() {

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

    const { id }: Tparams = useParams();
    const feed: TfeedItem[] = useAppSelector((state) => state.feed.orders);
    const currentItem:TfeedItem | undefined  = feed.find(({ _id }: TfeedItem) => _id === id);

    return (
        <>
        <div className={styles.wrapper}>
            {currentItem ?
            <FeedDetails
                    number={currentItem.number}
                    date={currentItem.createdAt}
                    name={currentItem.name}
                    status={currentItem.status}
                    ingredients={currentItem.ingredients}
                  />
                : null}
            </div>
        </>
    );

}