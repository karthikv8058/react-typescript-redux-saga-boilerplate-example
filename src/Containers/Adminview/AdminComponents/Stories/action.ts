
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const storyListRequestAction = (params:object) => action(ActionTypes.STORY_LIST_REQUEST, params);
export const storyListResponseAction = (storyList:any) => action(ActionTypes.STORY_LIST_RESPONSE, storyList);