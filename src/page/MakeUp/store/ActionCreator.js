import { fromJS } from 'immutable';
import axios from 'axios';
import * as ActionType from './ActionType';

const GetReXiaoList = (rexiaoList, titleImg, topImg) => ({
    type: ActionType.RE_XIAO_LIST,
    rexiaoList: fromJS(rexiaoList),
    titleImg,
    topImg
})

const GetNavHeader = (makeupNav) => ({
    type: ActionType.RE_XIAO_NAV,
    makeupNav: fromJS(makeupNav)
})

const GetContentList = (makeupContent, dapaiTitle, dapaiList) => ({
    type: ActionType.RE_XIAO_CONTENT,
    makeupContent,
    dapaiTitle,
    dapaiList: fromJS(dapaiList)
})

const GetJingXuanList = (jingxuanTop, jingxuanTitle, jingxuanList) => ({
    type: ActionType.JING_XUAN_LIST,
    jingxuanTop,
    jingxuanTitle,
    jingxuanList: fromJS(jingxuanList)
})

const GetLikeList = (likeTitle, heimaTitle, likeList) => ({
    type: ActionType.LIKE_LIST,
    likeTitle,
    heimaTitle,
    likeList: fromJS(likeList)
})

export const ReXiaoList = () => {
    return (dispatch) => {
        axios.get('api/ReXiao.json').then((res) => {
            const action = GetReXiaoList(res.data.productList, res.data.titleImg, res.data.topImg);
            dispatch(action)
        })
    }
}

export const NavHeader = () => {
    return (dispatch) => {
        axios.get('api/ReXiaoNav.json').then((res) => {
            const action = GetNavHeader(res.data.data);
            dispatch(action)
        })
    }
}

export const ContentList = () => {
    return (dispatch) => {
        axios.get('api/MakeUpType.json').then((res) => {
            const action = GetContentList(res.data.top, res.data.dapaiTitle, res.data.dapai);
            dispatch(action)
        })
    }
}

export const JingXuanList = () => {
    return (dispatch) => {
        axios.get('api/JingXuan.json').then((res) => {
            const action = GetJingXuanList(res.data.top, res.data.titleImg, res.data.product);
            dispatch(action)
        })
    }
}

export const LikeList = () => {
    return (dispatch) => {
        axios.get('api/LikeList.json').then((res) => {
            const action = GetLikeList(res.data.likeTitle, res.data.heimaTitle, res.data.likeList);
            dispatch(action)
        })
    }
}