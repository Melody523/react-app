import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    .titleImg{
        width: 100%;
        height: auto;
    }
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 20%;
            img{
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
`;