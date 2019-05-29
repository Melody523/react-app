import styled from 'styled-components';

export const HeaderContainer = styled.div`
z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    .search{
        display: flex;
        justify-content: space-between;
        .iconfont{
            display: block;
            width: 40px;
            line-height: 45px;
            text-align: center;
        }
        .am-search{
            flex: 1;
            background-color: #fff;
            .am-search-value{
                color: #333;
                font-size: 14px;
                border: 0.5px solid #ccc;
            }
            .am-search-cancel{
                color: #333;
                font-size: 14px;
            }
            .am-search-input{
                border: 0.5px solid #ccc;
            }
        }
    }
    .sort{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.5px solid #ccc;
        border-top: 0.5px solid #ccc;
        .sortList{
            height: 38px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            border-right: 0.5px solid #ccc;
            .sortItem{
                color: #999;
                font-size: 14px;
                text-align: center;
                flex: 1;
            }
        }
        .filter{
            width: 75px;
            color: #999;
            font-size: 14px;
            text-align: center;
        }
    }    
    .type{
        display: flex;
        justify-content: space-around;
        height: 48px;
        border-bottom: 0.5px solid #ccc;
        .item{
            flex: 1;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            border-bottom: 0.5px solid #ccc;
            .type_item{
                display: block;
                color: #333;
                font-size: 12px;
                width: 80px;
                height: 28px;
                background-color: #eee;
                text-align: center;
                line-height: 28px;
                border-radius: 3px;
            }
        }
    }
`;
export const MainWrapper = styled.div`
    margin-top: 132px;
    .main_container{
        .main_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .main_item{
                width: 178px;
                height: 273px;
                overflow: hidden;
                img{
                    width: 173px;
                    height: 173px;
                }
                .title{
                    color: #333;
                    font-size: 12px;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient:vertical;
                }
                .keyProperty{
                    color: #888;
                    padding-right: 5px;
                    font-size: 11px;
                }
                .price{
                    .new_price{
                        color: #e31436;
                        font-size: 17px;
                    }
                    .old_price{
                        font-size: 12px;
                        color: #999;
                        text-decoration: line-through;
                    }
                }
                .benefit{
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                    padding-top:3px;
                    .left{
                        display: block;
                        font-size: 10px;
                        color: #e31436;
                        border: 0.5px solid #e31436;
                        border-radius: 2px;
                        padding: 0 3px;
                        height: 15px;
                        line-height: 15px;
                    }
                    .benefit_list{
                        display: flex;
                        flex-wrap: wrap;
                        .benefit_item{
                            display: block;
                            color: #fff;
                            font-size: 10px;
                            background-color: #e31436;
                            border-radius: 2px;
                            margin-left: 2px;
                            padding: 0 3px;
                            margin-bottom: 2px;
                        }
                    }
                }
            }
        }
    }
    .list-view-section-body{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;
export const DrawerWrapper = styled.div`
    .ant-drawer-body{
        .list{
            .item{
                padding: 10px;
                .title{
                    color: #333;
                    font-size: 15px;
                }
                .choose_item{
                    .price{
                        input{
                            width: 145px;
                            height: 30px;
                            border: none;
                            background-color: #f5f5f5;
                        }
                        span{
                            display: inline-block;
                            width: 24px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                        }
                    }
                    .name{
                        display: flex;
                        .type_list{
                            span{
                                display: block;
                                width: 93px;
                                height: 30px;
                                color: #333;
                                font-size: 12px;
                                background-color: #f5f5f5;
                            }
                            
                        }
                    }
                }
                
            }
        }   
    }
     
`;