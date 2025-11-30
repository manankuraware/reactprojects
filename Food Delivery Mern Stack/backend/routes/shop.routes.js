import express from "express";
import { createEditShop, getMyshop } from "../controllers/shop.controllers";
import isAuth from "../middlewares/isAuth.js";
import upload from "../middlewares/multer.js";

const shopRouter = express.Router();

shopRouter.post("/create-edit", isAuth, upload.single("image"), createEditShop);
shopRouter.get("/get-my", isAuth, getMyshop);

export default shopRouter;
