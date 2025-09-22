import { Router } from "express";
import * as controller from "./controller/controllerTask"

const router = Router()

router.post('/task', controller.createTaskController)
router.get('/task', controller.getAllTaskController)
router.get("/task/:id", controller.filterTaskByIdController)
router.delete("/task/:id", controller.deleteTaskController)

router.patch("/task/title/:id", controller.updateTaskTitleController)
router.patch("/task/subtitle/:id", controller.updateTaskSubtitleController)
router.patch("/task/description/:id", controller.updateTaskController)

export default router