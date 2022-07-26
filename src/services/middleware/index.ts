import { TwsFeedActions } from "../actions/feed";
import { Middleware, MiddlewareAPI } from "redux";
import { TDispatch, RootState } from "../types";

const socketMiddleware = (wsActions: TwsFeedActions): Middleware => {
    return (store: MiddlewareAPI<TDispatch, RootState>) => {
        let socket = null;

        return (next) => (action) => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {
                wsInit,
                wsClose,
                onOpen,
                onError,
                onMessage,
            } = wsActions;
            if (type === wsInit) {
                socket = new WebSocket(payload);
                socket.onopen = (event) => {
                    dispatch({ type: onOpen, payload: event});
                };

                socket.onerror = (event) => {
                    dispatch({ type: onError, payload: event});
                }

                socket.onmessage = (event) => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    dispatch({
                        type: onMessage,
                        payload: parsedData,
                    });
                }
            }
            next(action);
        }
    }
}

export default socketMiddleware;