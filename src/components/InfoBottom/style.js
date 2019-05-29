import styled from 'styled-components';

export const InfoBottomWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    z-index: 2;
    .shouchang, .cart{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        width: 46px;
        height: 50px;
        color: #666;
        font-size: 9px;
        font-weight: bold;
        .iconfont{
            font-size: 18px;
            margin-bottom: -10px;
        }
    }
    .btn{
        width: 140px;
        color: #fff;
        line-height: 50px;
        text-align: center;
        font-size: 15px;
        background-color: #404040;
    }
    .red{
        background-color: red;
    }
`;