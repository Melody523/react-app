import React, { PureComponent, Fragment } from 'react';
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class MakeUpHeader extends PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <NavBar style={{color: '#000', fontSize:'14px', fontWeight: 'blod'}}
                    mode="light"
                    icon={<span onClick={this.goback.bind(this)}><Icon type="left" /></span>}
                    rightContent={[
                    <span key="0" className="iconfont" style={{fontSize: '24px', fontWeight: 'bold',marginRight: '15px'}}>&#xe655;</span>,
                    <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    美妆个护频道
                </NavBar>
                <SearchBar placeholder="护肤套盒" maxLength={8} />
            </Fragment>
            
        )
    }
    goback() {
        this.props.history.goBack();
    }
}

export default withRouter(MakeUpHeader);