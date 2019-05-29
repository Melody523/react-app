import styled from 'styled-components';
 export const ReXiaoWrapper = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
    }
    .am-tabs-default-bar-tab-active{
        color: red;
    }
    .am-tabs-default-bar-underline{
        border-color: red;
    }
    .am-badge{
        text-align: center;
        span:nth-child(1){
            font-size: 11px;
        }
        span:nth-child(2){
            font-size: 17px;
            font-weight: bold;
        }
    }
    .top{
        display: flex;
        justify-content: space-between;
        padding:0 5px;
        height: 35px;
        line-height: 35px;
        .start{
            display: flex;
            justify-content: space-between;
            .time{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 5px;
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
        }
    }
    .tab_container{
        overflow: scroll;
        position: relative;
        .tab_list{
            display: flex;
            flex-wrap: nowrap;
            overflow: visible;
            width: 100%;
            margin: 0;
            .tab_item{
                float: left;
                .img{
                    position: relative;
                    img{
                        width: 125px;
                        height: auto;
                    }
                    span{
                        position: absolute;
                        left: 5px;
                        bottom: 5px;
                        display: block;
                        background-color: #fff;
                        color: red;
                        height: 15px;
                        border-radius: 7.5px;
                        border: 0.5px solid red;
                        line-height: 15px;
                        padding: 0 5px;
                        font-size: 10px;
                    }
                }
                p{
                    font-size: 11px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient:vertical;
                    margin:0 0 5px 5px;
                    color: #333;
                }
                div{
                    position: relative;
                    div{
                        p:nth-child(1){
                            color: red;
                            font-weight: bold;
                            font-size: 15px;
                        }
                        p:nth-child(2){
                            color: #bbb;
                            font-size: 10px;
                            text-decoration: line-through;
                        }
                    }
                    .qiang{
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        font-size: 16px;
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        color: #fff;
                        background-color: red;
                        border-radius: 50%;
                    }
                }
                
            }
        }
    }
    
 `;