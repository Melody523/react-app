import React, { PureComponent }   from 'react';
import { ReXiaoWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator  from '../../page/MakeUp/store/ActionCreator';
import { Tabs, Badge } from 'antd-mobile';
import {Link} from 'react-router-dom';

function renderTabBar(props) {
    return (
        <div>
            <Tabs.DefaultTabBar {...props} />
            <div className="top">
                <span>设置提醒，好货不错过</span>
                <div className="start">
                    <span>距开始</span>
                    <div className="time"><span>01</span>:<span>44</span>:<span>45</span></div>
                </div>
            </div>
        </div>
            
        );
  }
  const tabs = [
    { title: <Badge><span>5月23日</span><br/><span>00:00</span></Badge> },
    { title: <Badge><span>5月23日</span><br/><span>10:00</span></Badge> },
    { title: <Badge><span>5月23日</span><br/><span>13:00</span></Badge> },
    { title: <Badge><span>5月23日</span><br/><span>17:00</span></Badge> },
  ];
  

class ReXiao extends PureComponent{
    componentDidMount() {
        this.props.getReXiaoList();
    }
    render() {
        const { titleImg, topImg } = this.props;
        const rexiaoList = this.props.rexiaoList.toJS();
        return (
            <ReXiaoWrapper>
                <img src={topImg} alt=""/>
                <img src={titleImg} alt=""/>
                    <Tabs tabs={tabs}
                    initialPage={1}
                    swipeable={false}
                    renderTabBar={renderTabBar}
                    >
                    <div className="tab_container">
                        <ul className="tab_list">
                            {
                                rexiaoList.map((item) => (
                                    <Link to="/info" key={item.id}>
                                    <li className="tab_item">
                                        <div className="img">
                                            <img src={item.imgUrl} alt=""/>
                                            <span>{item.pty}</span>
                                        </div>
                                        
                                        <p>{item.title}</p>
                                        <div>
                                            <div>
                                                <p>{item.new_price}</p>
                                                <p>{item.old_price}</p>
                                            </div>
                                            <div className="qiang">抢</div>
                                        </div>
                                    </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div> 
                    <div className="tab_container">
                        <ul className="tab_list">
                            {
                                rexiaoList.map((item) => (
                                    <Link to="/info" key={item.id}>
                                    <li className="tab_item">
                                        <div className="img">
                                            <img src={item.imgUrl} alt=""/>
                                            <span>{item.pty}</span>
                                        </div>
                                        
                                        <p>{item.title}</p>
                                        <div>
                                            <div>
                                                <p>{item.new_price}</p>
                                                <p>{item.old_price}</p>
                                            </div>
                                            <div className="qiang">抢</div>
                                        </div>
                                    </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div> 
                    <div className="tab_container">
                        <ul className="tab_list">
                            {
                                rexiaoList.map((item) => (
                                    <Link to="/info" key={item.id}>
                                    <li className="tab_item">
                                        <div className="img">
                                            <img src={item.imgUrl} alt=""/>
                                            <span>{item.pty}</span>
                                        </div>
                                        
                                        <p>{item.title}</p>
                                        <div>
                                            <div>
                                                <p>{item.new_price}</p>
                                                <p>{item.old_price}</p>
                                            </div>
                                            <div className="qiang">抢</div>
                                        </div>
                                    </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div> 
                    <div className="tab_container">
                        <ul className="tab_list">
                            {
                                rexiaoList.map((item) => (
                                    <Link to="/info" key={item.id}>
                                    <li className="tab_item">
                                        <div className="img">
                                            <img src={item.imgUrl} alt=""/>
                                            <span>{item.pty}</span>
                                        </div>
                                        
                                        <p>{item.title}</p>
                                        <div>
                                            <div>
                                                <p>{item.new_price}</p>
                                                <p>{item.old_price}</p>
                                            </div>
                                            <div className="qiang">抢</div>
                                        </div>
                                    </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div> 
                    </Tabs>
            </ReXiaoWrapper>
        )
    }
}

const mapState = (state) => ({
    rexiaoList: state.getIn(['makeup', 'rexiaoList']),
    titleImg: state.getIn(['makeup', 'titleImg']),
    topImg: state.getIn(['makeup', 'topImg'])
})

const mapDispatch = (dispatch) => ({
    getReXiaoList() {
        dispatch(ActionCreator.ReXiaoList())
    }
})

export default connect(mapState, mapDispatch)(ReXiao);