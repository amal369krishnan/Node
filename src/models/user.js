const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("user", {
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	fullname: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});
