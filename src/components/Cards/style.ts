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

export const AdditionalInformation = styled.span<{$type?: string}>`
    font: 600 10px 'Outfit', sans-serif;
    color: #cfcfcf;

    width: 100%;
    text-align: center;
`;


export const Price = styled.span`

`;