const sequelize = require("./index");
const Sequelize = require("sequelize");

const Student = sequelize.define("student", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	instituteName: {
		type: Sequelize.STRING,
		allowNull: true,
	},
});

module.exports = Student;
