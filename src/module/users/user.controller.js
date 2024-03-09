import UserService from "./user.service.js";
import { generateToken } from "../../helpers/jwt.helper.js";

class CommentController {
    async getAll(_, res) {
        const users = await UserService.getAll();
        res.status(200).json(users);
    }

    async signIn(req, res) {
        const user = await UserService.signIn(req.body);

        if (user.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }

        const token = generateToken(user[0]);
        res.cookie("token", token);
        res.header("Authorization", token);

        const {id, username, role} = user[0];

        res.status(200).json({ token, id, username, role});
    }

    async signUp(req, res) {
        await UserService.signUp(req.body).catch((err) => {
            return res.status(400).json({ message: err.message });
        });
        res.status(204).json();
    }
}

export default new CommentController();