import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    rexiaoList: [],
    titleImg: "",
    topImg: "",
    makeupNav: [],
    makeupContent: "",
    dapaiTitle: "",
    dapaiList: [],
    jingxuanTop: "",
    jingxuanTitle: "",
    jingxuanList: [],
    likeTitle: "",
    heimaTitle: "",
    likeList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.RE_XIAO_LIST:
            return state.merge({
                rexiaoList: action.rexiaoList,
                titleImg: action.titleImg,
                topImg: action.topImg
            });
        case ActionType.RE_XIAO_NAV:
            return state.set('makeupNav', action.makeupNav);
        case ActionType.RE_XIAO_CONTENT:
            return state.merge({
                makeupContent: action.makeupContent,
                dapaiTitle: action.dapaiTitle,
                dapaiList: action.dapaiList
            });
        case ActionType.JING_XUAN_LIST:
            return state.merge({
                jingxuanTop: action.jingxuanTop,
                jingxuanTitle: action.jingxuanTitle,
                jingxuanList: action.jingxuanList
            });
        case ActionType.LIKE_LIST:
            return state.merge({
                likeTitle: action.likeTitle,
                heimaTitle: action.heimaTitle,
                likeList: action.likeList
            });
        default:
            return state;
    }
}