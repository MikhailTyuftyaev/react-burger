export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET__ITEMS_FAILED";

export const GET_CURRENT_ITEMS = "GET_CURRENT_ITEMS";

export const CREATE_ORDER = "CREATE_ORDER";

export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";

export const DELETE_ITEM = "DELETE_ITEM";

export function getItemsRequest() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_FAILED,
        });
      });
  };
}
