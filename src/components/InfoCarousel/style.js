import styled from 'styled-components';

export const InfoCarouselWrapper = styled.div`
width: 100%;
margin-top: 50px;
.carousel_list{
    width: 100%;
    .carousel_item{
        img{
            width: 300px;
            height: auto;
            margin: 0 auto;
        }
    }
}
.big_img{
    width: 100%;
    height: 305px;
    img{
        display: block;
        width: 300px;
        height: auto;
        margin: 0 auto;
    }
    
}
.small_img{
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding: 0 5px;
    img{
        display: block;
        width: 35px;
        height: 35px;
    }
}
.price{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    height: 50px;
    margin-left: 10px;
    padding: 10px 0;
    .new_price{
        font-size: 27px;
        font-weight: bold;
        color: #e31436;
        line-height: 31px;
        &::before{
            content:"￥";
            font-size: 15px;
            font-weight: normal;
        }
    }
    .old_price{
        color: #999;
        font-size: 13px;
        margin-left: 8px;
        text-decoration: line-through;
    }
    .youhui{
        span{
            color: #fff;
            background-color: #ff8487;
            font-size: 11px;
            margin-left: 10px;
            padding: 0 5px;
            border-radius: 3px;
        }
    }
}
h3{
    color: #333;
    font-size: 14px;
    margin: 0 10px 6px;
    padding-top: 10px;
    border-top: 0.5px solid #ccc;
    font-weight: bold;
}
p{
    color: #333；
    font-size: 13px;
    padding: 0 10px;
}
.type{
    font-size: 12px;
    background-color: #f7f7f7;
    margin: 10px;
    padding: 9px 0 9px 10px;
    height: 35px;
    li{
        float: left;
        img{
            width: 16px;
            height: auto;
            margin: 0 6px 0 0;
        }
        span{
            color: #666;
            margin: 0 10px 0 0;
        }
    }
    
}
`;