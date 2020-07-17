
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const addItems = (item:string) => action(ActionTypes.ADD_ITEM,item);
export const addItemsResponse = (itemArr:any) => action(ActionTypes.ADD_ITEM_RESPONSE,itemArr);
export const fetchStatesAction = () => action(ActionTypes.FETCH_STATES);
export const clearItemStatesAction = () => action(ActionTypes.CLEAR_STATES);
