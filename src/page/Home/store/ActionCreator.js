import axios from 'axios';
import * as ActionType from './ActionType';
import { fromJS } from 'immutable';

const GetCarouselList = (carouselList) => ({
    type: ActionType.CAROUSEL_LIST,
    carouselList: fromJS(carouselList)
})

const GetNavList = (article, navList) => ({
    type: ActionType.NAV_LIST,
    article,
    navList: fromJS(navList)
})

const GetNavImg = (navImg) => ({
    type: ActionType.NAV_IMG,
    navImg: fromJS(navImg)
})

const GetQiangGouList = (qiangGou) => ({
    type: ActionType.QIANG_GOU_LIST,
    qiangGou: fromJS(qiangGou)
})

const GetBrandList = (brandList) => ({
    type: ActionType.BRAND_LIST,
    brandList: fromJS(brandList)
})

const GetBrandData = (brandData) => ({
    type: ActionType.BRAND_DATA,
    brandData: fromJS(brandData)
})

const GetRecommendList = (recommendList) => ({
    type: ActionType.RECOMMEND_LIST,
    recommendList: fromJS(recommendList)
})

export const CarouselList = () => {
    return (dispatch) => {
        axios.get('api/CarouselImg.json').then((res) => {
            const action = GetCarouselList(res.data.data);
            dispatch(action);
        })
    }
}

export const NavList = () => {
    return (dispatch) => {
        axios.get('api/NavList.json').then((res) => {
            const action = GetNavList(res.data.article, res.data.data);
            dispatch(action);
        })
    }
}

export const NavImg = () => {
    return (dispatch) => {
        axios.get('api/NavImg.json').then((res) => {
            const action = GetNavImg(res.data.data);
            dispatch(action);
        })
    }
}

export const QiangGouList = () => {
    return (dispatch) => {
        axios.get('api/QiangGou.json').then((res) => {
            const action = GetQiangGouList(res.data.data);
            dispatch(action);
        })
    }
}

export const BrandList = () => {
    return (dispatch) => {
        axios.get('api/BrandList.json').then((res) => {
            const action = GetBrandList(res.data.data);
            dispatch(action);
        })
    }
}

export const BrandData = () => {
    return (dispatch) => {
        axios.get('api/BrandData.json').then((res) => {
            const action = GetBrandData(res.data.data);
            dispatch(action);
        })
    }
}

export const RecommendList = () => {
    return (dispatch) => {
        axios.get('api/RecommendList.json').then((res) => {
            const action = GetRecommendList(res.data.data);
            dispatch(action);
        })
    }
}