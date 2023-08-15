import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import * as S from './style';
import { 
    DefaultPage,
    UploadButton 
} from '../../components';
import { postFile } from '../../helpers/utils/postFile';
import { useFile } from '../../helpers/context/useFile';


interface LoadFileProps {}

const LoadFile: React.FC<LoadFileProps> = () => {
    const navigate = useNavigate();
    const { setFiles, setLoading, isLoading } = useFile();
    

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const { data } = await postFile(event?.target?.files?.[0]);
        setFiles(data);
        setLoading(false)
        navigate('/search');
    }

    return(
        <DefaultPage>
            {isLoading ? (<ClipLoader />) : (
                <S.Content>
                    <S.Instruction>
                        Upload a CSV file to add products to the groceries shop
                    </S.Instruction>
                    <UploadButton
                        handleChange={handleChange}
                    />
                </S.Content>
            )}
        </DefaultPage>
    )
}

export default LoadFile;