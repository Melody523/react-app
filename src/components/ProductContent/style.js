import styled from 'styled-components';

export const ProductContentWrapper = styled.div`
    p{
        margin: 0;
    }
    .zhuanchang{
        width: 100%;
        height: auto;
    }
    .img_list{
        .img_item{
            img{
                display: block;
                width: 100%;
                height: auto;
                margin: 0;
            }
        }
    }
    .user_content{
        .title{
            width: 100%;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            .title_content{
                display: block;
                width: 60px;
                height: 60px;
                font-size: 16px;
                color: #333;
                border: 0.5px solid #333;
                border-radius: 50%;
                line-height: 20px;
                text-align: center;
                padding: 10px;
            }
        }
        .art_list{
            padding: 0 15px;
            .art_item{
                padding: 15px 0 20px;
                border-top: 0.5px solid #ccc;
                .top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 8px;
                    .profile{
                        width: 30px;
                         height: 30px;
                         border-radius: 50%;
                    }
                    .nickname{
                        flex: 1;
                        color: #333;
                        font-size: 13px;
                        margin-left: 5px;
                    }
                    p{
                        margin: 0;
                        span{
                            color: #999;
                            font-size: 11px;
                            margin-left: 5px
                        }
                    }
                }
                .art_bottom{
                    h4{
                        color: #333;
                        font-size: 13px;
                        font-weight: bold;
                        margin: 0;
                    }
                    p{
                        margin-bottom: 5px;
                        color: #333;
                        font-size: 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient:vertical;
                    }
                    .image{
                        width: 100%;
                        overflow: hidden;
                        height: 81px;
                        img{
                            width: 81px;
                            height: 81px;
                            padding-right: 5px;
                        }
                    }
                    
                }
            }
        }
        .loadmore{
            font-size: 13px;
            color: #ff0000;
            text-align: center;
            padding: 5px 0 20px;
            margin: 0;
        }
    }
    .shouhou{
        padding: 0 10px;
        background-color: #f9f8f8;
    }
`;