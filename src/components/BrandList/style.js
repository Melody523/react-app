import styled from 'styled-components';

export const BrandListWrapper = styled.div`
    .BrandItem{
        width: 100%;
        section{
            overflow: scroll;
            position: relative;
            top: -0.25rem;
            left: 0;
            .ProductList{
                display: flex;
                flex-wrap: nowrap;
                overflow: visible;
                margin-left: 0.2rem;
                border-left: 0.5px solid #ccc;
                border-top: 0.5px solid #ccc;
                .ProductItem{
                    float: left;
                    background-color: #fff;
                    p{
                        font-size: 12px;
                        color: #333;
                        padding: 6px 0;
                        line-height: 0.14rem;
                        margin: 0;
                    }
                    img{
                        width: 1.06rem;
                        height: auto;
                        border-right: 0.5px solid #ccc;
                    }
                    .desc{
                        border: 0.5px solid #ccc;
                        border-left: none;
                        padding: 0.06rem;
                        .txt{
                            color: red;
                            font-size: 10px;
                            border: 0.5px solid red;
                            height: 0.15rem;
                            border-radius: 7.5px;
                            padding: 0 4px;
                        }
                        .price{
                            .new_price{
                                color: red;
                                font-size: 13px;
                                margin-top: 5px;
                                font-weight: bold
                            }
                            .old_price{
                                color: #999;
                                font-size: 9px;
                                margin-left: 4px;
                                text-decoration: line-through;
                            }
                        }
                        h3{
                            margin: 0;
                            color: #333;
                        }
                        .sub_title{
                            font-size: 10px;
                            color: #666;
                        }
                    }
                }
                .loadmore{
                    float: left;
                    background-color: #fff;
                    border-bottom: 0.5px solid #ccc;
                    background: #fff url('https://haitao.nos.netease.com/d1e92de4-e260-4f05-a8ab-b9dd30f38073.png') no-repeat;
                    background-size: contain;
                    background-position: 0 0.30rem;
                    p{
                        width: 1.06rem;
                        font-size: 13px;
                        text-align: center;
                        color: #696969;
                        margin-top: 1.06rem;
                    }
                }
            }
        }
        img{
            width: 100%;
            height: auto;
        }
    }
`;