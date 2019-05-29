import axios from 'axios';
import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const GetCommentList = (commentList) => ({
    type: ActionType.COMMENT_LIST,
    commentList: fromJS(commentList)
})

export const CommentList = () => {
    return (dispatch) => {
        axios.get('/api/Info/comment.json').then((res) => {
            const action = GetCommentList(res.data.data);
            dispatch(action);
        })
    }
}