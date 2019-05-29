import styled from 'styled-components';

export const QiangGouWrapper = styled.div`
    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-top: 0.5px solid #ccc;
        border-bottom: 0.5px solid #ccc;
        box-sizing: border-box;
        .qianggou_list{
            padding: 10px 0 10px 15px;
            width: 50%;
            heigth: 27px;
            box-sizing: border-box;
            .header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                h4{
                    font-size: 18px;
                    color: #333;
                    line-height: 27px;
                    padding-right: 7px;
                    margin: 0;
                    font-weight: bold;
                }
                .time{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        display: block;
                        width: 17px;
                        height: 17px;
                        line-height: 17px;
                        font-size: 10px;
                        text-align: center;
                        background-color: #333;
                        color: #fff;
                        border-radius: 50%;
                    }
                }
                p{
                    color: #666;
                    font-size: 10px;
                    height: 27px;
                    line-height: 27px;
                    margin: 0 10px 0 0;
                }
            }
            .product_list{
                padding: 6px 0;
                .product{
                    margin-right: 5px;
                    float: left;
                    .price{
                        display: flex;
                        justify-content: space-around;
                        .now_price{
                            font-size: 12px;
                            font-weight: bold;
                            color: red;
                            margin-left: 4px;
                            line-height: 18px;
                        }
                        .old_price{
                            font-size: 9px;
                            font-weight: bold;
                            color: #999;
                            text-decoration: line-through;
                            margin-right: 4px;
                            line-height: 18px;
                        }
                    }
                }
                
            }
            img{
                width: 77px;
                height: 77px;
            }
        }
        .qianggou_list2{
            border-left: 0.5px solid #ccc;;
            .header{
                display: block;
                h4{
                    float: left;
                }
                p{
                    font-size: 11px;
                    float: left;
                }
            }
            img{
                margin: 12px 5px 0 0;
            }
        }
    }
    .bottom_content{
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px solid #ccc;
        .qianggou_list3{
            padding-top: 10px;
            width: 33%;
            border-right: 0.5px solid #ccc;
            margin-bottom: 5px;
            a{
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            .header{
                h4{
                    width: 100%;
                    font-size: 18px;
                    text-align: center;
                    color: #333;
                    line-height: 27px;
                    margin: 0;
                    font-weight: bold;
                    float: left;
                }
                p{
                    width: 100%;
                    text-align: center;
                    color: #666;
                    font-size: 12px;
                    height: 27px;
                    line-height: 27px;
                    float: left;
                    margin: 0;
                }
            }
            img{
                width: 77px;
                height: auto;
                margin-top: 21px;
            }
        }
    }
    .jingxuan{
        width: 100%;
        height: auto;
    }
`;