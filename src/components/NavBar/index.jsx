import React, { PureComponent } from 'react';
import { NavBarWrapper } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ActionCreator from '../../page/Home/store/ActionCreator';

class NavBar extends PureComponent{
    componentDidMount() {
        this.props.getNavList();
    }
    render() {
        const { titleImg, navList } = this.props;
        return (
            <NavBarWrapper>
                <img src={titleImg||''} className="titleImg" alt="" />
                {
                    navList.toJS().length === 0 ? '' : 
                    (
                        <ul>
                            {
                                navList.toJS().map((item) => (
                                    <li key={item.id}>
                                        <Link to="/makeup">
                                            <img src={item.imgUrl} alt=""/>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </NavBarWrapper>
        )
    }
};

const mapState = (state) => ({
    titleImg: state.getIn(['home', 'titleImg']),
    navList: state.getIn(['home', 'navList'])
})

const mapDispatch = (dispatch) => ({
    getNavList() {
        dispatch(ActionCreator.NavList())
    }
})

export default connect(mapState, mapDispatch)(NavBar);