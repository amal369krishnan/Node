const student = require("./model")

const studentGetDetails = async()=>{
    return await student.findAll();
}

module.exports = studentGetDetails