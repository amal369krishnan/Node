// import * as controller from "./controller";
const controller = require("./controller");
const router = require("express").Router();

const defaultRouters = () => {
	router.post("/student/", controller.createStudent);
	router.post("/subject/", controller.createSubject);
	router.get("/",controller.studentWithSubjects)
	return router;
};

module.exports = defaultRouters;
