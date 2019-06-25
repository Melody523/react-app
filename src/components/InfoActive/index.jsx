import React, { PureComponent } from 'react';
import { InfoActionWrapper, ProductInfo, CuXiao, ShuoMing } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import { Drawer } from 'antd';
import {Picker} from 'antd-mobile'
import './style.css';
import  InfoBottom from '../InfoBottom/index.jsx';

const CustomChildren = props => (
    <div
        className="title"
        onClick={props.onClick}
        style={{ backgroundColor: '#fff'}}
    >
        <div style={{ display: 'flex',position:'relative',borderBottom:0 }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
)

class InfoActive extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            index: null,
            pickerValue: [],
            chooseIndex: null,
            colorType: "请选择颜色"
        }
        this.chooseColor = this.chooseColor.bind(this);
    }
    showDrawer = (index) => {
        switch (index) {
            case 0:
                this.setState({
                    visible1: true,
                    index
                });
                break;
            case 1:
                this.setState({
                    visible2: true,
                    index
                });
                break;
            case 2:
            this.setState({
                visible3: true,
                index
            });
            break;
            case 3:
            this.setState({
                visible4: true,
                index
            });
            break;
            case 4:
                this.setState({
                    visible5: true,
                    index
                });
            break;
            default:
                break;
        }
    };
    onClose = (index) => {
        switch (index) {
            case 0:
                this.setState({
                    visible1: false
                });
                break;
            case 1:
                this.setState({
                    visible2: false
                });
                break;
            case 2:
            this.setState({
                visible3: false
            });
            break;
            case 3:
            this.setState({
                visible4: false
            });
            break;
            case 4:
                this.setState({
                    visible5: false
                });
            break;
            default:
                break;
        }
    };
    componentDidMount() {
        this.props.getActionList();
        this.props.getProductColor();
        this.props.getShuomingInfo();
    }
    render() {
        const actionList = this.props.actionList.toJS();
        const productColor = this.props.productColor.toJS();
        const shuomingInfo = this.props.shuomingInfo.toJS();
        let antdDistrict =[];
        let districtData = require('./location.json');
        Object.keys(districtData).forEach((index)=>{
            let itemLevel1 ={};
            let itemLevel2 ={};
            itemLevel1.value = districtData[index].code;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index)=>{
                itemLevel2.value = data[index].code;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].districts;
                let itemLevel3 ={};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index)=>{
                    itemLevel3.value = index;
                    itemLevel3.label = data2[index];
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 ={};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 ={};
            });
            antdDistrict.push(itemLevel1)
        });
        return (
            <InfoActionWrapper>
                <p className="fenge"></p>
                <div className="action_content">
                    {
                        actionList.length === 0 ? '' : 
                        (
                            <ul className="action_list">
                                {
                                    actionList.map((item, index) => (
                                        <li key={item.id} 
                                            className="action_item" 
                                            onClick={()=>{this.showDrawer(index)}}
                                        >
                                            <span className="type">{item.type}</span>
                                            {
                                                item.id===5?
                                                (
                                                    <div className="shuoming">
                                                        {
                                                            item.title.map((item, index)=> (
                                                                <div key={index}>
                                                                    <span className="dot"></span>
                                                                    <span className="title">{item}</span>
                                                                </div>
                                                                
                                                            ))
                                                        }
                                                    </div>
                                                ):
                                                (
                                                    <div className="container">
                                                        {
                                                            item.id===3?(
                                                                    <Picker
                                                                        title="选择地区"
                                                                        extra="请选择(可选)"
                                                                        data={antdDistrict}
                                                                        value={this.state.pickerValue}
                                                                        onChange={v => this.setState({ pickerValue: v })}
                                                                        onOk={v => this.setState({ pickerValue: v })}
                                                                        onClick={()=>{console.log('xx')}}
                                                                    >
                                                                        <CustomChildren>至   </CustomChildren>
                                                                    </Picker>
                                                            ):(
                                                                item.id===1?
                                                                <span className="title">
                                                                    {
                                                                        this.state.chooseIndex===null?'颜色 请选择服务': (this.state.colorType+'  一年质保无忧退')
                                                                    }
                                                                </span>:
                                                            <span className={item.id===2?"title color":"title"}>{item.title}</span>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                            <span className="iconfont">&#xe634;</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
                <div>
                    <Drawer
                    title={productColor.title||''}
                    placement="bottom"
                    closable={true}
                    onClose={()=>{this.onClose(this.state.index)}}
                    visible={this.state.visible1}
                    height={'auto'}
                    >
                    <div>
                        {
                            productColor.img===undefined?'':
                            (
                                <ProductInfo>
                                    <div className="prdbox">
                                        <img src={productColor.img[0]} alt=""/>
                                        <div className="info">
                                            <p className="price">
                                                <span className="num">{productColor.price[0]}</span>
                                                {
                                                    productColor.youhui.map((item, index) => (
                                                        <span className="youhui" key={index}>{item}</span>
                                                    ))
                                                }
                                            </p>
                                            <p className="choose">{this.state.colorType}</p>
                                        </div>
                                    </div>
                                    <p className="title">颜色</p>
                                    <ul className="propbox">
                                        {
                                            productColor.color.map((item, index) => (
                                                <li key={index} 
                                                className={this.state.chooseIndex === index? 'active' : ''}
                                                onClick={() => {this.chooseColor(index, item)}}>
                                                    {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p className="title">数量</p>
                                    <div className="qty">
                                        <span className="btn">-</span>
                                        <input className="txt" type="text" defaultValue={productColor.qty}/>
                                        <span className="btn">+</span>
                                    </div>
                                    <p className="service_title">服务保障</p>
                                    <p className="service">{productColor.service}</p>
                                    <p className={this.state.chooseIndex ===null?'tips': 'tips tipsActive'}>{productColor.tips}</p>
                                </ProductInfo>
                            )
                        }
                    </div>
                    <InfoBottom></InfoBottom>
                    </Drawer>
                </div>
                <div>
                <Drawer
                    title="促销活动"
                    placement="bottom"
                    closable={true}
                    onClose={()=>{this.onClose(this.state.index)}}
                    visible={this.state.visible2}
                    min-height={'256px'}
                >
                    <div>
                        <CuXiao>
                            <span className="left">[包税]</span>
                            售价已包含税费，无需另付税费
                        </CuXiao>
                    </div>
                    </Drawer>
                </div>
                <div>
                <Drawer
                    title="运费说明"
                    placement="bottom"
                    closable={true}
                    onClose={()=>{this.onClose(this.state.index)}}
                    visible={this.state.visible4}
                    height={'256px'}
                >
                    <div>
                        <CuXiao>
                        自营订单满88元包邮，不足金额的订单收取10元运费，以商品活动后的总金额为准，不含税费，使用虚拟资产(优惠券、红包、考拉豆等)不影响包邮的计算，特殊商品、自营店铺及入驻商家商品单独计算运费。
                        </CuXiao>
                    </div>
                    </Drawer>
                </div>
                <div>
                <Drawer
                    title="商品说明"
                    placement="bottom"
                    closable={true}
                    onClose={()=>{this.onClose(this.state.index)}}
                    visible={this.state.visible5}
                    height={'auto'}
                >
                    <div>
                        {
                            shuomingInfo.length === 0 ? '' : 
                            (
                                <ShuoMing>
                                    {
                                        shuomingInfo.map((item, index) => (
                                            <li key={index}>
                                                <h3><span className="dot"></span>{item.detailTitle}</h3>
                                                <p>{item.detailContentList}</p>
                                            </li>
                                        ))
                                    }
                                </ShuoMing>
                            )
                        }
                    </div>
                    </Drawer>
                </div>
            </InfoActionWrapper>
        )
    }
    chooseColor(index, color) {
        this.setState({
            chooseIndex: index,
            colorType: color
        })
    }
}

const mapState = (state) => ({
    actionList: state.getIn(['info', 'actionList']),
    productColor: state.getIn(['info', 'productColor']),
    shuomingInfo: state.getIn(['info', 'shuomingInfo']),
})

const mapDispatch = (dispatch) => ({
    getActionList() {
        dispatch(ActionCreator.ActionList());
    },
    getProductColor() {
        dispatch(ActionCreator.ProductColor());
    },
    getShuomingInfo() {
        dispatch(ActionCreator.ShuomingInfo());
    }
})

export default connect(mapState, mapDispatch)(InfoActive);