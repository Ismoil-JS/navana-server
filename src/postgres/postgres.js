import pg from 'pg';
import { config } from 'dotenv';
config();

export class Postgres {
    #pg;

    constructor() {
        this.#pg = new pg.Pool({
            host: process.env.DB_HOST ?? 'localhost',
            port: process.env.DB_PORT ?? 5432,
            user: process.env.DB_USER ?? 'postgres',
            // password: process.env.DB_PASSWORD ?? '1234',
            password: '1234', // '1234' is the default password for the 'postgres' user
            database: process.env.DB_DATABASE ?? 'navana',
        })
    }

    async fetch(SQL, ...params) {
        const client = await this.#pg.connect();
        try {
            const { rows } = await client.query(SQL, params.length ? params : null);
            return rows;
        } catch (e) {
            console.log(e);
        } finally {
            client.release();
        }
    }
}