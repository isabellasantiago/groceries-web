import styled from "styled-components";

export const CardContainer = styled.div`
    box-sizing: border-box;
    width: 170px;
    height: 230px;
    padding: 5px;
    border-radius: 10px;

    background-color: #fafafa;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;


    @media (min-width: 734px) {
        /* flex-direction: row; */
    }

    @media (min-width: 910px) {
        height: 90px;
        padding: 10px;
    }
`;

export const Title = styled.h1`
    font: 600 18px 'Outfit', sans-serif;
    text-transform: capitalize;
`;

export const Img = styled.img`
    width: 102px;
    height: 109px;
    border-radius: 8px;
    border: 1px solid #F5F5F5;
    object-fit: cover;
`;

export const AdditionalInformation = styled.span<{type?: string}>`

    font: 600 ${props => props.type === 'price' ? '18px' : '12px'} 'Outfit', sans-serif;
    color: ${props => props.type === 'price' ? '#000' : '#cfcfcf'};

    width: 100%;
    text-align: center;
`;