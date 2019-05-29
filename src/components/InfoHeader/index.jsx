import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InfoHeaderWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import { Anchor } from 'antd';
import SubLink from './link.jsx';
import ReturnLink from './return.jsx';
import {withRouter} from "react-router-dom";
const { Link } = Anchor;

class InfoHeader extends PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        const navList = this.props.navList.toJS();
        const { changeIndex } = this.props;
        return (
            <InfoHeaderWrapper id="product">
                <div className="nav">
                    <ReturnLink onClick={this.goback.bind(this)}></ReturnLink>
                    <div className="center">
                    <Anchor>
                        {
                            navList.map((item, index) => (
                                <Link key={index} href={item.link} title={item.title}
                                    className={this.props.index===index?'active':''}
                                    onClick={()=> {changeIndex(index)}}
                                >
                                </Link>
                            ))
                        }
                    </Anchor>
                    </div>
                    <SubLink></SubLink>
                </div>
            </InfoHeaderWrapper>
        )
    }
    goback() {
        this.props.history.goBack();
    }
}

const mapState = (state) => ({
    navList: state.getIn(['info', 'navList']),
    index: state.getIn(['info', 'index']),
})

const mapDispatch = (dispatch) => ({
    changeIndex(index) {
        dispatch(ActionCreator.changeIndexAction(index))
    }
})

export default connect(mapState, mapDispatch)(InfoHeader);