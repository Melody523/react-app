import React, { PureComponent, Fragment } from 'react';
import { HeaderContainer, MainWrapper, DrawerWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Search/store/ActionCreator';
import ReactDOM from 'react-dom';
import {withRouter, Link} from "react-router-dom";
import { SearchBar, PullToRefresh, ListView } from 'antd-mobile';
import { Drawer, Tabs } from 'antd';
import './style.css';
const { TabPane } = Tabs;
let pageIndex = 0;
  let index = 0;
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < 4; i++) {
      dataArr.push(`row - ${(pIndex * 4) + i}`);
    }
    return dataArr;
  }
class Header extends PureComponent{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
        this.state = {
            value: '戴森',
            type: ['考拉自营', '分类', '产品类型', '功能'],
            visible: false,
            index: null,
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight
        };
        this.changeShowBtn = this.changeShowBtn.bind(this);
    }
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    };
    componentDidMount() {
        this.props.getSearchList();
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(genData()),
            height: hei,
            refreshing: false,
            isLoading: false,
          });
        }, 1500);
    }
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = [...this.rData, ...genData(++pageIndex)];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        const searchList = this.props.searchList.toJS();
        const filterList = searchList.filterList===undefined? [] : searchList.filterList;
        const goodsList = searchList.goodsList===undefined? [] : searchList.goodsList;
        const sortTypeList = searchList.sortTypeList===undefined? [] : searchList.sortTypeList;
        const first_1 = filterList[3]===undefined? {} : filterList[3];
        const first_1ist_1 = first_1.list===undefined? [] : first_1.list;
        const first_2 = filterList[4]===undefined? {} : filterList[4];
        const first_1ist_2 = first_2.list===undefined? [] : first_2.list;
        const second = filterList[5]===undefined? {} : filterList[5];
        const second_list = second.list===undefined? [] : second.list;
        const third = filterList[6]===undefined? {} : filterList[6];
        const third_list = third.list===undefined? [] : third.list;
        const row = (rowData, sectionID, rowID) => {
            const obj = goodsList[index++];
            if (index > goodsList.length-1) {
              index = 0;
            } 
            return (
                <Fragment>
                    {
                        obj.length === 0 ? '' : 
                        (
                            <Link to="/info">
                                <div className="main_item"key={obj.id||''}>
                                <img src={obj.imageUrl} alt=""/>
                                <p className="title">{obj.title}</p>
                                {
                                    obj.keyProperty===undefined?'':
                                    (<span className="keyProperty">{obj.keyProperty[0]}</span>)
                                }
                                <div className="price">
                                    <span className="new_price">￥{obj.actualCurrentPrice}</span>
                                    <span className="old_price">￥{obj.marketPrice}</span>
                                </div>
                                <div className="benefit">
                                    <div className="benefit_list">
                                    <span className="left">自营</span>
                                        {
                                            obj.benefitPoint.map((item, index) => (
                                                <span className="benefit_item" key={index}>
                                                    {item}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    }
                </Fragment>
                
            );
          };
        return (
            <Fragment>
            <HeaderContainer>
                <div className="search">
                    <span className="iconfont" onClick={this.goback.bind(this)}>&#xe630;</span>
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        showCancelButton
                        onChange={this.onChange}
                    />
                </div>
                <div className="sort">
                    <div className="sortList">
                        {
                            sortTypeList.map((item)=>(
                                <div className="sortItem" key={item.sortType}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    <div className="filter" onClick={this.showDrawer}>
                        筛选
                    </div>
                </div>
                <Tabs type="card">
                    {
                        this.state.type.map((item, index) => (
                            // <div key={index} className="item">
                            //      <span className="type_item">{item}</span>
                            // </div>
                            <TabPane tab={item} key={index}>
                                {
                                    index===0?'': (
                                            index===1?(
                                                <div className="first">
                                                    <h4>{first_1.itemName}</h4>
                                                    <div>
                                                        {
                                                            first_1ist_1.map((item)=>(
                                                                <span key={item.id}>{item.name}</span>
                                                            ))
                                                        }
                                                    </div>
                                                    <h4>{first_2.itemName}</h4>
                                                    <div>
                                                        {
                                                            first_1ist_2.map((item)=>(
                                                                <span key={item.id}>{item.name}</span>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ):(index===2?(
                                                <div className="second">
                                                    {
                                                        second_list.map((item) => (
                                                            <span key={item.id}>{item.name}</span>
                                                        ))
                                                    }
                                                </div>
                                            ):(
                                                <div className="third">
                                                    {
                                                        third_list.map((item) => (
                                                            <span key={item.id}>{item.name}</span>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        )
                                    )
                                }
                                {
                                    index===0? '': (
                                         <div className="bottom_btn">
                                            <div className="btn">重置</div>
                                            <div className="btn red">确定</div>
                                        </div>
                                    )
                                }
                               
                            </TabPane>
                        ))
                    }
                </Tabs>
            </HeaderContainer>
            <MainWrapper>
                <div className="main_container">
                    <div className="main_list">
                        {
                            goodsList.map((item, index) => (
                                <Link to="/info" key={index}>
                                <div className="main_item" >
                                    <img src={item.imageUrl} alt=""/>
                                    <p className="title">{item.title}</p>
                                    {
                                        item.keyProperty===undefined?'':
                                        (<span className="keyProperty">{item.keyProperty[0]}</span>)
                                    }
                                    <div className="price">
                                        <span className="new_price">￥{item.actualCurrentPrice}</span>
                                        <span className="old_price">￥{item.marketPrice}</span>
                                    </div>
                                    <div className="benefit">
                                        <div className="benefit_list">
                                        <span className="left">自营</span>
                                            {
                                                item.benefitPoint.map((item, index) => (
                                                    <span className="benefit_item" key={index}>
                                                        {item}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                    <div className="main_container">
                    <div className="main_list">
                        <ListView
                            key='0'
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                            </div>)}
                            renderRow={row}
                            useBodyScroll={true}
                            pullToRefresh={<PullToRefresh
                            refreshing={this.state.refreshing}
                            />}
                            onEndReached={this.onEndReached}
                            pageSize={2}
                        />
                    </div>
                </div>
            </MainWrapper>
            <DrawerWrapper>
                <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={'335px'}
                >
                    <div className="list">
                        {
                            filterList.map((item, index) =>(
                                <div className="item" key={index}>
                                    <h4 className="title">
                                        {item.itemName}
                                        {
                                            item.list.length<=3||item.itemId===12||item.itemId===11? '':
                                            (<span className="iconfont" 
                                            onClick={()=>{this.changeShowBtn(index)}}>
                                                更多
                                                {
                                                    this.state.index === index?(<span className="iconfont" >&#xe633;</span>): (<span className="iconfont" >&#xe63c;</span>)
                                                }
                                            </span>)
                                        }
                                    </h4>
                                    <div className="choose_item">
                                        {
                                            item.itemId===12? (
                                                <div className="price">
                                                    <input type="text" placeholder="最低价"/>
                                                    <span>-</span>
                                                    <input type="text" placeholder="最高价"/>
                                                </div>
                                            ):
                                            (
                                                <div className="name">
                                                    {
                                                        item.itemId===11||index===this.state.index?(
                                                            item.list.map((item, index)=>(
                                                                <div key={index} className="type_list">
                                                                    {
                                                                        item.name===undefined?'':
                                                                        (<span>{item.name}</span>)
                                                                    }
                                                                </div>
                                                            ))
                                                        ):
                                                        (
                                                            item.list.splice(0, 3).map((item, index)=>(
                                                                <div key={index} className="type_list">
                                                                    {
                                                                        item.name===undefined?'':
                                                                        (<span>{item.name}</span>)
                                                                    }
                                                                </div>
                                                            ))
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bottom">
                        <div className="btn">重置</div>
                        <div className="btn red">确定<span>({searchList.total}件商品)</span></div>
                    </div>
                </Drawer>
            </DrawerWrapper>
            </Fragment>
        )
    }
    changeShowBtn(index) {
        index = index===this.state.index? null: index
        this.setState({
            index: index
        })
    }
    goback() {
        this.props.history.goBack();
    }
}

const mapState = (state) => ({
    searchList: state.getIn(['search', 'searchList'])
})

const mapDispatch = (dispatch) => ({
    getSearchList() {
        dispatch(ActionCreator.SearchList());
    }
})

export default connect(mapState, mapDispatch)(withRouter(Header));
