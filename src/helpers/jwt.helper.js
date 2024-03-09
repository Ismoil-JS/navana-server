import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign({ id: user.id }, "navana");
}

export const verifyToken = (token) => {
    return jwt.verify(token, "navana");
}
