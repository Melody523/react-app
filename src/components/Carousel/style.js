import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    margin-top: 51px;
    * { touch-action: pan-y; } 
    .ant-carousel .slick-slide {
        text-align: center;
        height: 13.4em;
        line-height: 13.4em;
        background: #364d79;
        overflow: hidden;
      }
      
      .ant-carousel .slick-slide h3 {
        color: #fff;
      }
`;