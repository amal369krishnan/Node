// import * as controller from "./controller";
const controller = require("./controller");
const router = require("express").Router();

const defaultRouters = () => {
	router.post("/student/", controller.createStudent);
	router.post("/subject/", controller.createSubject);
	router.get("/", controller.studentWithSubjects);
	router.post("/", controller.Register);
	router.post("/login", controller.Login);
	return router;
};

module.exports = defaultRouters;
