const sequelize = require("../db");
const Sequelize = require("sequelize");

const subject = sequelize.define("subject", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	subjectname: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = subject;
