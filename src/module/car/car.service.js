import { CarModel } from "./car.model.js";

class CarService {
    #carModel;
    constructor() {
        this.#carModel = new CarModel();
    }

    async createCar(payload) {
        return await this.#carModel.createCar(payload);
    }

    async getCars() {
        return await this.#carModel.getCars();
    }

    async getCarById(id) {
        return await this.#carModel.getCarById(id);
    }

    async updateCarById(payload) {
        return await this.#carModel.updateCarById(payload);
    }

    async deleteCarById(id) {
        return await this.#carModel.deleteCarById(id);
    }
}

export default new CarService();