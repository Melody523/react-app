import styled from 'styled-components';

export const HrefWrapper = styled.div`
    width: 100%;
    .nav{
        width: 100%;
        .ant-anchor-link{
            padding: 0;
            width: 20%;
            height: 53px;   
        }
        .ant-anchor-wrapper{
            padding-left: 0px;
            height: 53px;
            overflow: hidden;
        }
        .nav_list{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            .nav_item{
                margin-top: -6px;
                padding: 4px 0;
                background-color: #f68383;
                color: #fff;
                text-align: center;
                img{
                    width: 25px;
                    height: auto;
                }
                p{
                    margin: 0;
                    font-size: 12px;
                }
            }
        }
    }
`;

export const BiGuang = styled.div`
    #nav-first{
        height: 1px;
        width: 100%;
        float: left;
        margin-top: -50px;
    }
    background-image: url(${props =>  props.imgurl});
    width: 100%;
    height: 390px;
    background-size: contain;
    .content_top{
        display: flex;
        justify-content: space-between;
        span{
            display: block;
            width: 86px;
            height: 120px;
            margin: 5px 0;
        }
    }
    .content_bottom{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span{
            display: block;
            width: 178px;
            height: 117px;
            margin: 5px 0;
        }
    }
`;

export const DaPai = styled.div`
    #nav-second{
        height: 1px;
        width: 100%;
        float: left;
        margin-top: -50px;
    }
    img{
        width: 100%;
        height: auto;
    }
    .dapai_container{
        .dapai_list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .dapai_item{
                width: 33%;
                text-align: center;
                div{
                    margin-bottom: 15px;
                    position: relative;
                    .main{
                        width: 118px;
                        height: auto;
                        border-radius: 5px;
                    }
                    .logo{
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 26px;
                        height: auto;
                        border-radius: 2px;
                        transform: translate(-50%, 50%);
                    }
                }
                .dot{
                    width: 11px;
                    height: auto;
                    margin-right: 3px;
                }
                p{
                    margin: 0;
                    font-size: 12px;
                    margin-bottom: 5px;
                }
                .desc{
                    color: red;
                    margin-bottom: 10px;
                    .iconfont{
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;

export const JingXuan = styled.div`
    #nav-third{
        height: 1px;
        width: 100%;
        float: left;
        margin-top: -50px;
    }
    .top{
        width: 100%;
        height: auto;
    }
    .title_container{
        position: relative;
        .title{
            width: 100%;
            height: auto;
        }
        .trangle{
            position: absolute;
            left: 10px;
            bottom: 0;
            width: 0;
            border: 14px solid transparent;
            border-bottom-color: #fff;
        }
    }
    .container{
        .list_container{
            position: relative;
            overflow: scroll;
            .list{
                overflow: visible;
                width: 100px;
                display: flex;
                justify-content: space-between;
                flex-wrap: nowrap;
                .item{
                    .img{
                        position: relative;
                        img{
                            width: 100px;
                            height: auto;
                        }
                        span{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            z-index: 2;
                            font-size: 10px;
                            padding: 0 4px;
                            color: #fff;
                            background-color: #ff1e32;
                            border-radius: 0 6px 6px 0;
                        }
                    }
                    p{
                        font-size: 13px;
                        color: #333;
                        margin: 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient:vertical;
                    }
                    span{
                        font-size: 13px;
                        font-weight: bold;
                        color: #e31436;
                    }
                }
            }
        }
    }
`;

export const Like = styled.div`
    .like_container, .heima_container{
        #nav-forth{
            height: 1px;
            width: 100%;
            float: left;
            margin-top: -50px;
        }
        #nav-fifth{
            height: 1px;
            width: 100%;
            float: left;
            margin-top: -50px;
        }
        img{
            width: 100%;
            height: auto;
        }
        .list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .item{
                width: 118px;
                .img{
                    position: relative;
                    img{
                        width: 118px;
                        height: auto;
                    }
                    span{
                        position: absolute;
                        z-index: 2;
                        font-size: 10px;
                        padding: 0 4px;
                        color: #fff;
                        background-color: #ff1e32;
                        border-radius: 0 6px 6px 0;
                    }
                    span:nth-child(2){
                        bottom: 20px;
                        left: 0;
                        background-color: #8d54df;
                    }
                    span:nth-child(3){
                        bottom: 0px;
                        left: 0;
                    }
                }
                p{
                    font-size: 11px;
                    margin: 0 5px;
                    color: #333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient:vertical;
                }
                .content{
                    position: relative;
                    margin: 5px;
                    .price{
                        span:nth-child(1){
                            color: #93041F;
                            font-size: 15px;
                            font-weight: bold;
                        }
                        span:nth-child(2){
                            color: #999;
                            font-size: 11px;
                            text-decoration: line-through;
                            margin-left: 5px;
                        }
                    }
                    .iconfont{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 25px;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        color: #93041f;
                        border-radius: 50%;
                        border: 0.5px solid #93041f;
                    }
                }
                
            }
        }
    }
`;
