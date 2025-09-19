import { Request, Response } from "express";
import * as service from "../services/taskService"
import { TaskModel } from "../models/TaskModel";


export const createTaskController = async (req: Request, res: Response) => {
        const bodyValue = req.body
        const data = await service.createTaskService(bodyValue)
        res.status(data.statusCode).json(data.body)
}

export const getAllTaskController = async (req: Request, res: Response) => {
        const data = await service.listAllTaskService()
        res.status(data.statusCode).json(data.body)
}

export const filterTaskByIdController = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id) 
        const data = await service.filterTaskByIdService(id)
        res.status(data.statusCode).json(data.body)
}

export const deleteTaskController = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const data = await service.deleteTaskService(id)
        res.status(data.statusCode).json(data.body)
}

export const updateTaskController = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id) 
        const bodyValue: TaskModel = req.body
        const data = await service.updateTaskService(id, bodyValue)
        res.status(data.statusCode).json(data.body)
}