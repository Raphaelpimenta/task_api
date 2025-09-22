import database from "../database/dataTask"
import { TaskDescriptionModel } from "../models/TaskDescriptionModel"
import { TaskModel } from "../models/TaskModel"
import { TaskSubtitleModel } from "../models/TaskSubtitleModel"
import { TaskTitleModel } from "../models/TaskTitleModel"


//post
export const insertTask = async (data: TaskModel) => {
    return database.push(data)
}

//get
export const listAllTask = async (): Promise<TaskModel[]> => {
    return database;
}

//get
export const filterTaskById = async (id: number): Promise<TaskModel | undefined> => {
    return database.find((taksId) => taksId.id === id)
}

//delete
export const deleteTask = async (id: number) => {
    const indexId = database.findIndex((task) => task.id === id)

    if(indexId !== -1) {
        database.splice(indexId, 1)
        return true
    }

    return false
}

//Update Description
export const updateTask = async (id:number, description: TaskDescriptionModel): Promise<TaskModel> => {
    const indexId = database.findIndex((t) => t.id === id)

    if(indexId !== -1) {
        database[indexId].description  = description.description
        return database[indexId]
    }

    return {} as TaskModel

}

//Update Title
export const updateTaskTitle = async (id: number, title: TaskTitleModel): Promise<TaskModel> => {
    const index_id = database.findIndex((title) => title.id === id)

    if(index_id !== -1) {
        database[index_id].title  = title.title
        return database[index_id]
    }

    return {} as TaskModel
}


export const updateTaskSubtitle = async (id: number, subtitle: TaskSubtitleModel): Promise<TaskModel> => {
    const index_id = database.findIndex((subtitle) => subtitle.id === id)

    if(index_id !== -1) {
        database[index_id].subtitle  = subtitle.subtitle
        return database[index_id]
    }

    return {} as TaskModel

}