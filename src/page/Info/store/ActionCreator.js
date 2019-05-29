import axios from 'axios';
import { fromJS } from 'immutable';
import * as ActionType from './ActionType';

const GetInfoCarousel = (infoCarousel) => ({
    type: ActionType.INFO_CAROUSEL,
    infoCarousel: fromJS(infoCarousel)
})

const GetActionList = (actionList) => ({
    type: ActionType.ACTION_LIST,
    actionList: fromJS(actionList)
})

const GetProductColor = (productColor) => ({
    type: ActionType.PRODUCT_COLOR,
    productColor: fromJS(productColor)
})

const GetShuomingInfo = (shuomingInfo) => ({
    type: ActionType.SHUOMING_INFO,
    shuomingInfo: fromJS(shuomingInfo)
})

const GetCommentList = (commentList) => ({
    type: ActionType.COMMENT_LIST,
    commentList: fromJS(commentList)
})

const GetBrandRecommend = (brandRecommend) => ({
    type: ActionType.BRAND_RECOMMEND,
    brandRecommend: fromJS(brandRecommend)
})

const GetProductRecommend = (productRecommend) => ({
    type: ActionType.PRODUCT_RECOMMEND,
    productRecommend: fromJS(productRecommend)
})

const GetProductMessage = (keyMessage, subMessage) => ({
    type: ActionType.PRODUCT_MESSAGE,
    keyMessage: fromJS(keyMessage),
    subMessage: fromJS(subMessage)
})

const GetImageList = (imageList) => ({
    type: ActionType.IMAGE_LIST,
    imageList: fromJS(imageList)
})

const GetArticleList = (articleList) => ({
    type: ActionType.ARTICLE_LIST,
    articleList: fromJS(articleList)
})


const GetShouHou = (shouhou) => ({
    type: ActionType.SHOU_HOU,
    shouhou: fromJS(shouhou)
})

export const changeIndexAction = (index) => ({
    type: ActionType.CHANGE_INDEX,
    index
})

export const GetProduct = (product) => ({
    type: ActionType.GET_PRODUCT,
    product: fromJS(product)
})

export const InfoCarousel = () => {
    return (dispatch) => {
        axios.get('/api/InfoCarousel.json').then((res) => {
            const action = GetInfoCarousel(res.data.data);
            dispatch(action);
        })
    }
}

export const CarouselIndex = (index) => ({
    type: ActionType.CAROUSEL_INDEX,
    index
})

export const Carousel = () => ({
    type: ActionType.CAROUSEL_CHANGE
})

export const Product = () => {
    return (dispatch) => {
        axios.get('/api/Info/product.json').then((res) => {
            const action = GetProduct(res.data.data);
            dispatch(action);
        })
    }
}

export const ActionList = () => {
    return (dispatch) => {
        axios.get('/api/Info/shuoming.json').then((res) => {
            const action = GetActionList(res.data.data);
            dispatch(action);
        })
    }
}

export const ProductColor = () => {
    return (dispatch) => {
        axios.get('/api/Info/actionProduct.json').then((res) => {
            const action = GetProductColor(res.data.data);
            dispatch(action);
        })
    }
}

export const ShuomingInfo = () => {
    return (dispatch) => {
        axios.get('/api/Info/shuomingInfo.json').then((res) => {
            const action = GetShuomingInfo(res.data.contentList);
            dispatch(action);
        })
    }
}

export const CommentList = () => {
    return (dispatch) => {
        axios.get('/api/Info/comment.json').then((res) => {
            const action = GetCommentList(res.data.data);
            dispatch(action);
        })
    }
}

export const BrandRecommend = () => {
    return (dispatch) => {
        axios.get('/api/Info/productList.json').then((res) => {
            const action = GetBrandRecommend(res.data.data);
            dispatch(action);
        })
    }
}

export const ProductRecommend = () => {
    return (dispatch) => {
        axios.get('/api/Info/productRecommend.json').then((res) => {
            const action = GetProductRecommend(res.data.data);
            dispatch(action);
        })
    }
}

export const ProductMessage = () => {
    return (dispatch) => {
        axios.get('/api/Info/message.json').then((res) => {
            const action = GetProductMessage(res.data.key, res.data.sub);
            dispatch(action);
        })
    }
}

export const ImageList = () => {
    return (dispatch) => {
        axios.get('/api/Info/image.json').then((res) => {
            const action = GetImageList(res.data.imgList);
            dispatch(action);
        })
    }
}

export const ArticleList = () => {
    return (dispatch) => {
        axios.get('/api/Info/user.json').then((res) => {
            const action = GetArticleList(res.data.body);
            dispatch(action);
        })
    }
}
export const ShouHou = () => {
    return (dispatch) => {
        axios.get('/api/Info/ShouHou.json').then((res) => {
            const action = GetShouHou(res.data.body);
            dispatch(action);
        })
    }
}