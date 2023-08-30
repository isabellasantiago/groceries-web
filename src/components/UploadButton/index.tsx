import React, { ChangeEvent } from 'react';
import upload from '@/assets/upload.png';
import * as S from './style';

interface UploadProps {
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadButton: React.FC<UploadProps> = ({ handleChange }) => {
    return(
        <S.Button>
            <input id="fileInput" type="file" accept='.csv' onChange={handleChange}/>
            <label htmlFor="fileInput">
                choose a file
                <S.ImgProcessor src={upload}/>
            </label>
        </S.Button>
    )
}
