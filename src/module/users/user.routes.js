import { Router } from "express";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { USERS_SCHEMA } from "../../schema/creator.schema.js";
import userController from "./user.controller.js";

export const userRouter = Router()
    .get('/', userController.getAll)
    .post('/sign-in', ValidationMiddleware(USERS_SCHEMA), userController.signIn)
    .post('/sign-up', ValidationMiddleware(USERS_SCHEMA), userController.signUp)
