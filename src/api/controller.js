const Student = require("../models/studentModel");
const Subject = require("../models/subjectModel");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

const createStudent = async (req, res) => {
	const { body } = req;
	if (body) {
		try {
			const studentInfo = await Student.create(body);
			return res.status(200).json(studentInfo);
		} catch (error) {
			return res.status(400).json(error);
		}
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

const Register = async (req, res) => {
	const { body } = req;
	if (body) {
		const alreadyexists = await user.findOne({ where: { email: body.email } });
		if (alreadyexists) {
			return res.json({ message: "User already exists" });
		}
		const user_res = await user.create(body);
		return res.status(200).json(user_res);
	}
	return res.json("something went wrong");
};

const Login = async (req, res) => {
	const { body } = req;
	if (body) {
		const userinfo = await user.findOne({ where: { email: body.email } });
		if (!userinfo) {
			return res.status(400).json("Email/password not matches correctly");
		}
		const jwt_token = jwt.sign(
			{ email: userinfo.email, id: userinfo.id },
			"bla@123",
			{
				expiresIn: 86400, // expires in 24 hours
			}
		);
		return res.status(200).json(jwt_token);
	}
	return res.status(400).json("Email/password not matches correctly");
};

module.exports = {
	createStudent,
	createSubject,
	studentWithSubjects,
	Register,
	Login,
};
