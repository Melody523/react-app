import {withRouter} from "react-router-dom";
import React, { PureComponent } from 'react';
class ReturnLink extends PureComponent{
    render() {
        return(
            <span onClick={this.goback.bind(this)} className="iconfont">&#xe630;</span>
        )
    }
    goback() {
        this.props.history.goBack();
    }
}
export default withRouter(ReturnLink);