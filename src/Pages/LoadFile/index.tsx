import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import {
    DefaultPage,
    UploadButton
} from '@/components';
import { postFile } from '@/services/postFile';
import { useFile } from '@/helpers/context/useFile';


interface LoadFileProps { }

export const LoadFile: React.FC<LoadFileProps> = () => {
    const navigate = useNavigate();
    const { setFiles, setLoading } = useFile();


    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const { data } = await postFile(event?.target?.files?.[0]);
        setFiles(data);
        setLoading(false)
        navigate('/search');
    }

    return (
        <DefaultPage>
            <S.Content>
                <S.Instruction data-testid="initial-message">
                    Upload a CSV file to add products to the groceries shop
                </S.Instruction>
                <UploadButton
                    handleChange={handleChange}
                />
            </S.Content>
        </DefaultPage>
    )
}
