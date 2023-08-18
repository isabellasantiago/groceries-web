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

    @media (min-width: 374px) {
        > label {
            font-size: 14px;
        }

        width: 235px;
        height: 35px;
    }

    @media (min-width: 764px) {
        > label {
            font-size: 20px;
            gap: 25px;
        }

        width: 340px;
        height: 50px;
        border-radius: 50px;
    }

    @media (min-width: 910px) {
        > label {
            font-size: 28px;
            gap: 30px;
        }
        
        width: 470px;
        height: 70px;
        
    }


`;

export const ImgProcessor = styled.img`
    width: 16px;
    height: 17px;

    @media (min-width: 374px) {
        width: 18px;
        height: 19px;
    }

    @media (min-width: 764px) {
        width: 29px;
        height: 30px;
    }

    @media (min-width: 910px) {
        width: 39px;
        height: 40px;        
    }

`;