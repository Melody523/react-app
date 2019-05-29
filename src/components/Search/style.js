import styled from 'styled-components';

export const SearchWrapper =styled.div`
    z-index: 99;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border-bottom: 0.5px solid #ccc;
    display: flex;
    justify-content: space-between;
    .iconfont{
        font-size: 20px;
        display: block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: red;
    }
    .search{
        width: 70%;
        border: 0.5px solid red;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        margin-top: 10px;
        position: relative;
        .iconfont{
            width: 30px;
            heigth: 30px;
            line-height: 30px;
        }
        .cancle{
            display:block;
            width: 20px;
            heigth: 20px;
            line-height: 20px;
            border: 0.5px solid #bbb;
            color: #bbb;
            border-radius: 50%;
            text-align: center;
            margin: 5px;
        }
        input{
            width: 75%;
            height: 28px;
            padding: 0;
            border: none;
            outline: none;
            position: absolute;
            left: 30px;
            top: 1px;
        }
    }
    .saoyisao{
        font-weight: bold;
    }
    .message{
        font-size: 24px;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
`