import { UserModel } from "./user.model.js";

class UserService {
    #userModel;

    constructor() {
        this.#userModel = new UserModel();
    }

    async getAll() {
        return await this.#userModel.getAll();
    } 

    async getUserById(id) {
        return await this.#userModel.getUserById(id);
    }

    async signIn(payload) {
        return await this.#userModel.signIn(payload);
    }

    async signUp(payload) {
        return await this.#userModel.signUp(payload);
    }
}

export default new UserService();