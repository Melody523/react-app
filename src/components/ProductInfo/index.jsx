import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { ProductInfoWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
class ProductInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.changeShow = this.changeShow.bind(this);
    }
    componentDidMount() {
        this.props.getProductMessage();
    }
    render() {
        const keyMessage = this.props.keyMessage.toJS();
        const subMessage = this.props.subMessage.toJS();
        const newSubMessage = subMessage.desc === undefined ? '' : (
            this.state.show ? subMessage.desc.splice(0) : subMessage.desc.splice(0, 1)
        )
        return (
            <ProductInfoWrapper id="product-info">
                <div className="jieshao">
                    <div className="top">
                        <p>详情介绍</p>
                        <img src="https://haitao.nosdn2.127.net/8cdd326d-c127-4f53-8183-85fac74233de.jpg?imageView&thumbnail=960x0&quality=75" alt="" />
                    </div>
                    <div className="jieshao_bottom">
                        <img src="https://haitao.nos.netease.com/6334e0ed-a3b5-409e-aad9-76122bbeab5d_1035_427.jpg" alt="" />
                        <div className="content">
                            <h4>考拉货源监管体系认证</h4>
                            <p>该商品为考拉自营全球直采</p>
                            <p>4大核心环节监控  全链路保障正品</p>
                        </div>
                    </div>
                </div>
                <p className="fenge"></p>
                <div className="product_message">
                    <h3>产品信息</h3>
                    {
                        keyMessage.desc === undefined ? '' :
                            (
                                <div className="message_content">
                                    <h4>{keyMessage.title||''}</h4>
                                    {
                                        keyMessage.desc.map((item) => (
                                            <div className="Message_item" key={item.id}>
                                                <div className="left">{item.left}</div>
                                                <div className="right">{item.right}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                    }
                    {
                        subMessage.desc === undefined ? '' :
                            (
                                <div className="message_content">
                                    <h4>{subMessage.title || ''}</h4>
                                    {
                                        newSubMessage.length === 0 ? '' :
                                            (
                                                <Fragment>
                                                    {
                                                        newSubMessage.map((item) => (
                                                            <div className="Message_item" key={item.id}>
                                                                <div className="left">{item.left}</div>
                                                                <div className="right">{item.right}</div>
                                                            </div>
                                                        ))
                                                    }
                                                </Fragment>
                                            )
                                    }
                                </div>
                            )
                    }
                    <div className="btn" onClick={this.changeShow}>
                        {
                            this.state.show ? (<span className="iconfont">收起&#xe633;</span>) : (<span className="iconfont">展开&#xe63c;</span>)
                        }

                    </div>
                </div>
                <p className="fenge"></p>
                <div className="shipai">
                    <h3>实拍视频</h3>
                    <img src="https://voddafz06jj.vod.126.net/voddafz06jj/videoPreview_2278342552_2lZoFsnx.webp?klsize=320x184" alt="" />
                    <p>青春有你-姚弛同款好物推荐</p>
                </div>
                <p className="fenge"></p>
            </ProductInfoWrapper>
        )
    }
    changeShow() {
        this.setState({
            show: !this.state.show
        })
    }
}

const mapState = (state) => ({
    keyMessage: state.getIn(['info', 'keyMessage']),
    subMessage: state.getIn(['info', 'subMessage']),
})

const mapDispatch = (dispatch) => ({
    getProductMessage() {
        dispatch(ActionCreator.ProductMessage());
    }
})

export default connect(mapState, mapDispatch)(ProductInfo);