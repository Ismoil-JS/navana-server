import { Postgres } from "../../postgres/postgres.js";

export class CarModel {
    #postgres;
    constructor() {
        this.#postgres = new Postgres();
    }

    async createCar({ model, year, color, type, price, image, description }) {
        const query = `INSERT INTO car (model, year, color, type, price, image_url, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        return await this.#postgres.fetch(query,
            model, year, color, type, price, image, description
        );
    }

    async getCars() {
        const allCars = await this.#postgres.fetch(`SELECT * FROM car`);
        return allCars;
    }

    async getCarById(id) {
        const query = `SELECT * FROM car WHERE id = $1`;
        return await this.#postgres.fetch(query, id);
    }

    async updateCarById({id, model, year, color, type, price, image, description }) {
        const car = await this.getCarById(id);

        const query = `UPDATE 
                            car
                        SET 
                            model = $1,     
                            year = $2, 
                            color = $3, 
                            type = $4,
                            price = $5,
                            image_url = $6,
                            description = $7
                        WHERE 
                            id = $8 RETURNING *`
        return await this.#postgres.fetch(query,
            model ?? car[0].model, 
            year ?? car[0].year, 
            color ?? car[0].color, 
            type ?? car[0].type, 
            price ?? car[0].price, 
            image ?? car[0].image_url, 
            description ?? car[0].description, 
            id
        );
    }

    async deleteCarById(id) {
        const query = `DELETE FROM car WHERE id = $1`;
        return await this.#postgres.fetch(query, id);
    }
}