import { TwsFeedActions } from "../actions/feed";

const socketMiddleware = (wsActions: TwsFeedActions) => {
    return (store: any) => {
        let socket = null;

        return (next: any) => (action: any) => {
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