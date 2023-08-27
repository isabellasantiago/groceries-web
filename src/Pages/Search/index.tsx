import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import * as S from './style';
import {
    DefaultPage,
    Card
} from '../../components';
import { useFile } from '../../helpers/context/useFile';

const mockCards = (qt: number) => {
    const arr = [];
    for (let i = 0; i < qt; i++) {
        arr.push(
            <Card
                description='chocolate'
                code_bar='1232323555466'
                price={4.87}
                img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                quantity={8}
            />
        )
        
    }
    
    return arr;
}

interface SearchProps { }

export const Search: React.FC<SearchProps> = () => {
    const { isLoading } = useFile();

    return (
        <DefaultPage>
            {isLoading ? (<ClipLoader />) : (
                <S.Container>
                    <S.SearchForm>
                        <S.SearchBar
                            placeholder='search'
                        />
                    </S.SearchForm>
                    <S.CardList>
                        {mockCards(2)}
                    </S.CardList>
                </S.Container>
            )}
        </DefaultPage>
    )
}