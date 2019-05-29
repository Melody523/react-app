import styled from 'styled-components';

export const RecommendWrapper = styled.div`
    background-color: #f2f2f2;
    img{
        width: 100%;
        height: auto;
    }
    .RecommendList, .list-view-section-body{
        background-color: #f2f2f2;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .RecommendItem{
            width: 47%;
            border: 1px solid #f2f2f2;
            border-radius: 5px;
            margin: 5px;
            padding: 3px 0;
            background-color: #fff;
            img{
                width: 100%;
                height: auto;
                margin-bottom: 3px;
            }
            p{
                font-size: 14px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient:vertical;
                margin: 5px;
            }
            span{
                font-size: 17px;
                font-weight: bold;
                color: red;
                margin: 5px;
            }
        }
    }
`;