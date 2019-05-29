import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    carouselList: [],
    imgHeight: 176,
    titleImg: '',
    navList: [],
    navImg: [],
    qiangGou: [],
    brandList: [],
    brandData: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.CAROUSEL_LIST:
            return state.set('carouselList', action.carouselList);
        case ActionType.NAV_LIST:
                return state.merge({
                    titleImg: action.article,
                    navList: action.navList
                });
        case ActionType.NAV_IMG:
                return state.set('navImg', action.navImg);
        case ActionType.QIANG_GOU_LIST:
                return state.set('qiangGou', action.qiangGou);
        case ActionType.BRAND_LIST:
                return state.set('brandList', action.brandList);
        case ActionType.BRAND_DATA:
                return state.set('brandData', action.brandData);
        case ActionType.RECOMMEND_LIST:
                return state.set('recommendList', action.recommendList);
        default:
            return state;
    }
}