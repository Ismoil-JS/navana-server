import commentService from "./comment.service.js";
import carService from "../car/car.service.js";

class CommentController {
    async createComment(req, res) {
        const {car_id, content} = req.body;
        const car = await carService.getCarById(car_id);
        if (!car ?? !car[0]) {
            res.status(400).json({message: "Car not found with this ID"});
        } else {
            const result = await commentService.createComment({car_id, content});
            result ? res.status(201).json() : res.status(400).json({message: "Comment not created"});
        }
       
    }

    async getCommentsByCarId(req, res) {
        const carId = req.params.id;
        const result = await commentService.getCommentsByCarId(carId);
        res.status(200).json(result);
    }
}

export default new CommentController();