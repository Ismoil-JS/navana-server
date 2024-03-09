import { Postgres } from "../../postgres/postgres.js";

export class UserModel {
    #postgres;

    constructor() {
        this.#postgres = new Postgres();
    }

    async getAll() {
        const query = `SELECT username from users`;
        return await this.#postgres.fetch(query);
    }

    async getUserById(id) {
        const query = `SELECT * from users WHERE id = $1`;
        return await this.#postgres.fetch(query, id);
    }

    async signIn(payload) {
        const { username, password } = payload;

        const query = `SELECT * from users WHERE username = $1 AND password = crypt($2, password)`;
        const user = await this.#postgres.fetch(query, username, password);
        return user;
    }

    async signUp(user) {
        const query = `INSERT INTO users(username, password) VALUES($1, crypt($2, gen_salt('bf', 4)))`;
        return await this.#postgres.fetch(query, user.username, user.password);
    }
}