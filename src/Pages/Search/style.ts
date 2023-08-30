import styled from 'styled-components';


export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

export const SearchForm = styled.form`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchBar = styled.input`
    border: 1px solid #8d8d8d;
    border-radius: 20px;

    width: 200px;
    height: 18px;
    padding: 2px 15px;

    font-family: 'Open Sans', sans-serif;

    &:focus {
        outline: 1px solid #8d8d8d;
    }

    &::placeholder {
        text-align: center;
    }

    @media (min-width: 374px) {
        width: 235px;
        height: 18px;
    }

    @media (min-width: 734px) {
        width: 50%;
        max-width: 390px;
        height: 22px;
    }

    @media (min-width: 910px) {
        width: 60%;
        max-width: 450px;
        height: 25px;        
    }
`;


export const CardList = styled.div<{ itemsQuantity?: number }>`
    box-sizing: border-box;
    display: grid;
    gap: 20px;
    padding-bottom: 10px;
    


    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 680px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (min-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 2000px) {
        grid-template-columns: repeat(6, 1fr);
    }
   
`;