import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InfoHeaderWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import { Anchor } from 'antd';
import SubLink from './link.jsx';
import ReturnLink from './return.jsx';
// import {withRouter} from "react-router-dom";
const { Link } = Anchor;

class InfoHeader extends PureComponent{
    scrollToAnchor(anchorName, index) {
        anchorName = anchorName.slice(1)
        this.props.changeIndex(index);
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    render() {
        const navList = this.props.navList.toJS();
        return (
            <InfoHeaderWrapper id="product">
                <div className="nav">
                    <ReturnLink onClick={this.goback.bind(this)}></ReturnLink>
                    <div className="center">
                    <Anchor>
                        {
                            navList.map((item, index) => (
                                // <Link key={index} href={item.link} title={item.title}
                                //     className={this.props.index===index?'active':''}
                                //     onClick={()=> {changeIndex(index)}}
                                // >
                                // </Link>
                                <Link key={item.title} >
                                    <div onClick={() => this.scrollToAnchor(item.link, index)} className={this.props.index===index?'link active':'link'}>
                                        {item.title}
                                    </div>
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