import { Router } from "express";
import commentController from "./comment.controller.js";
import { CheckId } from "../../middleware/id-check.middleware.js";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { COMMENT_SCHEMA } from "../../schema/creator.schema.js";

export const commentRouter = Router()
    .post('/', ValidationMiddleware(COMMENT_SCHEMA), commentController.createComment)
    .get('/:id', CheckId,  commentController.getCommentsByCarId)