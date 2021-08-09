// import * as controller from "./controller";
const controller = require("./controller");
const router = require("express").Router();

const defaultRouters = () => {
	router.post("/", controller.createStudent);
	return router;
};

module.exports = defaultRouters;
