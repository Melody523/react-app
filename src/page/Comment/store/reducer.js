import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    commentList: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.COMMENT_LIST:
            return state.set('commentList', action.commentList);
        default:
            return state;
    }
}