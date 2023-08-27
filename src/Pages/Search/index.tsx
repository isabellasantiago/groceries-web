import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import * as S from './style';
import {
    DefaultPage,
    Card
} from '../../components';
import { useFile } from '../../helpers/context/useFile';


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
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                        <Card
                            description='chocolate'
                            code_bar='1232323555466'
                            price={4.87}
                            img_link='https://247wholesale.co.uk/wp-content/uploads/2021/04/1-2.jpg'
                            quantity={8}
                        />
                    </S.CardList>
                </S.Container>
            )}
        </DefaultPage>
    )
}