import React, { PureComponent } from 'react';
import { MineWrapper } from './style';
import {Link} from 'react-router-dom';

class Mine extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: '全部',
                    icon: '&#xe72d;'
                },
                {
                    title: '代付款',
                    icon: '&#xe670;'
                },
                {
                    title: '待发货',
                    icon: '&#xe68e;'
                },
                {
                    title: '待收货',
                    icon: '&#xe615;'
                },
                {
                    title: '退款退货',
                    icon: '&#xe70b;'
                }
            ],
            userList: [
                {
                    title: "我的优惠券",
                    desc: "2张优惠券"
                },
                {
                    title: "我的红包",
                    desc: "总额0元"
                },
                {
                    title: "我的收藏",
                    desc: ""
                },
                {
                    title: "关于考拉",
                    desc: ""
                },
                {
                    title: "下载考拉APP",
                    desc: ""
                }
            ]
        }
    }
    render() {
        return (
            <MineWrapper imgSrc={'https://w.kl.126.net/public/mykaola-mobile/6d111bc9fc56e0026c4093e47e330116.png'}>
                <div className="header">
                    <div className="title">我的考拉</div>
                    <Link to="/"><span className="iconfont red">&#xe61a;</span></Link>
                    <Link to="/cart"><span className="iconfont">&#xe607;</span></Link>
                </div>
                <div className="user">
                    <img src="http://haitao.nos.netease.com/vtgcByWTZlKwtnRQvhvLT170102401020_150_150.png" alt=""/>
                    <p>手机用户7721</p>
                </div>
                <div className="order">
                    <div className="title">
                        <p className="left">我的订单</p>
                        <p className="right">查看订单<span className="iconfont">&#xe634;</span></p>
                    </div>
                    <div className="list">
                        {
                            this.state.list.map((item, index)=> (
                                <div className="item" key={index}>
                                    <span className="iconfont" dangerouslySetInnerHTML={{__html:item.icon}}></span>
                                    <span className="desc">{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                    <p className="fenge"></p>
                </div>
                <div className="userList">
                    {
                        this.state.userList.map((item, index) => (
                            <div className="item" key={index}>
                                <span className="title">{item.title}</span>
                                <span className="desc iconfont">{item.desc}&#xe634;</span>
                            </div>
                        ))
                    }
                </div>
                <p className="user_btn">首页  |  客户端  |  手机用户7721  |  退出</p>
                <p className="user_bottom">网易公司版权所有@1997-2019</p>
            </MineWrapper>
        )
    }
}

export default Mine;