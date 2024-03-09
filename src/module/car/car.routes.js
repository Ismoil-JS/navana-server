import { Router } from "express";
import carController from "./car.controller.js";
import { CheckId, checkCarId } from "../../middleware/id-check.middleware.js";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { CAR_SCHEMA } from "../../schema/creator.schema.js";
import { adminAuth } from "../../middleware/auth.middleware.js";

export const carRouter = Router()
    .get('/', carController.getCars)
    .get('/:id', CheckId, checkCarId, carController.getCarById)
    .post('/', adminAuth, ValidationMiddleware(CAR_SCHEMA), carController.createCar)
    .patch('/:id', adminAuth, CheckId, checkCarId, carController.updateCarById)
    .delete('/:id', adminAuth, CheckId, checkCarId, carController.deleteCarById);
