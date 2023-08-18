import styled from "styled-components";

export const HeaderBar = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 39px;
    padding: 5px 20px;
    border-bottom: 0.5px solid #DDD;

    display: flex;
    align-items: center;
    justify-content: flex-start;


    @media (min-width: 374px) {
        height: 50px;
    }

    @media (min-width: 764px) {
        height: 65px;
        padding: 5px;
    }

    @media (min-width: 910px) {
        height: 90px;
        padding: 10px;
    }

    
`;

export const Brand = styled.div`
    width: 95px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    > img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 374px) {
        width: 120px;        
    }

    @media (min-width: 764px) {
        width: 250px;
    }

    @media (min-width: 910px) {
        width: 300px;
    }
    
`;