import {getItemsReducer as reducer, initialState}  from './index'
import * as types from '../constants/index'
import {TItemsAction} from '../actions'

const cropIngredientsList = [
  {
  "_id": "60d3b41abdacab0026a733c6",
  "name": "Краторная булка N-200i",
  "type": "bun",
  "proteins": 80,
  "fat": 24,
  "carbohydrates": 53,
  "calories": 420,
  "price": 1255,
  "image": "https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
  "__v": 0,
  "uuid": "059871-e593-369a-78df-9dc23847f2cf"
  },
  {
    "_id": "60d3b41abdacab0026a733cb",
    "name": "Биокотлета из марсианской Магнолии",
    "type": "main",
    "proteins": 420,
    "fat": 142,
    "carbohydrates": 242,
    "calories": 4242,
    "price": 424,
    "image": "https://code.s3.yandex.net/react/code/meat-01.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
    "__v": 0,
    "uuid": "2ba9c7ba-111a-22b2-3c33-65c24c37baf882"
    },
    {
      "_id": "60d3b41abdacab0026a733cf",
      "name": "Соус с шипами Антарианского плоскоходца",
      "type": "sauce",
      "proteins": 101,
      "fat": 99,
      "carbohydrates": 100,
      "calories": 100,
      "price": 88,
      "image": "https://code.s3.yandex.net/react/code/sauce-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-01-large.png",
      "__v": 0,
      "uuid": "2ba9c7ba-111a-22b2-3c33-65c24c37baf882"
      }
];

describe('Index reducer', () => {
    it('should return the initial state', () => {
      expect(
        reducer(initialState, {} as TItemsAction)).toEqual(initialState)
    })
    it('should handle GET_ITEMS_REQUEST', () => {
      expect(
        reducer(initialState, {
          type: types.GET_ITEMS_REQUEST
        }))
        .toEqual({
          ...initialState,
          itemsRequest: true,
          itemsFailed: false,
        })
    })
    it('should handle GET_ITEMS_SUCCESS', () => {
      expect(
        reducer(initialState, {
          type: types.GET_ITEMS_SUCCESS,
          data: cropIngredientsList
        }))
        .toEqual({
          ...initialState,
          data: cropIngredientsList,
          itemsRequest: false,
        })
    })
    it('should handle GET_ITEMS_FAILED', () => {
      expect(
        reducer(initialState, {
          type: types.GET_ITEMS_FAILED,
        }))
        .toEqual({
          ...initialState,
          itemsFailed: true,
          itemsRequest: false,
        })
    })
    it('should handle INCREASE_ITEM', () => {
      expect(
        reducer({
          ...initialState,
          data: [{...cropIngredientsList[1]}]
          },
          {
            type: types.INCREASE_ITEM,
            item: cropIngredientsList[1]
          }
        ))
        .toEqual({
          ...initialState,
          data: [
            {
              ...cropIngredientsList[1],
              __v: cropIngredientsList[1].__v + 1
            }
          ]
        })
    })
    it('should handle DECREASE_ITEM', () => {
      expect(
        reducer({
          ...initialState,
          data: [{...cropIngredientsList[1]}]
        }, 
        {
          type: types.DECREASE_ITEM,
          id: "60d3b41abdacab0026a733cb"
        }))
        .toEqual({
          ...initialState,
          data: [
            {
              ...cropIngredientsList[1],
              __v: cropIngredientsList[1].__v - 1
            }
          ]
        })
    })
    it('should handle DELETE_ITEM', () => {
      expect(
        reducer({
          ...initialState,
          ingredients: [cropIngredientsList[1]]
        }, 
        {
          type: types.DELETE_ITEM,
          uuid: cropIngredientsList[1].uuid
        }))
        .toEqual({
          ...initialState,
          ingredients: []
        })
    })
    it('should handle ADD_BUN', () => {
      expect(
        reducer({
          ...initialState,
          buns: null
        }, 
        {
          type: types.ADD_BUN,
          item: cropIngredientsList[0]
        }))
        .toEqual({
          ...initialState,
          buns: cropIngredientsList[0]
        })
    })
    it('should handle ADD_ITEM', () => {
      expect(
        reducer({
          ...initialState,
          ingredients: []
        }, 
        {
          type: types.ADD_ITEM,
          item: cropIngredientsList[1]
        }))
        .toEqual({
          ...initialState,
          ingredients: [cropIngredientsList[1]]
        })
    })
    it('should handle MOVE_ITEM', () => {
      expect(
        reducer({
          ...initialState,
          ingredients: [cropIngredientsList[1], cropIngredientsList[2]]
        }, 
        {
          type: types.MOVE_ITEM,
          dragIndex: 0,  
          hoverIndex: 1
        }))
        .toEqual({
          ...initialState,
          ingredients: [cropIngredientsList[2], cropIngredientsList[1]]
        })
    })
    it('should handle GET_ORDER_REQUEST', () => {
      expect(
        reducer(initialState, {
          type: types.GET_ORDER_REQUEST
        }))
        .toEqual({
          ...initialState,
          orderRequest: true,
          orderFailed: false,
        })
    })
    it('should handle GET_ORDER_SUCCESS', () => {
      expect(
        reducer(initialState,
        {
          type: types.GET_ORDER_SUCCESS,
          order: 21898
        }))
        .toEqual({
          ...initialState,
          order: 21898,
          orderRequest: false,
        })
    })
    it('should handle GET_ORDER_FAILED', () => {
      expect(
        reducer(initialState,
        {
          type: types.GET_ORDER_FAILED,
        }))
        .toEqual({
          ...initialState,
          orderFailed: true,
          orderRequest: false,
        })
    })
    it('should handle CLEAR_ORDER_ARRAY', () => {
      expect(
        reducer(initialState,
        {
          type: types.CLEAR_ORDER_ARRAY,
        }))
        .toEqual({
          ...initialState,
          buns: null,
          ingredients: []
        })
    })
    it('should handle CLEAR_ORDER_NUMBER', () => {
      expect(
        reducer(initialState,
        {
          type: types.CLEAR_ORDER_NUMBER,
        }))
        .toEqual({
          ...initialState,
          order: null,
        })
    })
});