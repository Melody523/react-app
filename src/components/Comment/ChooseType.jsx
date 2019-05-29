import React, { PureComponent } from 'react';
import { ChooseTypeWrapper } from './style';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { PullToRefresh, ListView } from 'antd-mobile';
import ReactDOM from 'react-dom';
let pageIndex = 0;
let index = 0;
function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < 5; i++) {
        dataArr.push(`row - ${(pIndex * 5) + i}`);
    }
    return dataArr;
}

class ChooseType extends PureComponent {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            showMask: false,
            images: [],
            showIndex: 0,
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight
        };
        this.changeMask = this.changeMask.bind(this);
        this.changeMask2 = this.changeMask2.bind(this);
        this.changeType = this.changeType.bind(this);
    }
    componentDidMount() {
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
    render() {
        const commentList = this.props.commentList.toJS();
        const row = (rowData, sectionID, rowID) => {
            const obj = commentList.list[index++];
            if (index > commentList.list.length - 1) {
                index = 0;
            }
            return (
                <div className="comment_item" key={obj.goodsCommentId}>
                    <div className="top">
                        <img src={obj.avatarKaola} alt="" />
                        <div className="center">
                            <span className="nickname">{obj.nicknameKaola}</span>
                            <span className="reg_day">加入网易考拉{obj.userRegisterDay}天</span>
                        </div>
                        <span className="updata_time">{obj.updateTime}</span>
                    </div>
                    <p className="middle">{obj.commentContent}</p>
                    <span className="product_type">颜色：{obj.skuPropertyList[0].propertyValue}</span>
                    <div className="images">
                        <div className="images_list">
                            {
                                obj.imgUrls.map((item, index) => (
                                    <img key={index} src={item} alt="" className="zmage" onClick={() => { this.changeMask(commentList.list[index].imgUrls) }} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <ChooseTypeWrapper>
                {
                    commentList.cmtTagList === undefined ? '' :
                        (
                            <div className="type_container">
                                {
                                    commentList.cmtTagList.map((item, index) => (
                                        <div className="type_item" key={index}>
                                            <span
                                                className={this.state.showIndex === index ? 'name active' : 'name'}
                                                onClick={() => { this.changeType(index) }}
                                            >{item.name}({item.count})</span>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
                <div className="comment_container">
                    {
                        commentList.list === undefined ? '' :
                            (
                                <div className="comment_list">
                                    {
                                        commentList.list.map((item, idx) => (
                                            <div className="comment_item" key={item.goodsCommentId}>
                                                <div className="top">
                                                    <img src={item.avatarKaola} alt="" />
                                                    <div className="center">
                                                        <span className="nickname">{item.nicknameKaola}</span>
                                                        <span className="reg_day">加入网易考拉{item.userRegisterDay}天</span>
                                                    </div>
                                                    <span className="updata_time">{item.updateTime}</span>
                                                </div>
                                                <p className="middle">{item.commentContent}</p>
                                                <span className="product_type">颜色：{item.skuPropertyList[0].propertyValue}</span>
                                                <div className="images">
                                                    <div className="images_list">
                                                        {
                                                            item.imgUrls.map((item, index) => (
                                                                <img key={index} src={item} alt="" className="zmage" onClick={() => { this.changeMask(commentList.list[idx].imgUrls) }} />
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        this.state.showMask ? (
                                            <div className="mask" onClick={this.changeMask2}>
                                                <div className="carousel">
                                                    <Carousel>
                                                        {
                                                            this.state.images.map((item, index) => (
                                                                <div key={index}>
                                                                    <img src={item} alt="" />
                                                                </div>
                                                            ))
                                                        }
                                                    </Carousel>
                                                </div>
                                            </div>
                                        ) : ''
                                    }
                                </div>

                            )
                    }

                    <div className="comment_list">
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

            </ChooseTypeWrapper>
        )
    }
    changeMask(list) {
        this.setState({
            showMask: !this.state.showMask,
            images: list
        })
    }
    changeMask2() {
        this.setState({
            showMask: !this.state.showMask
        })
    }
    changeType(index) {
        this.setState({
            showIndex: index
        })
    }
}

const mapState = (state) => ({
    commentList: state.getIn(['comment', 'commentList'])
})


export default connect(mapState, null)(ChooseType);
