import React, { PureComponent } from 'react';
import { CommentWrapper } from './style';
import Header from '../../components/Comment/Header.jsx';
import ChooseType from '../../components/Comment/ChooseType.jsx';
import BackTo from '../../components/BackTop/index.jsx';

class Comment extends PureComponent{
    render() {
        return (
            <CommentWrapper>
                <Header></Header>
                <ChooseType></ChooseType>
                <BackTo></BackTo>
            </CommentWrapper>
        )
    }
}

export default Comment;
