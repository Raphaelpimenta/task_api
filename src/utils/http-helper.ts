import { httpResponse } from "../models/httpResponseModel";

export const ok = async (data: any): Promise<httpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const createContent = async (): Promise<httpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Task criada com sucesso!"
        }
    }
}

export const notContent = async (): Promise<httpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (): Promise<httpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const notFound = async (): Promise<httpResponse> => {
    return {
        statusCode: 404,
        body: {
            message: "Task não encontrada"
        }
    }
}