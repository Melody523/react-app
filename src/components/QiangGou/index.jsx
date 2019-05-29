import React, { PureComponent } from 'react';
import { QiangGouWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Home/store/ActionCreator';
import {Link} from 'react-router-dom';

class QiangGou extends PureComponent{
    componentDidMount() {
        this.props.getQiangGouList();
    }
    render() {
        const qiangGou1 = this.props.qiangGou.toJS().splice(0, 1);
        const qiangGou2 = this.props.qiangGou.toJS().splice(1, 1);
        const qiangGou3 = this.props.qiangGou.toJS().splice(2);
        return (
            <QiangGouWrapper>
                <div className="top">
                    {
                        qiangGou1.map((item) => (
                            <div className="qianggou_list" key={item.id}>
                                <Link to="/search">
                                <div className="header">
                                    <h4>{item.title}</h4>
                                    <div className="time"><span>01</span>:<span>44</span>:<span>45</span></div>
                                    <p>{item.desc}</p>
                                </div> 
                                <div className="product_list">
                                {
                                    item.product.map((item)=>(
                                        <div key={item.id} className="product">
                                            <img src={item.imgUrl} alt=""/>
                                            <div className="price">
                                                <span className="now_price">{item.now_price}</span>
                                                <span className="old_price">{item.price}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                </Link>
                            </div>
                        ))
                    }
                    {
                        qiangGou2.map((item) => (
                            <div className="qianggou_list qianggou_list2"  key={item.id}>
                                <Link to="/search">
                                <div className="header">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                {
                                    item.product.map((item)=>(
                                        <img src={item.imgUrl} alt="" key={item.id} /> 
                                    ))
                                }
                                </Link>
                            </div>
                            
                        ))
                    } 
                </div>
                <div className="bottom_content">
                    {
                        qiangGou3.map((item) => (
                            <div key={item.id} className="qianggou_list3">
                                <Link to="/search" >
                                <div className="header">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                {
                                    item.product.map((item)=>(
                                         <img src={item.imgUrl} alt="" key={item.id} /> 
                                    ))
                                }
                                </Link>
                            </div>
                            
                        ))
                    }
                </div>
                <img className="jingxuan" src={this.props.navImg.toJS()[6]} alt=""/>
            </QiangGouWrapper>
        )
    }
};

const mapState = (state) => ({
    qiangGou: state.getIn(['home', 'qiangGou']),
    navImg: state.getIn(['home', 'navImg'])
})

const mapDispatch = (dispatch) => ({
    getQiangGouList() {
        dispatch(ActionCreator.QiangGouList());
    }
})

export default connect(mapState, mapDispatch)(QiangGou);