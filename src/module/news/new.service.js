import { NewsModel } from "./new.model.js";

class NewsService {
    #newsModel;

    constructor() {
        this.#newsModel = new NewsModel();
    }

    async getNews() {
        return this.#newsModel.getNews();
    }

    async getNewsById(id) {
        return this.#newsModel.getNewsById(id);
    }

    async createNews(payload) {
        return this.#newsModel.createNews(payload)
    }

    async updateNews(payload){
        return this.#newsModel.updateNews(payload)
    }

    async deleteNews(id){
        return this.#newsModel.deleteNews(id)
    }
}

export default new NewsService();