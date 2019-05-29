import styled from 'styled-components';

export const TaoCanWrapper = styled.div`
    .fenge{
        margin: 0;
        height: 10px;
        background-color: #f1f1f1;
    }
    .title{
        display: flex;
        justify-content: space-between;
        color: #333;
        font-size: 14px;
        margin: 5px 0 0;
        padding: 0 10px;
        line-height: 32px;
    }
    .content{
        width: 220px;
        margin: 0 10px 10px 10px;
        padding: 10px;
        background-color: #f7f7f7;
        img{
            width: 100px;
            height: auto;
        }
        p{
            color: #666;
            font-size: 12px;
            span{
                color: #e31436;
                font-size: 12px;
            }
        }
    }
`;
export const CommentWrapper = styled.div`
    width: 100%;
    .title{
        display: flex;
        justify-content: space-between;
        color: #333;
        font-size: 14px;
        margin: 5px 0 0;
        padding: 0 10px;
        line-height: 32px;
    }
    .comment_container{
        width: 100%;
        .comment_content{
            overflow: hidden;
            overflow-x: auto;
            position: relative;
            margin: 0 0 15px 10px;
            .comment_list{
                display: flex;
                flex-wrap: nowrap;
                overflow: visible;
                height: 110px;
                .comment_item{
                    width: 234px;
                    height: 110px;
                    margin: 0 10px 0 0;
                    padding: 0 11px 0 0;
                    border-right: 0.5px dashed #ccc;
                    display: flex;
                    justify-content: space-between;
                    .comment{
                        width: 110px;
                        .top{
                            display: flex;
                            justify-content: flex-start;
                            img{
                                margin: 0 7px 0 0;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                            }
                            p{
                                margin: 0;
                                padding: 7px 0 0;
                                font-size: 12px;
                                color: #666;
                            }
                        }
                        .comment_info{
                            margin:  12px 0 0;
                            font-size: 12px;
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient:vertical;
                        }
                    }
                    .product_img{
                        display: block;
                        width: 110px;
                        height: 110px;
                    }
                }
            }
        }
    }

`;