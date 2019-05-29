import styled from 'styled-components';

export const MineWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    .header{
        height: 45px;
        display: flex;
        justify-content: flex-start;
        padding: 0 10px;
        align-items: center;
        border-bottom: 0.5px solid #ccc;
        .title{
            flex: 1;
            color: #333;
            font-size: 18px;
            text-align: center;
            margin-right: -60px;
        }
        .iconfont{
            font-size: 18px;
            color: #333;
            width: 30px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            margin: 0 7px;
        }
        .red{
            color: red;
        }
    }
    .user{
        width: 100%;
        height: 140px;
        background: url(${props =>  props.imgSrc});
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 65px;
            height: 65px;
            margin: 23px 0 5px;
        }
        p{
            margin: 0;
            color: #333;
            font-size: 20px;
            text-align: center;
        }
    }
    .order{
        .title{
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.5px solid #ddd;
            .left{
                color: #333;
                font-size: 15px;
                margin: 0;
                margin-left: 15px;
            }
            .right{
                color: #999;
                font-size: 15px;
                margin: 0;
                margin-right: 15px;
            }
        }
        .list{
            display: flex;
            justify-content: space-around;
            border-bottom: 0.5px solid #ddd;
            padding-bottom: 5px;
            .item{
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
                .iconfont{
                    font-size: 20px;
                    color: #333;
                    margin-top: 5px;
                }
                .desc{
                    font-size: 13px;
                    color: #333;
                }
            }
        }
    }
    .fenge{
        margin: 0;
        height: 10px;
        background-color: #eee;
    }
    .userList{
        .item{
            padding: 0 15px;
            height: 48px;
            display: flex;
            align-items: center;
            border-bottom: 0.5px solid #ddd;
            .title, .desc{
                color: #333;
                font-size: 15px;
            }
            .title{
                flex: 1;
            }
        }
    }
    .user_btn{
        color: #848689;
        font-size: 13px;
        padding: 22px 15px 0 15px;
        text-align: center;
    }
    .user_bottom{
        color: #999;
        font-size: 12px;
        padding: 5px 15px 22px 15px;
        text-align: center;
    }
`;

