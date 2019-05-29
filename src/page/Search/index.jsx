import React, { PureComponent } from 'react';
import { SearchWrapper } from './style';
import Header from '../../components/SearchInfo/header.jsx'
import BackTo from '../../components/BackTop/index.jsx';

class Search extends PureComponent{
    render() {
        return (
            <SearchWrapper>
                <Header></Header>
                <BackTo></BackTo>
            </SearchWrapper>
        )
    }
}

export default Search;
