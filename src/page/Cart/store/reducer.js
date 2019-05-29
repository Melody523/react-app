import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    cartList: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.CART_LIST: 
            return state.set('cartList', action.cartList);
        default:
            return state;
    }
}