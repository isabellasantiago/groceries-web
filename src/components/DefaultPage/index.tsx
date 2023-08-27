import React, { ReactNode } from 'react';
import Header from "./Header";
import * as S from './style';

interface DefaultPageProps {
    children?: ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
    return(
        <S.Root>
            <Header/>        
            <S.Body>
                {children}
            </S.Body>
        </S.Root>
    )
}
