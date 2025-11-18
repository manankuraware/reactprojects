import express from "express";
import { createEditShop } from "../controllers/shop.controllers";

const shopRouter = express.Router();

shopRouter.get("/create-edit", isAuth, createEditShop);

export default shopRouter;
