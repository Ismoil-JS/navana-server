import {Router} from "express";
import { carRouter } from "../module/car/car.routes.js";
import { commentRouter } from "../module/comment/comment.routes.js";
import { newsRouter } from "../module/news/new.routes.js";
import { userRouter } from "../module/users/user.routes.js";

export const router = Router()
    .use('/car', carRouter)
    .use('/comment', commentRouter)
    .use('/news', newsRouter)
    .use('/user', userRouter)
