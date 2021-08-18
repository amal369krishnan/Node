import express from "express";
import * as controller from "./controllers.js";
const router = express.Router();

export default function defaultRouters() {
	router.post("/", controller.createUser);
	router.post("/login", controller.loginUser);
	router.get("/:id", controller.findOne);
	router.get("/", controller.listingAlluser);
	router.put("/update", controller.updateUser);
	return router;
}
