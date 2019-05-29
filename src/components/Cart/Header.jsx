import React, { PureComponent, Fragment } from 'react';
import { HeaderWrapper, House, Footer } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Cart/store/ActionCreator';
import {Link} from 'react-router-dom';

class Header extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            choosed: false,
            tax: 0,
            total: 0
        };
        this.changeChoose = this.changeChoose.bind(this);
    }
    componentDidMount() {
        this.props.getCartList();
    }
    render() {
        const cartList = this.props.cartList.toJS();
        console.log(cartList);
        return (
            <Fragment>
                <HeaderWrapper>
                    <div className="title">购物车<span>({cartList.allCount})</span></div>
                    <Link to="/"><span className="iconfont">&#xe61a;</span></Link>
                    <Link to="/mine"><img className="logo" src="https://haitao.nosdn2.127.net/vtgcByWTZlKwtnRQvhvLT170102401020_150_150.png?imageView&thumbnail=40x0&quality=75" alt=""/>
                    </Link>
                </HeaderWrapper>
                <House>
                        {
                            cartList.cartRegionList===undefined? '':
                            (
                                <div className="product-container">
                                    <div className="header">
                                    {
                                        this.state.choosed? 
                                        (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA6pJREFUaAXlmz9P20AYxp0qEiJS6QQt6geowtoNVSSVEBJsdKMrXwCJDvAhOrN6isSGxMgGVTN1rjplqlJVDK0qVUD/XJ/H9ptcXDsh9vl8iS09vLaJ33t/917ufM655hW0Kc9rwPUL6Dn0LNIT2IeRYLwfkb7Afor0AfZdzfN+wrq9AXIFOoAuoVtIZRSvpQ/6WnGOGkFtQOfQLygrZNp19EnfG6WDI4iX0BWUFqzp8yyrbR0cha5CHYug8Ypj2atWwFHQNvStRFiBZwzbhUKjgEPojwOwAs1YDo1Dw+kC5DsEKsBiGduCEXA4WobeOwwr0IxxORc0HDCzswCrQ2fPNGBdbsYCGbd+piwDlh1U3NmsHE/XkQGUQ49LvfG0Fc3YE4cs3KOPbvggB/SP0KPR/8zc0XdE3ARgX4/8gX4Q7b+FnXVYopCBLOkbstuGpm0+rn++nUoMWJsTAVsVdZUIDNjWHGZXKrUl0Pp3+I2cnEM7YAt6aWSWTxU+Q/U5hCXSb+gpYL9Khl/jxLzCEphsZPQE+BUPnNtqyMn+PsI1kouQEc25AeV54CYdg1lbqyl1cqKC7fRUqXo9r38yNjz82YLyOjN7vQ4bIitlBnqLwMdOASfBCvTRUd6KPSaw7wzwONiLC6UWF/MC+wTuOgFcPCwrq0vgXunAdmAJ3CPwdanA9mAJfE1gc0PS0pJSZ2dKNZt0Pll2YRnPrTlgwna7YX/a70+Gtg87AM7fpHVYGULGQZcDS+CgSffu1fzGNdHNTaXu7gR1aJOgy4MlcNBpmRmWdncnQ5cLS+BgWPJzZ1iyPw56bW14bzxsA+GemZsKAk2Sz07L7K1lGvTNTRzTNiwrI7i1ND95SIOOI9vLrGQ+mDwUMz2cBG0fNpwectKPVHMBidSCOZsGbR+WTJeDBxw44GoZc6C6r50dpfTvbzmwZDvQgbncqIgVOGElCnR5sGQbXf6EE1waVEyW6Xd93cR8Nmt854Psyg5gudYqq0PXr0te4wXg6vzUwkwDmAvNXM/WtPG1pRUnWgB35gi6E4cMfmrRTwK2Wj+Iowb4i/ke9FeviBnbZ+x7Ecv9Qkemq7OoRaoE0OamjvY6Q1/in9oCuFoL01hDgK7O0kNpElGmXW7ejC37kkMBjVs4rcbyYR0c0NVZIC7ggF6FyrwjY9l2XgEQaFoU2oZsTjjKeclDh47AWwDnfLqIhwjyGk8rXm7pxwB+DPFxkbMvav03eTBVa4B28lW8f749C/3EPnevAAAAAElFTkSuQmCC" alt=""/>):
                                        (<img src="data:image/png;base64,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" alt=""/>)
                                    }
                                        <div className="ziying">
                                            <span className="left">自营</span>
                                            <span className="right">{cartList.cartRegionList[0].goodsSource}</span>
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        {
                                            cartList.cartRegionList[0].cartActivityGoodsList.map((item, index) => (
                                                <div className="product-item" key={index}>
                                                    <div className="top">
                                                        <div className="left">
                                                            <span className="left_1">{item.activityTypeStr}</span>
                                                            <span className="left_2">{item.currentRuleStrForWap}</span>
                                                        </div>
                                                        <div className="right">
                                                            {item.activityButtonDescForWap}
                                                            <span className="iconfont">&#xe634;</span>
                                                        </div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="choose" onClick={() => {this.changeChoose(cartList.cartRegionList[0].orderPayAmount, item.cartGoodsList[0].taxAmount )}}>
                                                        {
                                                            this.state.choosed? 
                                                            (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA6pJREFUaAXlmz9P20AYxp0qEiJS6QQt6geowtoNVSSVEBJsdKMrXwCJDvAhOrN6isSGxMgGVTN1rjplqlJVDK0qVUD/XJ/H9ptcXDsh9vl8iS09vLaJ33t/917ufM655hW0Kc9rwPUL6Dn0LNIT2IeRYLwfkb7Afor0AfZdzfN+wrq9AXIFOoAuoVtIZRSvpQ/6WnGOGkFtQOfQLygrZNp19EnfG6WDI4iX0BWUFqzp8yyrbR0cha5CHYug8Ypj2atWwFHQNvStRFiBZwzbhUKjgEPojwOwAs1YDo1Dw+kC5DsEKsBiGduCEXA4WobeOwwr0IxxORc0HDCzswCrQ2fPNGBdbsYCGbd+piwDlh1U3NmsHE/XkQGUQ49LvfG0Fc3YE4cs3KOPbvggB/SP0KPR/8zc0XdE3ARgX4/8gX4Q7b+FnXVYopCBLOkbstuGpm0+rn++nUoMWJsTAVsVdZUIDNjWHGZXKrUl0Pp3+I2cnEM7YAt6aWSWTxU+Q/U5hCXSb+gpYL9Khl/jxLzCEphsZPQE+BUPnNtqyMn+PsI1kouQEc25AeV54CYdg1lbqyl1cqKC7fRUqXo9r38yNjz82YLyOjN7vQ4bIitlBnqLwMdOASfBCvTRUd6KPSaw7wzwONiLC6UWF/MC+wTuOgFcPCwrq0vgXunAdmAJ3CPwdanA9mAJfE1gc0PS0pJSZ2dKNZt0Pll2YRnPrTlgwna7YX/a70+Gtg87AM7fpHVYGULGQZcDS+CgSffu1fzGNdHNTaXu7gR1aJOgy4MlcNBpmRmWdncnQ5cLS+BgWPJzZ1iyPw56bW14bzxsA+GemZsKAk2Sz07L7K1lGvTNTRzTNiwrI7i1ND95SIOOI9vLrGQ+mDwUMz2cBG0fNpwectKPVHMBidSCOZsGbR+WTJeDBxw44GoZc6C6r50dpfTvbzmwZDvQgbncqIgVOGElCnR5sGQbXf6EE1waVEyW6Xd93cR8Nmt854Psyg5gudYqq0PXr0te4wXg6vzUwkwDmAvNXM/WtPG1pRUnWgB35gi6E4cMfmrRTwK2Wj+Iowb4i/ke9FeviBnbZ+x7Ecv9Qkemq7OoRaoE0OamjvY6Q1/in9oCuFoL01hDgK7O0kNpElGmXW7ejC37kkMBjVs4rcbyYR0c0NVZIC7ggF6FyrwjY9l2XgEQaFoU2oZsTjjKeclDh47AWwDnfLqIhwjyGk8rXm7pxwB+DPFxkbMvav03eTBVa4B28lW8f749C/3EPnevAAAAAElFTkSuQmCC" alt=""/>):
                                                            (<img src="data:image/png;base64,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" alt=""/>)
                                                        }
                                                        </div>
                                                        {
                                                            item.cartGoodsList.map((item, index) => (
                                                                <div className="product-info" key={index}>
                                                                    <img src={item.imageUrl} alt=""/>
                                                                    <div className="container">
                                                                        <div className="label_content">
                                                                            <div className="label">
                                                                                {
                                                                                    item.goodsLabelList.map((item, index) =>(
                                                                                        <span key={index}>{item.goodsLabel}</span>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                            <p className="title">{item.goodsName}</p>
                                                                        </div>
                                                                        <div className="cartitem">
                                                                            <div className="cartitem-info">
                                                                                <span className="color">{item.skuDesc}</span>
                                                                                <span className="tax">预估税费:￥{item.taxAmount}</span>
                                                                                <span className="price">￥{item.totalAmountHide}</span>
                                                                            </div>
                                                                            <div className="change-count">
                                                                                <div className="count">
                                                                                    <span className="btn">-</span>
                                                                                    <input type="text" defaultValue="1"/>
                                                                                    <span className="btn">+</span>
                                                                                </div>
                                                                                <span className="iconfont">&#xe73d;</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="service">
                                                        <p className="left">[服务]<span>赠送|{cartList.cartRegionList[0].cartActivityGoodsList[0].cartGoodsList[0].optionalValueAddList[0].name}</span></p>
                                                        <span className="right">￥{cartList.cartRegionList[0].cartActivityGoodsList[0].cartGoodsList[0].optionalValueAddList[0].price}x{cartList.cartRegionList[0].cartActivityGoodsList[0].cartGoodsList[0].optionalValueAddList[0].count}<span className="iconfont">&#xe634;</span></span>
                                                    </div>
                                                    <div className="total">
                                                        <span className="youhui">活动优惠：-￥{cartList.cartRegionList[0].activityDiscountAmount}</span>
                                                        <span className="product_price">本仓总计（不含税）：￥{cartList.cartRegionList[0].orderPayAmount}</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                </House>
                <Footer>
                    <div className="left">
                        {
                            this.state.choosed? 
                            (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA6pJREFUaAXlmz9P20AYxp0qEiJS6QQt6geowtoNVSSVEBJsdKMrXwCJDvAhOrN6isSGxMgGVTN1rjplqlJVDK0qVUD/XJ/H9ptcXDsh9vl8iS09vLaJ33t/917ufM655hW0Kc9rwPUL6Dn0LNIT2IeRYLwfkb7Afor0AfZdzfN+wrq9AXIFOoAuoVtIZRSvpQ/6WnGOGkFtQOfQLygrZNp19EnfG6WDI4iX0BWUFqzp8yyrbR0cha5CHYug8Ypj2atWwFHQNvStRFiBZwzbhUKjgEPojwOwAs1YDo1Dw+kC5DsEKsBiGduCEXA4WobeOwwr0IxxORc0HDCzswCrQ2fPNGBdbsYCGbd+piwDlh1U3NmsHE/XkQGUQ49LvfG0Fc3YE4cs3KOPbvggB/SP0KPR/8zc0XdE3ARgX4/8gX4Q7b+FnXVYopCBLOkbstuGpm0+rn++nUoMWJsTAVsVdZUIDNjWHGZXKrUl0Pp3+I2cnEM7YAt6aWSWTxU+Q/U5hCXSb+gpYL9Khl/jxLzCEphsZPQE+BUPnNtqyMn+PsI1kouQEc25AeV54CYdg1lbqyl1cqKC7fRUqXo9r38yNjz82YLyOjN7vQ4bIitlBnqLwMdOASfBCvTRUd6KPSaw7wzwONiLC6UWF/MC+wTuOgFcPCwrq0vgXunAdmAJ3CPwdanA9mAJfE1gc0PS0pJSZ2dKNZt0Pll2YRnPrTlgwna7YX/a70+Gtg87AM7fpHVYGULGQZcDS+CgSffu1fzGNdHNTaXu7gR1aJOgy4MlcNBpmRmWdncnQ5cLS+BgWPJzZ1iyPw56bW14bzxsA+GemZsKAk2Sz07L7K1lGvTNTRzTNiwrI7i1ND95SIOOI9vLrGQ+mDwUMz2cBG0fNpwectKPVHMBidSCOZsGbR+WTJeDBxw44GoZc6C6r50dpfTvbzmwZDvQgbncqIgVOGElCnR5sGQbXf6EE1waVEyW6Xd93cR8Nmt854Psyg5gudYqq0PXr0te4wXg6vzUwkwDmAvNXM/WtPG1pRUnWgB35gi6E4cMfmrRTwK2Wj+Iowb4i/ke9FeviBnbZ+x7Ecv9Qkemq7OoRaoE0OamjvY6Q1/in9oCuFoL01hDgK7O0kNpElGmXW7ejC37kkMBjVs4rcbyYR0c0NVZIC7ggF6FyrwjY9l2XgEQaFoU2oZsTjjKeclDh47AWwDnfLqIhwjyGk8rXm7pxwB+DPFxkbMvav03eTBVa4B28lW8f749C/3EPnevAAAAAElFTkSuQmCC" alt=""/>):
                            (<img src="data:image/png;base64,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" alt=""/>)
                        }
                        <span>全选</span>
                    </div>
                    <div className="center">
                        <span className="price">总价（不含税）：<span>￥{this.state.total}</span></span>
                        <span className="tax">预估税费：￥{this.state.tax}</span>
                    </div>
                    <div className={this.state.choosed?'right active' : 'right'}>结算</div>
                </Footer>
            </Fragment>
        )
    }
    changeChoose(total, tax) {
        total = !this.state.choosed?total: 0;
        tax = !this.state.choosed?tax: 0;
        this.setState({
            choosed: !this.state.choosed,
            tax: tax,
            total: total
        })
    }
}

const mapState = (state) => ({
    cartList: state.getIn(['cart', 'cartList']),
})

const mapDispatch = (dispatch) => ({
    getCartList() {
        dispatch(ActionCreator.CartList());
    }
})

export default connect(mapState, mapDispatch)(Header);
