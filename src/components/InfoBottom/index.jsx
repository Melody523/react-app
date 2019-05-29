import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InfoBottomWrapper } from './style';
import {Link} from 'react-router-dom';
// import * as ActionCreator from '../../page/Info/store/ActionCreator';

class InfoBottom extends PureComponent{
    render() {
        return (
            <InfoBottomWrapper>
                <Link to="/mine"><div className="shouchang"><span className="iconfont">&#xe82a;</span><span>收藏</span></div></Link>
                <Link to="/cart"><div className="cart"><span className="iconfont">&#xe607;</span><span>购物车</span></div></Link>
                <Link to="/cart"><div className="btn">加入购物车</div></Link>
                <Link to="/cart"><div className="btn red">立即购买</div></Link>
            </InfoBottomWrapper>
        )
    }
}

const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({
    
})

export default connect(mapState, mapDispatch)(InfoBottom);