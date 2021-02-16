
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const getOrderDetailsRequestAction = () => action(ActionTypes.GET_ORDER_DETAILS_REQUEST);
export const getOrderDetailsResponseAction = (params: any) => action(ActionTypes.GET_ORDER_DETAILS_RESPONSE, params);
export const linkAmouletRequestAction = (params: any) => action(ActionTypes.LINK_AMOULET_REQUEST, params);
export const linkAmouletResponseAction = (params: any) => action(ActionTypes.LINK_AMOULET_RESPONSE, params);