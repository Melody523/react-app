import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    searchList: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.SEARCH_LIST: 
            return state.set('searchList', action.searchList)
        default:
            return state;
    }
}