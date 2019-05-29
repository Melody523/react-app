import React, { PureComponent }  from 'react';
import { HrefWrapper, BiGuang, DaPai, JingXuan, Like } from './style';
import NavAnchor from './anchor.jsx';
import * as ActionCreator from '../../page/MakeUp/store/ActionCreator';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Href extends PureComponent{
    componentDidMount() {
        this.props.getContentList();
        this.props.getJingXuanList();
        this.props.getLikeList();
    }
    render() {
        const makeupContent = this.props.makeupContent;
        const dapaiTitle = this.props.dapaiTitle;
        const dapaiList = this.props.dapaiList.toJS();
        const jingxuanTop = this.props.jingxuanTop;
        const jingxuanTitle = this.props.jingxuanTitle;
        const jingxuanList = this.props.jingxuanList.toJS();
        const likeTitle = this.props.likeTitle;
        const heimaTitle = this.props.heimaTitle;
        const likeList = this.props.likeList.toJS();
        return (
            <HrefWrapper>
                <div className="nav">
                    <NavAnchor></NavAnchor>
                    <BiGuang imgurl={makeupContent} >
                        <div id="nav-first"></div>
                        <div className="content_top">
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                        </div>
                        <div className="content_bottom">
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                            <Link to="/search"><span></span></Link>
                        </div>
                    </BiGuang>
                    <DaPai>
                        <div id="nav-second"></div>
                        <img src={dapaiTitle} alt=""/>
                        <div className="dapai_container">
                            <ul className="dapai_list">
                                {
                                    dapaiList.map((item) => (
                                        <li className="dapai_item" key={item.id}>
                                            <Link to="/search">
                                            <div>
                                                <img className="main" src={item.imgUrl} alt=""/>
                                                <img className="logo" src={item.logo} alt=""/>
                                            </div>
                                            <p><img className="dot" src={item.dot} alt=""/>{item.title}</p>
                                            <p className="desc">{item.desc}<span className="iconfont">&#xe634;</span></p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </DaPai>
                    <JingXuan>
                        <div id="nav-third"></div>
                        <img className="top" src={jingxuanTop} alt=""/>
                        <div className="container">
                            <Link to="/search">
                            <div className="title_container">
                                <img className="title" src={jingxuanTitle} alt=""/>
                                <div className="trangle"></div>
                            </div>
                            </Link>
                            <div className="list_container">
                                <ul className="list">
                                    {
                                        jingxuanList.map((item) => (
                                            <li key={item.id} className="item">
                                                <Link to="/info">
                                                <div className="img">
                                                    <img src={item.imgUrl} alt=""/>
                                                    <span>{item.huodong}</span>
                                                </div>
                                                <p>{item.title}</p>
                                                <span>{item.price}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <Link to="/search">
                                <div className="title_container">
                                    <img className="title" src={jingxuanTitle} alt=""/>
                                    <div className="trangle"></div>
                                </div>
                            </Link>
                            <div className="list_container">
                                <ul className="list">
                                    {
                                        jingxuanList.map((item) => (
                                            <li key={item.id} className="item">
                                                <Link to="/info">
                                                <div className="img">
                                                    <img src={item.imgUrl} alt=""/>
                                                    <span>{item.huodong}</span>
                                                </div>
                                                <p>{item.title}</p>
                                                <span>{item.price}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </JingXuan>
                    <Like>
                        <div className="like_container">
                            <div id="nav-forth"></div>
                            <img src={likeTitle} alt=""/>
                            <ul className="list">
                                {
                                    likeList.map((item) => (
                                        <li key={item.id} className="item">
                                            <Link to="/info">
                                            <div className="img">
                                                <img src={item.imgUrl} alt=""/>
                                                <span>{item.type}</span>
                                                <span>{item.youhui}</span>
                                            </div>
                                            <p>{item.title}</p>
                                            <div className="content">
                                                <div className="price">
                                                    <span>{item.new_price}</span>
                                                    <span>{item.old_price}</span>
                                                </div>
                                                <span className="iconfont">&#xe607;</span>
                                            </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div id="nav-fifth"></div>
                        <div className="heima_container">
                            <img src={heimaTitle} alt=""/>
                            <ul className="list">
                                {
                                    likeList.map((item) => (
                                        <li key={item.id} className="item">
                                            <Link to="/info">
                                            <div className="img">
                                                <img src={item.imgUrl} alt=""/>
                                                <span>{item.type}</span>
                                                <span>{item.youhui}</span>
                                            </div>
                                            <p>{item.title}</p>
                                            <div className="content">
                                                <div className="price">
                                                    <span>{item.new_price}</span>
                                                    <span>{item.old_price}</span>
                                                </div>
                                                <span className="iconfont">&#xe607;</span>
                                            </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Like>
                </div>
            </HrefWrapper>
        )
    }
}

const mapState = (state) => ({
    makeupContent: state.getIn(['makeup', 'makeupContent']),
    dapaiTitle: state.getIn(['makeup', 'dapaiTitle']),
    dapaiList: state.getIn(['makeup', 'dapaiList']),
    jingxuanTop: state.getIn(['makeup', 'jingxuanTop']),
    jingxuanTitle: state.getIn(['makeup', 'jingxuanTitle']),
    jingxuanList: state.getIn(['makeup', 'jingxuanList']),
    likeTitle: state.getIn(['makeup', 'likeTitle']),
    heimaTitle: state.getIn(['makeup', 'heimaTitle']),
    likeList: state.getIn(['makeup', 'likeList']),
})

const mapDispatch = (dispatch) => ({
    getContentList() {
        dispatch(ActionCreator.ContentList());
    },
    getJingXuanList() {
        dispatch(ActionCreator.JingXuanList());
    },
    getLikeList() {
        dispatch(ActionCreator.LikeList());
    }
})

export default connect(mapState, mapDispatch)(Href);