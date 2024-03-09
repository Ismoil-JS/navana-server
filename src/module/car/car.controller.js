import carService from "./car.service.js";

class CarController {
    async createCar(req, res) {
        const { model, year, color, type, price, image, description } = req.body;
        if (!model || !year || !color || !type || !price || !image || !description) {
            res.status(400).json({ message: "All fields are required" });
            return;
        } else if (type !== 'Benzin' && type !== 'Diesel' && type !== 'Hybrid' && type !== 'Electric') {
            res.status(400).json({ message: "Type must be Benzin, Diesel, Hybrid or Electric" });
            return;
        }
        else {
            const car = await carService.createCar(req.body);
            car && car[0]
                ? res.status(201).json()
                : res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getCars(_, res) {
        const cars = await carService.getCars();
        res.status(200).json(cars);
    }

    async getCarById(req, res) {
        const car = await carService.getCarById(req.params.id);
        return res.status(200).json(car);
    }

    async updateCarById(req, res) {
        const { model, year, color, type, price, image, description} = req.body;
        const id = req.params.id;
        
        await carService.updateCarById({
            model: model?.length === 0 ? undefined : model, 
            year: year?.length === 0 ? undefined : year,
            color: color?.length === 0 ? undefined : color,
            type: type?.length === 0 ? undefined : type,
            price: price?.length === 0 ? undefined : price,
            image: image?.length === 0 ? undefined : image,
            description: description.length === 0 ? undefined : description,
            id
        });
        res.status(204).json();
    }

    async deleteCarById(req, res) {
        await carService.deleteCarById(req.params.id);
        res.status(204).end();
    }

}

export default new CarController();