import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ProductContentWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import {Link} from 'react-router-dom';

class ProductContent extends PureComponent{
    componentDidMount() {
        this.props.getImageList();
        this.props.getArticleList();
        this.props.getShouHou();
    }
    render() {
        const imageList = this.props.imageList.toJS();
        const articleList = this.props.articleList.toJS();
        const shouhou = this.props.shouhou.toJS();
        return (
            <ProductContentWrapper>
                <img className="zhuanchang" src="https://haitao.nosdn2.127.net/1dbjpv39n78_750_375.jpg?imageView&thumbnail=750x0&quality=95&type=webp" alt=""/>
                <video 
                preload="none" 
                width="100%" 
                controls="controls" 
                poster="//haitao.nos.netease.com/141b892cf7c14085ae34b547f24abdde.jpg" 
                src="//haitao.nos.netease.com/9b78333b58424947b0f22f53b8006ec7.mp4" >
                </video>
                {
                    imageList.length === 0 ? '' : (
                        <div className="img_list">
                            {
                                imageList.map((item, index) => (
                                    <div key={index} className="img_item">
                                        <img src={item} alt=""/>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                <div className="user_content">
                    <div className="title">
                        <span className="title_content">使用心得</span>
                    </div>
                    <div className="art_container">
                        {
                            articleList.articles === undefined ? '' :
                            (
                                <div className="art_list">
                                    {
                                        articleList.articles.map((item) => (
                                            <div className="art_item" key={item.articleId}>
                                                <div className="top">
                                                     <img className="profile" src={item.userInfoSimple.profilePhoto} alt=""/>
                                                    <span className="nickname">{item.userInfoSimple.nickName}</span>
                                                    <p><span>{item.favorNum}赞 · {item.commentNum}评论</span></p>
                                                </div>
                                               <div className="art_bottom">
                                                   <h4>{item.title}</h4>
                                                   <p>{item.content}</p>
                                                   <div className="image">
                                                        {
                                                            item.imgUrls.map((item, index) => (
                                                                <img src={item} alt="" key={index}/>
                                                            ))
                                                        }
                                                   </div>
                                                   
                                               </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <Link to="/comment"><p className="loadmore">查看更多使用心得<span className="iconfont">&#xe634;</span></p></Link>
                    </div>
                </div>
                <div className="shouhou">
                    <div dangerouslySetInnerHTML={{__html: shouhou.content||''}}></div>
                </div>
            </ProductContentWrapper>
        )
    }
}

const mapState = (state) => ({
    imageList: state.getIn(['info', 'imageList']),
    articleList: state.getIn(['info', 'articleList']),
    shouhou: state.getIn(['info', 'shouhou']),
})

const mapDispatch = (dispatch) => ({
    getImageList() {
        dispatch(ActionCreator.ImageList());
    },
    getArticleList() {
        dispatch(ActionCreator.ArticleList());
    },
    getShouHou() {
        dispatch(ActionCreator.ShouHou());
    }
})

export default connect(mapState, mapDispatch)(ProductContent);