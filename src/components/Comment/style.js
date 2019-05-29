import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    .top{
        height: 45px;
        position: relative;
        border-bottom: 0.5px solid #ccc;
        .iconfont{
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            color: #666;
            font-size: 18px;
        }
        p{
            width: 100%;
            color: #666;
            font-size: 15px;
            margin: 0;
            text-align: center;
            line-height: 45px;
        }
    }
    .hearder_bottom{
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.5px solid #ddd;
        .left{
            margin-left: 15px;
            overflow: hidden;
            img{
                width: 20px;
                height: 20px;
                margin-bottom: 2px;
                float: left
            }
            p{
                float: left;
                margin: 0 5px;
                font-size: 14px;
                color: 14px;
            }
        }
        .right{
            color: #333;
            font-size: 14px;
            margin: 0 5px;
            text-align: right;
        }
    }
`;

export const ChooseTypeWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 100px;
    border-bottom: 0.5px solid #ddd;
    .type_container{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .type_item{
            .name{
                display: block;
                margin: 0 0 10px 10px;
                padding: 0 8px;
                font-size: 14px;
                line-height: 26px;
                border: 0.5px solid #999;
                color: #333;
                border-radius: 5px;
            }
            .active{
                color: #e31436;
                border-color: #e31436;
            }
        }
    }
    .comment_container{
        p{
            margin: 0;
        }
        .comment_list{
            padding: 0 10px;
            .comment_item{
                border-bottom: 0.5px solid #ddd;
                .top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                    img{
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        margin-right: 5px;
                    }
                    .center{
                        flex: 1;
                        .nickname, .reg_day{
                            color: #666;
                            font-size: 13px;
                            display: block;
                        }
                    }
                    .updata_time{
                        color: #bbb;
                        font-size: 12px;
                    }
                }
                .middle{
                    margin-top: 11px;
                    color: #333;
                    font-size: 13px;
                }
                .product_type{
                    margin-top: 14px;
                    
                    color: #bbb;
                    font-size: 12px;
                }
                .images{
                    padding: 10px;
                    overflow: scroll;
                    .images_list{
                        overflow: visible;
                        display: flex;
                        justify-content: flex-start;
                        flex-wrap: nowrap;
                        .zmage{
                            width: auto;
                            height: 138px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
    .mask{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        img{
            width: 100%;
            height: auto;
            margin: 30% 0;
            transform: translateY(-5%);
        }
        .carousel{
            overflow: hidden;
        }
    }
`;