import NewsService from './new.service.js'

class NewsController {
    async getNews(_, res) {
        try {
            const news = await NewsService.getNews()
            res.status(200).json(news)
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    async getNewsById(req, res) {
        try {
            const id = req.params.id;
            const news = await NewsService.getNewsById(id);
            res.status(200).json(news)
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    async createNews(req, res) {
        try {
            const { title, description } = req.body;
            if (!title || !description) {
                res.status(401).json({
                    message: "Title or description can not be empty"
                })
            } else {
                const news = await NewsService.createNews({ title, description });
                res.status(204).json()
            }
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    async updateNews(req, res) {
        try {
            const id = req.params.id;
            const {title, description} = req.body
            
            await NewsService.updateNews(
                {
                title: title?.length === 0 ? undefined : title, 
                description: description?.length === 0 ? undefined : description, 
                id});
            res.status(204).json()
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    async deleteNews(req, res) {
        try {
            const id = req.params.id;
            await NewsService.deleteNews(id);
            res.status(204).json()
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }
}

export default new NewsController();