const {Router} = require("express");
const setStudentDetails = require("../student/setters")
const getStudentDetails = require("../student/getters")
const router = Router()
router.get("/",async(req,res)=>{
   const response =  await getStudentDetails();
    return res.status(200).json(response)
})

router.post("/",async(req,res)=>{
    let {body} = req
    const response =  await setStudentDetails(body);
    return res.status(200).json(response)
})

module.exports = router;