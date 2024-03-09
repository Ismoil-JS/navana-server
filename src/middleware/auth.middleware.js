import userService from "../module/users/user.service.js";
import { config } from "dotenv";
import { verifyToken } from "../helpers/jwt.helper.js";
config();

// Admin authorization
export const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res
        .status(401)
        .json({ message: "No authentication token, authorization denied." });

    const verified = verifyToken(token);
    if (!verified)
      return res
        .status(401)
        .json({ message: "Token verification failed, authorization denied." });

    const user = await userService.getUserById(verified.id);

    if (user[0].role !== 'admin')
      return res
        .status(401)
        .json({ message: "Admin resources access denied." });

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};