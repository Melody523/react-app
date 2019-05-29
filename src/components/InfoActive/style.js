import styled from 'styled-components';

export const InfoActionWrapper = styled.div`
    .fenge{
        width: 100%;
        height: 10px;
        background-color: #f1f1f1;
        margin: 0;
    }
    .action_content{
        .action_list{
            padding: 0 12px;
            .action_item{
                padding: 9px 0;
                display: flex;
                justify-content: flex-start;
                border-bottom: 0.5px solid #ddd;
                .type{
                    min-width: 45px;
                    display: block;
                    height: 24px;
                    font-size: 13px;
                    color: #333;
                    line-height: 24px;
                }
                .title{
                    flex: 1;
                    font-size: 12px;
                    color: #333;
                    height: 24px;
                    line-height: 24px;
                }
                .color{
                    color: #ff8587;
                }
                .container{
                    flex:1;
                }
                .shuoming{
                    flex: 1;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    div{
                        margin-right: 10px;
                    }
                    .dot{
                        float: left;
                        display: block;
                        width: 6px;
                        height: 6px;
                        background-color: #ff8587;
                        border-radius: 50%;
                        margin: 9px 5px;
                    }
                }
                .iconfont{
                    color: #333;
                    font-weight: bold;
                    font-size: 14px;
                }
            }
        }
    }
`;
export const ProductInfo = styled.div`
    padding: 10px 10px 0;
    .prdbox{
        display: flex;
        justify-content: flex-start;
        .info{
            .price{
                margin: 0;
                .num{
                    color: #e31436;
                    font-size: 14px;
                }
                .youhui{
                    font-size: 11px;
                    color: #fff;
                    background-color: #e31436;
                    margin: 1px 0 0 8px;
                    padding: 0 3px;
                }
            }
            .choose{
                color: #999;
                font-size: 14px;
                margin: 5px 0 0;
            }
        }
        img{
            width: 75px;
            height: 75px;
        }
    }
    .title{
        height: 40px;
        line-height: 40px;
        margin: 0;
        color: #999;
        font-size: 14px;
    }
    .propbox{
        display: flex;
        justify-content: space-between;
        margin: 0;
        border-bottom: 0.5px solid #ddd;
        li{
            line-height: 32px;
            color: #333;
            font-size: 12px;
            margin: 0 10px 15px 0;
            padding: 0 20px;
            border-radius: 5px;
            border: 0.5px solid #333;
        }
        .active{
            color: #fff;
            background-color: red;
            border-color: red;
        }
    }
    .qty{
        display: flex;
        justify-content: flex-start;
        border-bottom: 0.5px solid #ddd;
        padding-bottom: 15px;
        .btn{
            display: block;
            width: 35px;
            height: 30px;
            line-height: 26px;
            text-align: center;
            border: 0.5px solid #333;
            border-radius: 5px;
            font-size: 20px;
        }
        .txt{
            padding: 0 2px;
            width: 48px;
            height: 30px;
            border: 0.5px solid #333;
            border-radius: 5px;
            line-height: 28px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .service_title{
        color: #999;
        font-size: 13px;
        margin: 16px 0 0 ;
    }
    .service{
        height: 48px;
        margin: 0;
        line-height: 48px;
        font-size: 13px;
        border-bottom: 0.5px solid #ddd;
    }
    .tips{
        color: #ccc;
        font-size: 13px;
        line-height: 45px;
        margin-bottom: 50px;
    }
    .tipsActive{
        color: #333;
    }
`;
export const CuXiao = styled.p`
    margin: 0;
    padding: 8px 10px;
    color: #333;
    font-size: 14px;
    .left{
        color: #ff0000;
        padding-right: 5px;
    }
`;

export const ShuoMing = styled.ul`
  padding: 10px;
  .dot{
    float: left;
    display: block;
    width: 6px;
    height: 6px;
    background-color: #ff8587;
    border-radius: 50%;
    margin: 18px;
}
    h3{
        font-size: 14px;
        height: 42px;
        line-height: 42px;
        color: #000;
        margin: 0;
    }
    p{
        margin: 0;
        font-size: 12px;
        color: #666;
        padding-left: 42px;
    }
`;