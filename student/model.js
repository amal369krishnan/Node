const {DataTypes} = require("sequelize");
const sequelize = require("../database/dbConnection")

const model = sequelize.define("student",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    name:DataTypes.STRING,
    age:DataTypes.INTEGER
});

module.exports = model;