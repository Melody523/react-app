import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { TaoCanWrapper, CommentWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import { Link } from 'react-router-dom';

class TaoCan extends PureComponent{
    componentDidMount() {
        this.props.getCommentList();
    }
    render() {
        const commentList = this.props.commentList.toJS();
        return (
            <Fragment>
                <TaoCanWrapper>
                    <p className="fenge"></p>
                    <div className="title">
                        <h4>优惠套餐(<span>1</span>)</h4>
                        <span className="iconfont">&#xe634;</span>
                    </div>
                    <div className="content">
                        <p>[套餐1 ￥2958起]<span>立省￥21</span></p>
                        <img src="https://haitao.nos.netease.com/iw7htfzh70_800_800.jpg?imageView&thumbnail=200x0&quality=75&type=webp" alt=""/>
                        <img src="https://haitao.nos.netease.com/64f75f8c2c7b45ed9ed019ddcf0d2f6c1539159525628jn2vuaqv10321.jpg?imageView&thumbnail=200x0&quality=75&type=webp" alt=""/>
                    </div>
                    <p className="fenge"></p> 
                </TaoCanWrapper>
                <Link to="/comment">
                    <CommentWrapper id="product-comment">
                        <div className="title">
                            <h4>其它小伙伴们说(<span>{commentList.totalCount}</span>)</h4>
                            <span className="iconfont">&#xe634;</span>
                        </div>
                        <div className="comment_container">
                        {
                            commentList.list===undefined?'':
                            (
                                <div className="comment_content">
                                    <ul className="comment_list">
                                        {
                                            commentList.list.map((item, index) => (
                                                <li className="comment_item" key={index}>
                                                    <div className="comment">
                                                        <div className="top">
                                                            <img src={item.avatarKaola} alt=""/>
                                                            <p>{item.nicknameKaola}</p>
                                                        </div>
                                                        <p className="comment_info">{item.commentContent}</p>
                                                    </div>
                                                    <img className="product_img" src={item.imgUrls[0]} alt=""/>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </div>
                    </CommentWrapper>
                </Link>
                
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    commentList: state.getIn(['info', 'commentList'])
})

const mapDispatch = (dispatch) => ({
    getCommentList() {
        dispatch(ActionCreator.CommentList());
    }
})

export default connect(mapState, mapDispatch)(TaoCan);