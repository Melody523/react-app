import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrandRecommendWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import {Link} from 'react-router-dom';

class BrandRecommend extends PureComponent{
    componentDidMount() {
        this.props.getBrandRecommend();
        this.props.getProductRecommend();
    }
    render() {
        const brandRecommend = this.props.brandRecommend.toJS();
        const productRecommend = this.props.productRecommend.toJS();
        return (
            <BrandRecommendWrapper id="product-recommend">
                <p className="fenge"></p>
                {
                    brandRecommend.goodsList === undefined ? '':
                    (
                        <div className="brand">
                            <div className="top">
                                <img src={brandRecommend.brand.brandLogo} alt=""/>
                                <div className="center">
                                    <p className="brandName">{brandRecommend.brand.brandName}</p>
                                    <p className="account">在售商品<span>{brandRecommend.brand.brandGoodsAmount}</span>件</p>
                                </div>
                                <Link to="/search"><span className="goto"><span className="iconfont">&#xe60d;</span>进入品牌</span></Link>
                            </div>
                            <div className="product">
                                <ul className="product_list">
                                    {
                                        brandRecommend.goodsList.map((item) => (
                                            <li key={item.goodsId} className="product_item">
                                                <Link to="/info">
                                                <img src={item.imageUrl} alt=""/>
                                                <p className="title">{item.title}</p>
                                                <span className="price">￥{item.price}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
                <p className="fenge"></p> 
                <div className="brand">
                        <div className="top">
                            <p>小考拉推荐</p>
                        </div>
                        <div className="product">
                            {
                                productRecommend.length === 0 ? '' : (
                                    <ul className="product_list">
                                        {
                                            productRecommend.map((item) => (
                                                <li key={item.goodsId} className="product_item">
                                                    <Link to="/info">
                                                    <img src={item.imageUrl} alt=""/>
                                                    <p className="title">{item.title}</p>
                                                    <p className="price">
                                                        <span className="current">￥{item.currentPrice}</span>
                                                        <span className="market">￥{item.marketPrice}</span>
                                                    </p>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                    <p className="fenge"></p>
            </BrandRecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    brandRecommend: state.getIn(['info', 'brandRecommend']),
    productRecommend: state.getIn(['info', 'productRecommend']),
})

const mapDispatch = (dispatch) => ({
    getBrandRecommend() {
        dispatch(ActionCreator.BrandRecommend());
    },
    getProductRecommend() {
        dispatch(ActionCreator.ProductRecommend());
    }
})

export default connect(mapState, mapDispatch)(BrandRecommend);