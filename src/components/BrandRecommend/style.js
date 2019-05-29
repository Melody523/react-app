import styled from 'styled-components';

export const BrandRecommendWrapper = styled.div`
    .fenge{
        margin: 0;
        height: 10px;
        background-color: #f1f1f1;
    }
    .brand{
        .top{
            margin-bottom: 10px;
            padding: 10px 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                margin: 0;
                font-size: 14px;
                color: #333;
            }
            img{
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }
            .center{
                flex: 1;
            }
            .brandName{
                color: #333;
                font-size: 13px;
                padding-top: 4px;
                
            }
            .account{
                color: #666;
                font-size: 13px;
                padding-top: 3px;
                span{
                    color: red;
                }
            }
            .goto{
                display: block;
                width: 90px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: #333;
                border: 0.5px solid #ddd;
                border-radius: 5px;
                font-size: 12px;
                .iconfont{
                    margin-right: 5px;
                }
            }
        }
        .product{
            overflow: scroll;
            position: relative;
            .product_list{
                overflow: visible;
                display: flex;
                flex-wrap: nowrap;
                .product_item{
                    width: 125px;
                    margin-right: 5px;
                    img{
                        width: 125px;
                        height: 125px;
                    }
                    .title{
                        color: #333;
                        margin: 6px 0 4px;
                        font-size: 12px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient:vertical;
                    }
                    .price{
                        display: block;
                        color: #e73c3c;
                        font-size: 13px;
                        margin-top: 6px;
                        text-align: center;
                        .market{
                            text-decoration: line-through;
                            color: #999;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
`;