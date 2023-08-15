import React, { createContext, useState } from 'react'

interface ContextProps{
    children: React.ReactNode;
}

interface IFile {
    code_bar: string;
    description: string;
    price: number;
    quantity: number;
    img_link: string;
}

type FileContext = {
    files: Array<IFile>;
    setFiles:  React.Dispatch<React.SetStateAction<Array<IFile>>>
    isLoading: boolean;
    setLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

export const FileContext = createContext<FileContext>({
    files: [],
    setFiles: () => {},
    isLoading: false,
    setLoading: () => {}
})

export const FileContextProvider = ({ children }: ContextProps) => {
    const [files, setFiles] = useState<Array<IFile>>([])
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <FileContext.Provider
            value={{
                files,
                setFiles,
                isLoading,
                setLoading
            }}
        >
            {children}
        </FileContext.Provider>
    )
}