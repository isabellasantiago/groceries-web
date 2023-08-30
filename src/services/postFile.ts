/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/services"

export const postFile = async (file: any) => {
    const formData = new FormData();
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    formData.append('file', file)

    const { data, status, statusText } = await api.post('/api/files', formData, config)
    return { data, status, statusText }
}