import { Postgres } from "../../postgres/postgres.js";

export class NewsModel {
    #postgres;

    constructor() {
        this.#postgres = new Postgres();
    }

    async getNews() {
        const query = `SELECT * FROM new`
        return this.#postgres.fetch(query)
    }

    async getNewsById(id) {
        const query = `SELECT * FROM new WHERE id = $1`
        return this.#postgres.fetch(query, id)
    }

    async createNews({ title, description }) {
        const query = `INSERT into new(title, description) VALUES ($1, $2)`
        return this.#postgres.fetch(query, title, description)
    }

    async updateNews({ title, description, id }) {
        const news = await this.getNewsById(id)
       
        const query = `
            UPDATE new 
            SET 
                title = $1,
                description = $2
            WHERE id = $3
            RETURNING *
        `;

        return this.#postgres.fetch(query,
            title ?? news[0].title,
            description ?? news[0].description,
            id
        )
    }

    async deleteNews(id) {
        const query = `DELETE from new WHERE id = $1`
        return this.#postgres.fetch(query, id)
    }
}