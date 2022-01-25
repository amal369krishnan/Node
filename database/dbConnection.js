const Sequelize = require("sequelize")

const database = new Sequelize("students","user","pass",{
    host:"./test.sqlite",
    dialect:"sqlite"
});

module.exports=database