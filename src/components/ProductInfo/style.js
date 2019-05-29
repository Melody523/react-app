import styled from 'styled-components';

export const ProductInfoWrapper = styled.div`
    .jieshao{
        position: relative;
        .top{
            p{
                width: 100%;
                height: 44px;
                color: #333;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                line-height: 44px;
                position: absolute;
                top: 0;
                left: 0;
            }
            img{
                width: 100%;
                height: auto;
            }
        }
        .jieshao_bottom{
            position: relative;
            img{
                width: 100%;
                height: auto;
            }
            .content{
                position: absolute;
                left: 33%;
                top: 43%;
                h4{
                    color: #333;
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                    text-align: center;
                }
                p{
                    color: #333;
                    font-size: 12px;
                    margin: 0;
                    text-align: center;
                }
            }
            
        }
    }
    .fenge{
        margin: 0;
        height: 10px;
        background-color: #f1f1f1;
    }
    .product_message{
        padding: 10px;
        h3{
            color: #333;
            font-size: 16px;
            margin-bottom: 13px;
        }
        .message_content{
            border-top: 0.5px solid #ccc;
            border-left: 0.5px solid #ccc;
            h4{
                color: #999;
                font-size: 12px;
                padding: 8px 10px 8px 11px;
                background-color: #f7f7f7;
                border-right: 0.5px solid #ccc;
                border-bottom: 0.5px solid #ccc;
                margin: 0;
            }
            .Message_item{
                display: flex;
                justify-content: flex-start;
                .left{
                    width: 88.5px;
                    color: #999;
                    font-size: 12px;
                    padding: 8px 10px 8px 11px;
                    border-right: 0.5px solid #ccc;
                    border-bottom: 0.5px solid #ccc;
                }
                .right{
                    flex: 1;
                    color: #333;
                    font-size: 12px;
                    padding: 8px 10px 8px 11px;
                    border-right: 0.5px solid #ccc;
                    border-bottom: 0.5px solid #ccc;
                }
            }
        }
        .btn{
            color: #666;
            padding: 15px 0 5px;
            font-size: 12px;
            text-align: center;
            .iconfont{
                font-size: 12px;
                margin: 0 5px;
            }
        }
    }
    .shipai{
        padding: 10px;
        h3{
            color: #333;
            font-size: 16px;
            line-height: 50px;
            height: 50px;
            font-weight: bold;
            margin: 0;
        }
        img{
            width: 186px;
            height: 107px;
        }
        p{
            color: #1e1e1e;
            font-size: 13px;
            height: 36px;
            line-height: 36px;
            margin: 0;
        }
    }
`;