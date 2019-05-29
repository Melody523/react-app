import axios from 'axios';
import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const GetCartList = (cartList) => ({
    type: ActionType.CART_LIST,
    cartList: fromJS(cartList)
})

export const CartList = () => {
    return (dispatch) => {
        axios.get('/api/cart/cartList.json').then((res) => {
            const action = GetCartList(res.data.cartShow);
            dispatch(action);
        })
    }
}