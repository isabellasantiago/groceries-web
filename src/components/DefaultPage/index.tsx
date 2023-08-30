import React, { ReactNode } from 'react';
import { useFile } from '@/helpers/context/useFile';
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header";
import * as S from './style';


interface DefaultPageProps {
    children?: ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
    const { isLoading } = useFile();

    return(
        <S.Root>
            <Header/>        
            <S.Body>
                {isLoading ? (<S.ClipContainer><ClipLoader /></S.ClipContainer>) : children}
            </S.Body>
        </S.Root>
    )
}
