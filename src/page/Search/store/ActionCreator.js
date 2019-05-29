import axios from 'axios';
import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const GetSearchList = (searchList) => ({
    type: ActionType.SEARCH_LIST,
    searchList:fromJS(searchList)
})

export const SearchList = () => {
    return (dispatch) => {
        axios.get('/api/Search/searchList.json').then((res) => {
            const action = GetSearchList(res.data.body.result);
            dispatch(action);
        })
    }
}