const express = require("express");
const sequelize = require("./src/db");
const defaultRouters = require("./src/api");
// const Student = require("./db/studentModel");
// const Subject = require("./db/subjectModel");
const http = require("http");
const app = express();
const Port = 8081 || process.env.PORT;

app.use(express.json());
/*Student.hasMany(Subject);
sequelize
	.sync({ force: true })
	.then((res) => {
		console.log(res);
	})
	.then((student) => {
		return Student.create({ name: "Amal", instituteName: "VTU" });
	})
	.then((student) => {
		return student.createSubject({
			subjectname: "Computer Science",
		});
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});*/

sequelize.authenticate({ force: true }).then((res) => {
	console.log("Authentication to db successfull");
	app.use("/api/v1", defaultRouters());
});

const server = http.createServer(app);
server.listen(Port, () => {
	console.log(`Server running on port : ${Port}`);
});
