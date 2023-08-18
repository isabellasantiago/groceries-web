import styled from "styled-components";


export const Instruction = styled.h1`
    width: 219px;
    height: 32px;

    font-size: 12px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    
    text-align: center;

    @media (min-width: 374px) {
        font-size: 14px;
    }

    @media (min-width: 764px) {
        width: 300px;
        font-size: 20px;        
    }

    @media (min-width: 910px) {
        width: 450px;
        font-size: 28px;
    }

    @media (min-width: 1400px) {
        width: 670px;
        font-size: 45px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 25%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;

    @media (min-width: 764px) {
        padding-top: 10%;
        gap: 45px;
    }

    @media (min-width: 910px) {
        padding-top: 15%;
        gap: 90px;        
    }

    @media (min-width: 1400px) {
        gap: 190px;        
    }
`;