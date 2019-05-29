import React, { PureComponent } from 'react';
import { SearchWrapper } from './style';
import {Link} from 'react-router-dom';

class Search extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            value: 'test'
        }
    }
    
    render() {
        return (
            <SearchWrapper>
                <span className="iconfont saoyisao">&#xe62b;</span>
                <div className="left search">
                    <label htmlFor="search" className="iconfont left">&#xe612;</label>
                    <input type="text" placeholder="阿迪达斯"/>
                    <span className="cancle right">&times;</span>
                </div>
                <Link to="/mine"><span className="iconfont message">&#xe69a;</span></Link>
            </SearchWrapper>
        )
    }
};

export default Search;