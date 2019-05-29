import React, { PureComponent } from 'react';
import { RecommendWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Home/store/ActionCreator';
import {Link} from 'react-router-dom';

class Recommend extends PureComponent{
    componentDidMount() {
        this.props.getRecommendList();
    }
    render() {
        const navImg = this.props.navImg.toJS().splice(7, 1);
        const recommendList = this.props.recommendList.toJS();
        return (
            <RecommendWrapper>
                <img src={navImg} alt=""/>
                <div className="RecommendList">
                    {
                        recommendList.map((item) => (
                            
                            <div key={item.id} className="RecommendItem">
                                <Link to="/info">
                                <img src={item.imgUrl} alt=""/>
                                <p>{item.title}</p>
                                <span>{item.price}</span>
                                </Link>
                            </div>
                            
                        ))
                    }
                </div>
            </RecommendWrapper>
        )
    }
}

const mapState = (state) =>({
    navImg: state.getIn(['home', 'navImg']),
    recommendList: state.getIn(['home', 'recommendList'])
})

const mapDispatch = (dispatch) => ({
    getRecommendList() {
        dispatch(ActionCreator.RecommendList())
    }
})

export default connect(mapState, mapDispatch)(Recommend);