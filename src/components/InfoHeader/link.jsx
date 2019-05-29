import {Link} from 'react-router-dom';
import React, { PureComponent } from 'react';
class SubLink extends PureComponent{
    render() {
        return(
            <Link to="/"><span className="iconfont right">&#xe61a;</span></Link>
        )
    }
}
export default SubLink;