import { Postgres } from "../../postgres/postgres.js";

export class CommentModel {
    #postgres;

    constructor() {
        this.#postgres = new Postgres();
    }

    async createComment(comment) {
        const query = `INSERT INTO comment (car_id, content) VALUES ($1, $2) RETURNING *`;
        return await this.#postgres.fetch(query, comment.car_id, comment.content);
    }

    async getCommentsByCarId(carId) {
        const query = `SELECT * FROM comment WHERE car_id = $1`;
        return await this.#postgres.fetch(query, carId);
    }
}