import uuidValidate from 'uuid-validate';
import carService from '../module/car/car.service.js';
import newService from '../module/news/new.service.js';

export const CheckId = (req, res, next) => {
    const id = req.params.id || req.user;

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    if (!uuidValidate(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    // If the ID is present and valid, proceed to the next middleware or route handler
    next();
};

export const checkUserId = async (req, res, next) => {
    const id = req.user || req.params.id;
    const user = await userService.getUserById(id);

    if (!user.length) {
        return res.status(404).json({ message: "User not found with this ID" });
    }

    next();
};

export const checkCarId = async (req, res, next) => {
    const id = req.params.id;
    const car = await carService.getCarById(id);

    if (!car.length) {
        return res.status(404).json({ message: "Car not found with this ID" });
    }

    next();
};

export const checkNewsId = async (req, res, next) => {
    const id = req.params.id;
    const news = await newService.getNewsById(id)

    if (!news.length) {
        return res.status(404).json({ message: "News not found with this ID" });
    }

    next();
};
