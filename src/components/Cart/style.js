import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 0.5px solid #ddd;
    .title{
        flex: 1;
        color: #333;
        font-size: 18px;
        text-align: center;
    }
    .iconfont{
        color: red;
        font-size: 22px;
        margin-left: 10px;
    }
    .logo{
        width: 24px;
        height: 24px;
        margin-left: 10px;
    }
`;
export const House = styled.div`
    margin-top: 45px;
    height: 100%;
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
        background-color: #fafafa;
        border-bottom: 0.5px solid #ddd;
        padding: 0 10px;
        img{
            width: 20px;
            height: 20px;
            margin-right:10px;
        }
        .ziying{
            .left{
                color: #fff;
                background-color: red;
                margin-right: 5px;
                padding: 0 5px;
                border-radius: 8px;
                font-size: 11px;
            }
            .right{
                color: #333;
                font-size: 13px;
            }
        }
    }
    .product-list{
        background-color: #fff;
        .product-item{
            .top{
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left{
                    padding: 0 10px 0 15px;
                   .left_1{
                       color: #fff;
                       font-size: 10px;
                       padding: 0 5px;
                       background-color: #e31436;
                       margin-right: 2px;
                       border-radius: 5px;
                       height: 16px;
                       line-height: 16px;
                   } 
                   .left_2{
                       color: #666;
                       font-size: 12px;
                   }
                }
                .right{
                    color: red;
                    font-size: 12px;
                    padding: 4px 15px 4px 12px;
                    .iconfont{
                        color: red;
                        font-size: 12px;
                    }
                }
            }
            .middle{
                display: flex;
                padding: 0 10px;
                .choose{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 45px;
                    height: 90px;
                    position: relative;
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
                .product-info{
                    display: flex;
                    padding: 0 15px 0 12px;
                    img{
                        width: 90px;
                        height: 90px;
                    }
                    .container{
                        width: 240px;
                        padding: 0 15px 0 12px;
                        .label_content{
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: flex-start;
                            width: 240px;
                            .label{
                                span{
                                    color: #ff1e32;
                                    font-size: 10px;
                                    padding: 0 5px;
                                    border-radius: 7px;
                                    border: 0.5px solid #ff1e32;
                                    margin-right: 5px;
                                }
                            }
                            .title{
                                flex: 1;
                                color: #333;
                                font-size: 13px;
                                margin: 0;
                                padding-right: 15px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient:vertical;
                            }
                        }
                        .cartitem{
                            display: flex;
                            justify-content: space-between;
                            .cartitem-info{
                                .color, .tax{
                                    font-size: 11px;
                                    color: #999;
                                    margin-bottom: 7px;
                                    display: block;
                                }
                                .price{
                                    color: red;
                                    font-size: 13px;
                                    display: block;
                                }
                            }
                            .change-count{
                                position: relative;
                                .count{
                                    display: flex;
                                    .btn{
                                        width: 25px;
                                        height: 25px;
                                        border: 0.5px solid #ccc;
                                        font-size: 12px;
                                        display: block;
                                        line-height: 25px;
                                        text-align: center;
                                    }
                                    input{
                                        width: 41px;
                                        height: 25px;
                                        border: 0.5px solid #ccc;
                                        text-align: center;
                                    }
                                }
                                .iconfont{
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                }
                            }
                        }
                        
                    }
                }
            }
            .service{
                display: flex;
                justify-content: space-between;
                margin-left: 45px;
                margin-right: 10px;
                border-bottom: 0.5px solid #ddd;
                .left{
                    color: #333;
                    font-size: 12px;
                    span{
                        color: #999;
                        font-size: 12px;
                    }
                }
                .right{
                    color: #999;
                    font-size: 12px;
                    .iconfont{
                        color: #999;
                        font-size: 12px;
                    }
                }
            }
            .total{
                padding: 10px 15px;
                .youhui, .product_price{
                    color: #333;
                    font-size: 12px;
                    display: block;
                    text-align: right;
                }
            }
        }
    }
`;
export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 10px;
    border-top: 0.5px solid #ccc;
    .left{
        img{
            width: 20px;
            height: 20px;
        }
        span{
            font-size: 12px;
            color: #333;
            margin-left: 8px;
        }
    }
    .center{
        flex: 1;
        padding-right: 10px;
        .price{
            color: #333;
            font-size: 13px;
            display: block;
            text-align: right;
            span{
                color: red;
                font-weight: bold;
                font-size: 14px;
            }
        }
        .tax{
            color: #999;
            font-size: 11px;
            display: block;
            text-align: right;
        }
    }
    .buy{
        width: 80px;
        height: 50px;
        color: #fff;
        font-size：15px;
        text-align: center;
        background-color: #c1c1c1;
        line-height: 50px;
        font-weight: bold;
    }
    .active{
        background-color: red;
    }
`;