const Student = require("../db/studentModel");
const Subject = require("../db/subjectModel");

const createStudent = async (req, res) => {
	console.log(req);

	const studentInfo = await Student.create({
		name: req.name,
		instituteName: req.instituteName,
	});
	return studentInfo;
};

module.exports = { createStudent };
