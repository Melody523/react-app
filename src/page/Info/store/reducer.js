import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const defaultState = fromJS({
    navList: [
        {
            title: "商品",
            link: "#product"
        },
        {
            title: "评价",
            link: "#product-comment"
        },
        {
            title: "推荐",
            link: "#product-recommend"
        },
        {
            title: "详情",
            link: "#product-info"
        }
    ],
    index: 0,
    infoCarousel: [],
    showCarousel: true,
    carouselIndex: 0,
    product: {},
    actionList: [],
    productColor: {},
    shuomingInfo: [],
    commentList: {},
    brandRecommend: {},
    productRecommend: [],
    keyMessage: {},
    subMessage: {},
    imageList: [],
    articleList: {},
    shouhou: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_INDEX:
            return state.set('index', action.index);
        case ActionType.INFO_CAROUSEL:
                return state.set('infoCarousel', action.infoCarousel);
        case ActionType.CAROUSEL_INDEX:
            return state.merge({
                carouselIndex: action.index,
                showCarousel: false
            });
        case ActionType.CAROUSEL_CHANGE:
            return state.set('showCarousel', true);
        case ActionType.GET_PRODUCT:
            return state.set('product', action.product);
        case ActionType.ACTION_LIST:
            return state.set('actionList', action.actionList);
        case ActionType.PRODUCT_COLOR:
            return state.set('productColor', action.productColor);
        case ActionType.SHUOMING_INFO:
            return state.set('shuomingInfo', action.shuomingInfo);
        case ActionType.COMMENT_LIST:
            return state.set('commentList', action.commentList);
        case ActionType.BRAND_RECOMMEND:
            return state.set('brandRecommend', action.brandRecommend);
        case ActionType.PRODUCT_RECOMMEND:
            return state.set('productRecommend', action.productRecommend);
        case ActionType.PRODUCT_MESSAGE:
            return state.merge({
                keyMessage: action.keyMessage,
                subMessage: action.subMessage
            });
        case ActionType.IMAGE_LIST:
            return state.set('imageList', action.imageList);
        case ActionType.ARTICLE_LIST:
                return state.set('articleList', action.articleList);
        case ActionType.SHOU_HOU:
                return state.set('shouhou', action.shouhou);
        default:
            return state;
    }
}