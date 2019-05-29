import React, { PureComponent } from 'react';
import { RecommendWrapper } from '../Recommend/style';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView } from 'antd-mobile';
import {Link} from 'react-router-dom';
  let pageIndex = 0;
  let index = 0;
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < 2; i++) {
      dataArr.push(`row - ${(pIndex * 2) + i}`);
    }
    return dataArr;
  }

class Refresh extends PureComponent{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
          dataSource,
          refreshing: true,
          isLoading: true,
          height: document.documentElement.clientHeight
        };
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
          const row = (rowData, sectionID, rowID) => {
            const obj = this.props.recommendList.toJS()[index++];
            if (index > this.props.recommendList.toJS().length-1) {
              index = 0;
            } 
            return (
                <div key={obj.id} className="RecommendItem">
                  <Link to="/info">
                    <img src={obj.imgUrl} alt=""/>
                    <p>{obj.title}</p>
                    <span>{obj.price}</span>
                    </Link>
                </div>
            );
          };
        return (
                <RecommendWrapper>
                    <div className="RecommendList">
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
            </RecommendWrapper>
        );
    }
}

const mapState = (state) =>({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Refresh);