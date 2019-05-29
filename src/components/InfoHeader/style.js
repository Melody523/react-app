import styled from 'styled-components';

export const InfoHeaderWrapper = styled.div`
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        z-index: 2;
        .iconfont{
            display: block;
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            font-size: 18px;
        }
        .right{
            color: red;
        }
        .center{
            flex: 1;
            .ant-anchor{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            .ant-anchor-link{
                flex: 1;
                display: block;
                text-align: center;
                font-size: 14px;
                color: #333;
                padding: 10px 5px;
            }
            .ant-anchor-link-active{
                border-bottom: 1px solid red;
            }
            .ant-anchor-link-title{
                color: #333;
            }
            }
            
            
        }
    }
    .ant-anchor-wrapper{
        .ant-anchor{
            .ant-anchor-ink{
                &:nth-child(1){
                    display: none;
                }
            }
        }
    }
    
`;