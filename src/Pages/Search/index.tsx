import React from 'react';
import * as S from './style';
import {
    DefaultPage,
    Card
} from '@/components';

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
    return (
        <DefaultPage>
            <S.Container>
                <S.SearchForm>
                    <S.SearchBar
                        placeholder='search'
                    />
                </S.SearchForm>
                <S.CardList>
                    {mockCards(25)}
                </S.CardList>
            </S.Container>
        </DefaultPage>
    )
}