import { TaskDescriptionModel } from "../models/TaskDescriptionModel"
import { TaskModel } from "../models/TaskModel"
import { TaskSubtitleModel } from "../models/TaskSubtitleModel"
import { TaskTitleModel } from "../models/TaskTitleModel"
import * as repository from "../repositories/taskRepository"
import { badRequest, createContent, notContent, notFound, ok } from "../utils/http-helper"


export const createTaskService = async (task: TaskModel) => {
    let response = null

    if(Object.keys.length !== 0) {

        await repository.insertTask(task)
        response = await createContent()
    } else {
        response = await notContent()
    }

    return response
    
}


export const listAllTaskService = async () => {
    const data = await repository.listAllTask();
    let response = null;

    if(data) {
        response = await ok(data)
    } else {
        response = await notContent()
    }

    return response;
}

export const filterTaskByIdService = async (id: number) => {
    const data = await repository.filterTaskById(id)
    let response = null

    if(data) {
        response = await ok(data)
    } else {
        response = await notFound()
    }

    return response
}

export const deleteTaskService = async (id: number) => {
    const data = await repository.deleteTask(id)

    let response = null

    if(data) {
        response = await ok({
            message: "Task deletada!"
        })
    } else {
        response = await badRequest()
    }

    return response

}


export const updateTaskService = async (id: number, description: TaskDescriptionModel) => {
    const data = await repository.updateTask(id, description)

    let response = null

    if(Object.keys(data).length !== 0) {
        response = await ok(data)
    } else {
        response = await badRequest()
    }

    return response

}

export const updateTitleTaskService = async (id: number, title: TaskTitleModel) => {
    const data = await repository.updateTaskTitle(id, title)

    let response = null

    if(Object.keys(data).length !== 0) {
        response = await ok(data)
    } else {
        response = await badRequest()
    }

    return response
}


export const updateSubtitleTaskService = async (id: number, subtitle: TaskSubtitleModel) => {
    const data = await repository.updateTaskSubtitle(id, subtitle)

    let response = null

    if(Object.keys(data).length !== 0) {
        response = await ok(data)
    } else {
        response = await badRequest()
    }

    return response
}