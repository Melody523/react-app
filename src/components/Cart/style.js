import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 0.45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
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
        margin-left: 0.10rem;
    }
    .logo{
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.10rem;
    }
`;
export const House = styled.div`
    margin-top: 0.45rem;
    height: 100%;
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
        background-color: #fafafa;
        border-bottom: 0.5px solid #ddd;
        padding: 0 0.10rem;
        img{
            width: 0.20rem;
            height: 0.20rem;
            margin-right: 0.10rem;
        }
        .ziying{
            .left{
                color: #fff;
                background-color: red;
                margin-right: 0.05rem;
                padding: 0 0.05rem;
                border-radius: 0.08rem;
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
                height: 0.40rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left{
                    padding: 0 0.10rem 0 0.15rem;
                   .left_1{
                       color: #fff;
                       font-size: 10px;
                       padding: 0 5px;
                       background-color: #e31436;
                       margin-right: 2px;
                       border-radius: 5px;
                       height: 0.16rem;
                       line-height: 0.16rem;
                   } 
                   .left_2{
                       color: #666;
                       font-size: 12px;
                   }
                }
                .right{
                    color: red;
                    font-size: 12px;
                    padding: 0.04rem 0.15rem 0.04rem 0.12rem;
                    .iconfont{
                        color: red;
                        font-size: 12px;
                    }
                }
            }
            .middle{
                display: flex;
                padding: 0 0.10rem;
                .choose{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 0.45rem;
                    height: 0.90rem;
                    position: relative;
                    img{
                        width: 0.20rem;
                        height: 0.20rem;
                    }
                }
                .product-info{
                    display: flex;
                    padding: 0 0.15rem 0 0.12rem;
                    img{
                        width: 0.90rem;
                        height: 0.90rem;
                    }
                    .container{
                        width: 2.40rem;
                        padding: 0 15px 0 12px;
                        .label_content{
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: flex-start;
                            width: 2.40rem;
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
                                        width: 0.25rem;
                                        height: 0.25rem;
                                        border: 0.5px solid #ccc;
                                        font-size: 12px;
                                        display: block;
                                        line-height: 0.25rem;
                                        text-align: center;
                                    }
                                    input{
                                        width: 0.41rem;
                                        height: 0.25rem;
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
        width: 0.80rem;
        height: 0.50rem;
        color: #fff;
        font-size：15px;
        padding: 0 25px;
        background-color: #c1c1c1;
        line-height: 0.50rem;
        font-weight: bold;
    }
    .active{
        background-color: red;
    }
`;