import React, { PureComponent } from 'react';
import * as ActionCreator from '../../page/MakeUp/store/ActionCreator';
import { connect } from 'react-redux';
import { Anchor } from 'antd';
const { Link } = Anchor;

class NavAnchor extends PureComponent {
    scrollToAnchor(anchorName) {
        anchorName = anchorName.slice(1)
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    componentDidMount() {
        this.props.getNavHeader();
    }
    render() {
        const makeupNav = this.props.makeupNav.toJS();
        return (
            <Anchor>
                <ul className="nav_list">
                    {
                        makeupNav.map((item) => (
                            <Link key={item.id}>
                                <a onClick={() => this.scrollToAnchor(item.href)}>
                                    <li className="nav_item">
                                        <img src={item.imgUrl} alt="" />
                                        <p>{item.title}</p>
                                    </li>
                                </a>
                            </Link>
                        ))
                    }
                </ul>
            </Anchor>
        )
    }
}

const mapState = (state) => ({
    makeupNav: state.getIn(['makeup', 'makeupNav'])
})

const mapDispatch = (dispatch) => ({
    getNavHeader() {
        dispatch(ActionCreator.NavHeader());
    }
})

export default connect(mapState, mapDispatch)(NavAnchor);