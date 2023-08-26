import React from 'react';
import * as S from './style';

interface CardProps {
    description: string;
    price: number;
    quantity: number;
    img_link: string;
    code_bar: string;
}

export const Card: React.FC<CardProps> = ({
    description,
    price,
    quantity,
    img_link,
    code_bar
}) => {

    return (
        <S.CardContainer>
            <S.Title>{description}</S.Title>
            <S.Img src={img_link} alt={`image of ${description}`}/>

        </S.CardContainer>
    )
}