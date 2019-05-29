import React, { PureComponent } from 'react';
import { NavWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Home/store/ActionCreator';
import {Link} from 'react-router-dom';

class NavImg extends PureComponent{
    componentDidMount() {
        this.props.getNavImg();
    }
    render() {
        const navImg = this.props.navImg.toJS();
        return (
            <NavWrapper>
                <Link to="/makeup"><img src={navImg[0]} className="top" alt=""/></Link>
                
                <div className="bottom_container">
                <Link to="/makeup"><img className="left" src={navImg[1]} alt=""/></Link>
                    <div className="right">
                    <Link to="/makeup"><img src={navImg[2]} alt=""/></Link>
                    <Link to="/makeup"><img src={navImg[3]} alt=""/></Link>
                    </div>
                </div>
                <Link to="/makeup"><img className="bottom_1" src={navImg[4]} alt=""/></Link>
                <Link to="/makeup"><img className="bottom_1" src={navImg[5]} alt=""/></Link>
            </NavWrapper>
        );
    }
};

const mapState = (state) => ({
    navImg: state.getIn(['home', 'navImg'])
});

const mapDispatch = (dispatch) => ({
    getNavImg() {
        dispatch(ActionCreator.NavImg())
    }
});

export default connect(mapState, mapDispatch)(NavImg);