import express from "express";
import createUser from "./controllers.js";
const router = express.Router();

export default function defaultRouters() {
	router.post("/", createUser);
	return router;
}
