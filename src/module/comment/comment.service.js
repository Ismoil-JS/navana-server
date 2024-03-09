import { CommentModel } from "./comment.model.js";

class CommentService {
    #commentModel;

    constructor() {
        this.#commentModel = new CommentModel();
    }

    async createComment(comment) {
        return await this.#commentModel.createComment(comment);
    }

    async getCommentsByCarId(carId) {
        return await this.#commentModel.getCommentsByCarId(carId);
    }
}

export default new CommentService();