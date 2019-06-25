import React, { PureComponent } from 'react';
import { HeaderWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Comment/store/ActionCreator';
import {withRouter} from "react-router-dom";

class Header extends PureComponent{
    componentDidMount() {
        this.props.getCommentList();
    }
    render() {
        const commentList = this.props.commentList.toJS();
        return (
            <HeaderWrapper>
                <div className="top">
                    <span className="iconfont" onClick={this.goback.bind(this)}>&#xe630;</span>
                    <p>小伙伴们说</p>
                </div>
                <div className="hearder_bottom">
                    <div className="left">
                        <img src="https://haitao.nos.netease.com/8687d0aa-7901-4e16-904c-c194418cdaec_40_40.png" alt=""/>
                        <p>只看当前商品</p>
                    </div>
                    <div className="right">
                        {commentList.productgrade||''}好评
                    </div>
                </div> 
            </HeaderWrapper>
        )
    }
    goback() {
        this.props.history.goBack();
    }
}

const mapState = (state) => ({
    commentList: state.getIn(['comment', 'commentList'])
})

const mapDispatch = (dispatch) => ({
    getCommentList() {
        dispatch(ActionCreator.CommentList());
    }
})

export default connect(mapState, mapDispatch)(withRouter(Header));
