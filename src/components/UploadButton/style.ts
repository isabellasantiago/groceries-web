import styled from "styled-components";

export const Button = styled.div`
    border: none;

    width: 212px;
    height: 29px;
    background-color: #D82E2E;
    border-radius: 20px;
    

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    > label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        z-index: 1;
        cursor: pointer;
    }

    > input {
        background: blue;
        display: none;
    }
`;

export const ImgProcessor = styled.img`
    width: 16px;
    height: 17px;
`;