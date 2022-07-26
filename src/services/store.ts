import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import socketMiddleware from '../services/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../services/reducers/index';
import { wsFeedActions } from './actions/feed';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            thunk,
            socketMiddleware(wsFeedActions)
        )))