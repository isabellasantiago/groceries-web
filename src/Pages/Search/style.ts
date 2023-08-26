import styled from 'styled-components';


export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    @media (min-width: 764px) {
        width: 50%;
        max-width: 390px;
        height: 22px;
    }

    @media (min-width: 910px) {
        border-radius: 8px;
        width: 60%;
        max-width: 450px;
        height: 25px;        
    }
`;

export const CardList = styled(Container)`
    gap: 25px;
`;