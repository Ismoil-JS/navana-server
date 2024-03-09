import { Router } from "express";
import NewsController from './new.controller.js'
import { CheckId, checkNewsId } from "../../middleware/id-check.middleware.js";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { NEWS_SCHEMA } from "../../schema/creator.schema.js";
import { adminAuth } from "../../middleware/auth.middleware.js";

export const newsRouter = Router()
    .get('/', NewsController.getNews)
    .get('/:id', CheckId, checkNewsId, NewsController.getNewsById)
    .post('/', adminAuth, ValidationMiddleware(NEWS_SCHEMA), NewsController.createNews)
    .patch('/:id', adminAuth, CheckId, checkNewsId, NewsController.updateNews)
    .delete('/:id', adminAuth, CheckId, checkNewsId, NewsController.deleteNews)