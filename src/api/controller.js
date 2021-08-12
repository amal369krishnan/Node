const Student = require("../db/studentModel");
const Subject = require("../db/subjectModel");

const createStudent = async (req, res) => {
	const { body } = req;
	if (body) {
		const studentInfo = await Student.create(body);
		return res.status(200).json(studentInfo);
	}
	return res.status(400).json("Something went wrong");
};

const createSubject = async (req, res) => {
	Student.hasMany(Subject);
	const { body } = req;
	const studentInfo = await Student.findOne({ where: { id: body.student_id } });
	if (body && studentInfo) {
		const subjectres = await studentInfo.createSubject({
			subjectname: body.subjectname,
		});
		return res.status(200).json(subjectres);
	}
	return res
		.status(400)
		.json("selected student must be removed or not created");
};

const studentWithSubjects = async (req, res) => {
	Student.hasMany(Subject);
	Subject.belongsTo(Student);
	const result = await Student.findAll({ include: [Subject] });
	return res.status(200).json(result);
};

module.exports = { createStudent, createSubject, studentWithSubjects };
