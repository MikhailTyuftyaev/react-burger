import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAppSelector, RootState, Tparams, TfeedItem, TfeedState } from '../services/types';
import FeedDetails from '../components/feed-details/feed-detail';
import styles from './ingredients.module.css'
import { wsFeedConnectionStartAction, wsFeedConnectionClosedAction } from '../services/actions/feed';
import { wsUrl } from '../utils';

export function FeedInfoPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsFeedConnectionStartAction(`${wsUrl}/all`))

        return () => {
            dispatch(wsFeedConnectionClosedAction())
        }
    }, [dispatch])

    const { id }: Tparams = useParams();
    const feed: TfeedItem[] = useAppSelector((state: RootState) => state.feed.orders);
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
                    price={400}
                  />
                : null}
            </div>
        </>
    );

}