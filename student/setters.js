const student = require("./model")

const studentSetDetails = async(data)=>{
    return await student.create(data);
}

module.exports = studentSetDetails;